export interface AnswerOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  category: string;
  text: string;
  options: AnswerOption[];
  correctOptionId: string;
  explanation: string;
}

export interface AnswerResult {
  isCorrect: boolean;
  selectedOptionId: string;
  correctOptionId: string;
  explanation: string;
}

export function validateQuestion(question: QuizQuestion): void {
  if (question.options.length !== 4) {
    throw new Error(`Question ${question.id} must have exactly 4 options.`);
  }

  const optionIds = new Set(question.options.map((option) => option.id));

  if (optionIds.size !== 4) {
    throw new Error(`Question ${question.id} must have 4 unique option ids.`);
  }

  if (!optionIds.has(question.correctOptionId)) {
    throw new Error(`Question ${question.id} correctOptionId must exist in options.`);
  }

  const optionTexts = question.options.map((option) => option.text.trim().toLowerCase());
  const uniqueTexts = new Set(optionTexts);

  if (uniqueTexts.size !== 4) {
    throw new Error(`Question ${question.id} must have 4 unique option texts.`);
  }
}

export function validateQuestionBank(questions: QuizQuestion[]): void {
  if (questions.length === 0) {
    throw new Error('Question bank cannot be empty.');
  }

  questions.forEach(validateQuestion);
}

export function answerQuestion(question: QuizQuestion, selectedOptionId: string): AnswerResult {
  validateQuestion(question);

  const optionExists = question.options.some((option) => option.id === selectedOptionId);

  if (!optionExists) {
    throw new Error(`Selected option ${selectedOptionId} does not exist in question ${question.id}.`);
  }

  return {
    isCorrect: selectedOptionId === question.correctOptionId,
    selectedOptionId,
    correctOptionId: question.correctOptionId,
    explanation: question.explanation,
  };
}

export function calculateScore(previousScore: number, result: AnswerResult): number {
  return result.isCorrect ? previousScore + 100 : previousScore;
}

export function getNextQuestionIndex(currentIndex: number, totalQuestions: number): number | null {
  const nextIndex = currentIndex + 1;
  return nextIndex < totalQuestions ? nextIndex : null;
}
