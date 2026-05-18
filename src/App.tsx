import { useMemo, useState } from 'react';
import { sampleQuestions } from './data/questions';
import { answerQuestion, calculateScore, getNextQuestionIndex, validateQuestionBank } from './lib/quizEngine';
import './styles.css';

type GameState = 'playing' | 'finished';

export default function App() {
  const questions = useMemo(() => {
    validateQuestionBank(sampleQuestions);
    return sampleQuestions;
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>('Elige una alternativa para comenzar.');
  const [gameState, setGameState] = useState<GameState>('playing');

  const currentQuestion = questions[currentQuestionIndex];
  const progress = `${currentQuestionIndex + 1}/${questions.length}`;

  function handleAnswer(optionId: string) {
    if (selectedOptionId || gameState === 'finished') return;

    const result = answerQuestion(currentQuestion, optionId);
    setSelectedOptionId(optionId);
    setScore((previousScore) => calculateScore(previousScore, result));

    if (result.isCorrect) {
      setCorrectAnswers((value) => value + 1);
      setFeedback(`CORRECTO +100 — ${result.explanation}`);
    } else {
      const correctText = currentQuestion.options.find((option) => option.id === result.correctOptionId)?.text;
      setFeedback(`INCORRECTO — La respuesta era: ${correctText}. ${result.explanation}`);
    }
  }

  function handleNextQuestion() {
    const nextIndex = getNextQuestionIndex(currentQuestionIndex, questions.length);

    if (nextIndex === null) {
      setGameState('finished');
      setFeedback('Partida terminada. Revisa tu resultado.');
      return;
    }

    setCurrentQuestionIndex(nextIndex);
    setSelectedOptionId(null);
    setFeedback('Elige una alternativa.');
  }

  function restartGame() {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setSelectedOptionId(null);
    setFeedback('Elige una alternativa para comenzar.');
    setGameState('playing');
  }

  return (
    <main className="screen-shell">
      <section className="crt-window" aria-label="Quest Gamer quiz">
        <header className="title-bar">
          <span className="pixel-dot" />
          <span>QUEST GAMER.EXE</span>
          <span className="title-bar__right">8-BIT TEST MODE</span>
        </header>

        <div className="game-panel">
          <div className="hud">
            <div>
              <span className="hud-label">SCORE</span>
              <strong>{score}</strong>
            </div>
            <div>
              <span className="hud-label">PREGUNTA</span>
              <strong>{progress}</strong>
            </div>
            <div>
              <span className="hud-label">ACIERTOS</span>
              <strong>{correctAnswers}</strong>
            </div>
          </div>

          {gameState === 'playing' ? (
            <>
              <div className="question-card">
                <p className="category-chip">{currentQuestion.category}</p>
                <h1>{currentQuestion.text}</h1>
              </div>

              <div className="options-grid" role="list" aria-label="Alternativas de respuesta">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOptionId === option.id;
                  const isCorrect = selectedOptionId !== null && option.id === currentQuestion.correctOptionId;
                  const isWrong = isSelected && option.id !== currentQuestion.correctOptionId;

                  return (
                    <button
                      key={option.id}
                      className={[
                        'answer-button',
                        isCorrect ? 'answer-button--correct' : '',
                        isWrong ? 'answer-button--wrong' : '',
                      ].join(' ')}
                      onClick={() => handleAnswer(option.id)}
                      disabled={selectedOptionId !== null}
                    >
                      <span className="answer-key">{String.fromCharCode(65 + index)}</span>
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              <div className="feedback-box" aria-live="polite">{feedback}</div>

              <button className="next-button" onClick={handleNextQuestion} disabled={!selectedOptionId}>
                {currentQuestionIndex + 1 === questions.length ? 'TERMINAR PARTIDA' : 'SIGUIENTE'}
              </button>
            </>
          ) : (
            <div className="result-card">
              <p className="category-chip">RESULTADO FINAL</p>
              <h1>{score} puntos</h1>
              <p>
                Respondiste {correctAnswers} de {questions.length} preguntas correctamente.
              </p>
              <button className="next-button" onClick={restartGame}>REINICIAR TEST</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
