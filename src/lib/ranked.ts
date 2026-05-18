import type { Division, MatchResultInput, RankTier } from "@/types/ranked";

export const TIER_ORDER: RankTier[] = [
  "RECRUIT",
  "BRONZE",
  "SILVER",
  "GOLD",
  "PLATINUM",
  "DIAMOND",
  "MASTER",
  "GRANDMASTER",
  "CHALLENGER",
  "LEGEND",
];

export const DIVISION_ORDER: Division[] = ["IV", "III", "II", "I"];

export function calculatePerformanceScore(input: MatchResultInput): number {
  const accuracyScore = input.accuracy * 60;
  const speedScore = Math.max(0, 20 - input.averageResponseTimeMs / 500);
  const streakScore = Math.min(input.maxStreak * 1.5, 15);
  const difficultyScore = input.difficultyScore * 25;
  const penalty = input.suspiciousScore > 0 ? Math.min(input.suspiciousScore, 30) : 0;

  return Math.round(accuracyScore + speedScore + streakScore + difficultyScore - penalty);
}

export function expectedScoreForMmr(mmr: number): number {
  if (mmr < 900) return 45;
  if (mmr < 1100) return 55;
  if (mmr < 1400) return 65;
  if (mmr < 1700) return 75;
  if (mmr < 2100) return 85;
  return 95;
}

export function calculateLpChange(performanceScore: number, mmr: number): number {
  const expected = expectedScoreForMmr(mmr);
  const raw = Math.round((performanceScore - expected) * 0.75);
  return Math.max(-30, Math.min(30, raw));
}
