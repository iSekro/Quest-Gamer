import { NextResponse } from "next/server";

export async function POST() {
  // TODO Codex:
  // 1. Validar token firmado.
  // 2. Calcular responseTimeMs en servidor.
  // 3. Validar alternativa.
  // 4. Registrar MatchQuestion.
  // 5. Crear UserQuestionHistory.
  // 6. Evaluar anti-cheat.
  // 7. Retornar feedback y próxima pregunta si existe.
  return NextResponse.json({
    message: "TODO: answer ranked question",
  });
}
