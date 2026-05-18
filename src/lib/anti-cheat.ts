export interface AntiCheatInput {
  responseTimeMs: number;
  isCorrect: boolean;
  difficulty: "EASY" | "MEDIUM" | "HARD" | "INSANE" | "LEGENDARY";
  currentRankMmr: number;
}

export interface AntiCheatResult {
  suspiciousScore: number;
  events: Array<{
    eventType: string;
    severity: number;
    metadata?: Record<string, unknown>;
  }>;
}

export function evaluateAnswerIntegrity(input: AntiCheatInput): AntiCheatResult {
  const events: AntiCheatResult["events"] = [];

  if (input.isCorrect && input.responseTimeMs < 700 && ["INSANE", "LEGENDARY"].includes(input.difficulty)) {
    events.push({
      eventType: "IMPOSSIBLY_FAST_HARD_ANSWER",
      severity: 8,
      metadata: {
        responseTimeMs: input.responseTimeMs,
        difficulty: input.difficulty,
      },
    });
  }

  if (input.responseTimeMs < 250) {
    events.push({
      eventType: "BOT_LIKE_RESPONSE_TIME",
      severity: 10,
      metadata: {
        responseTimeMs: input.responseTimeMs,
      },
    });
  }

  const suspiciousScore = events.reduce((sum, event) => sum + event.severity, 0);

  return {
    suspiciousScore,
    events,
  };
}
