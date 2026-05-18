import { NextResponse } from "next/server";

export async function POST() {
  // TODO Codex:
  // 1. Validar usuario autenticado.
  // 2. Obtener temporada activa.
  // 3. Seleccionar 20 preguntas con selectQuestionsForRankedMatch.
  // 4. Crear Match.
  // 5. Crear primer MatchQuestion.
  // 6. Retornar solo la primera pregunta y token temporal.
  return NextResponse.json({
    message: "TODO: start ranked match",
  });
}
