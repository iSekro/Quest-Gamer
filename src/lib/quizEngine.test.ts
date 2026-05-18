import { describe, expect, it } from 'vitest';
import { answerQuestion, calculateScore, getNextQuestionIndex, validateQuestion, validateQuestionBank } from './quizEngine';
import type { QuizQuestion } from './quizEngine';

const validQuestion: QuizQuestion = {
  id: 'q_valid',
  category: 'Test',
  text: '¿Cuál alternativa es correcta?',
  options: [
    { id: 'a', text: 'Primera' },
    { id: 'b', text: 'Segunda' },
    { id: 'c', text: 'Tercera' },
    { id: 'd', text: 'Cuarta' },
  ],
  correctOptionId: 'c',
  explanation: 'La tercera alternativa es la correcta.',
};

describe('quizEngine', () => {
  it('accepts a question with exactly 4 alternatives and 1 correct answer', () => {
    expect(() => validateQuestion(validQuestion)).not.toThrow();
  });

  it('rejects questions that do not have exactly 4 alternatives', () => {
    const invalidQuestion = {
      ...validQuestion,
      options: validQuestion.options.slice(0, 3),
    };

    expect(() => validateQuestion(invalidQuestion)).toThrow('must have exactly 4 options');
  });

  it('rejects questions where the correct answer does not exist in options', () => {
    const invalidQuestion = {
      ...validQuestion,
      correctOptionId: 'x',
    };

    expect(() => validateQuestion(invalidQuestion)).toThrow('correctOptionId must exist');
  });

  it('rejects duplicated option ids', () => {
    const invalidQuestion = {
      ...validQuestion,
      options: [
        { id: 'a', text: 'Primera' },
        { id: 'a', text: 'Segunda' },
        { id: 'c', text: 'Tercera' },
        { id: 'd', text: 'Cuarta' },
      ],
    };

    expect(() => validateQuestion(invalidQuestion)).toThrow('4 unique option ids');
  });

  it('rejects duplicated option texts', () => {
    const invalidQuestion = {
      ...validQuestion,
      options: [
        { id: 'a', text: 'Repetida' },
        { id: 'b', text: 'Repetida' },
        { id: 'c', text: 'Tercera' },
        { id: 'd', text: 'Cuarta' },
      ],
    };

    expect(() => validateQuestion(invalidQuestion)).toThrow('4 unique option texts');
  });

  it('validates a complete question bank', () => {
    expect(() => validateQuestionBank([validQuestion])).not.toThrow();
  });

  it('marks the selected answer as correct only when it matches correctOptionId', () => {
    expect(answerQuestion(validQuestion, 'c').isCorrect).toBe(true);
    expect(answerQuestion(validQuestion, 'a').isCorrect).toBe(false);
  });

  it('adds score only for correct answers', () => {
    const correctResult = answerQuestion(validQuestion, 'c');
    const wrongResult = answerQuestion(validQuestion, 'a');

    expect(calculateScore(0, correctResult)).toBe(100);
    expect(calculateScore(100, wrongResult)).toBe(100);
  });

  it('returns null when there are no more questions', () => {
    expect(getNextQuestionIndex(0, 2)).toBe(1);
    expect(getNextQuestionIndex(1, 2)).toBeNull();
  });
});
