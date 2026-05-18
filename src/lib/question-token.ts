import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.QUESTION_TOKEN_SECRET ?? "development-secret-change-me"
);

export interface QuestionTokenPayload {
  userId: string;
  matchId: string;
  questionId: string;
  nonce: string;
}

export async function createQuestionToken(payload: QuestionTokenPayload, expiresInSeconds = 15) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${expiresInSeconds}s`)
    .sign(secret);
}

export async function verifyQuestionToken(token: string): Promise<QuestionTokenPayload> {
  const { payload } = await jwtVerify(token, secret);

  return {
    userId: String(payload.userId),
    matchId: String(payload.matchId),
    questionId: String(payload.questionId),
    nonce: String(payload.nonce),
  };
}
