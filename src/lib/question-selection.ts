export interface QuestionCandidate {
  id: string;
  factId: string;
  difficultyScore: number;
  categoryId: string;
  lastSeenAt?: Date | null;
}

export interface SelectQuestionsOptions {
  candidates: QuestionCandidate[];
  seenQuestionIds: Set<string>;
  seenFactIds: Set<string>;
  limit: number;
}

export function selectFreshQuestions(options: SelectQuestionsOptions): QuestionCandidate[] {
  const fresh = options.candidates.filter((q) => {
    return !options.seenQuestionIds.has(q.id) && !options.seenFactIds.has(q.factId);
  });

  const fallback = options.candidates.filter((q) => {
    return !fresh.some((f) => f.id === q.id);
  });

  const selected: QuestionCandidate[] = [];
  const usedQuestionIds = new Set<string>();
  const usedFactIds = new Set<string>();

  for (const candidate of [...fresh, ...fallback]) {
    if (selected.length >= options.limit) break;
    if (usedQuestionIds.has(candidate.id)) continue;
    if (usedFactIds.has(candidate.factId)) continue;

    selected.push(candidate);
    usedQuestionIds.add(candidate.id);
    usedFactIds.add(candidate.factId);
  }

  return selected;
}
