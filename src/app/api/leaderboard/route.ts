import { NextResponse } from "next/server";

export async function GET() {
  // TODO Codex:
  // 1. Filtrar por temporada, país y categoría.
  // 2. Excluir UNDER_REVIEW/HIDDEN/BANNED.
  // 3. Retornar top 100.
  return NextResponse.json({
    entries: [],
  });
}
