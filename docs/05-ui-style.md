# 05 — UI / Estilo Visual

## Dirección visual

- Dark mode por defecto.
- Gamer premium, no infantil.
- Neón controlado.
- Cards grandes.
- Bordes suaves.
- Motion rápido y elegante.
- Sensación competitiva.

## Paleta sugerida

```text
Background: #070A12
Surface: #101522
Surface elevated: #151B2E
Text primary: #F8FAFC
Text secondary: #94A3B8
Accent cyan: #22D3EE
Accent violet: #8B5CF6
Success: #22C55E
Danger: #EF4444
Warning: #F59E0B
```

## Pantallas clave

### Home

- Hero central.
- Botón “Jugar Ranked”.
- Preview del ranking.
- Cards de categorías.
- Temporada actual.

### Ranked

- Card de rango.
- LP actual.
- Botón iniciar partida.
- Estadísticas recientes.
- Explicación de reglas.

### Match

Componentes:

- `MatchHeader`
- `QuestionTimer`
- `QuestionCard`
- `AnswerOptionButton`
- `StreakMeter`
- `RankProgressMini`
- `AntiCheatStatus`

### Resultado

- Score final.
- Correctas/incorrectas.
- LP ganado/perdido.
- Rango actualizado.
- Preguntas más difíciles falladas.
- Botón “Jugar otra”.

### Leaderboard

- Top 3 destacado.
- Tabla top 100.
- Filtros: global, país, categoría, temporada.
- Badge de verificación.

## UX anti-trampa

- No permitir copiar texto fácilmente en ranked.
- No pausar.
- Pregunta una a una.
- Feedback después de responder.
- Tiempo corto, pero justo.
