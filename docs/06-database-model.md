# 06 — Modelo de Base de Datos

## Entidades principales

### User

Jugador registrado.

### Season

Temporada competitiva.

### PlayerRankProfile

Perfil ranked por usuario y temporada.

### Category

Categorías y subcategorías.

### Fact

Dato base verificable.

### Question

Pregunta variante asociada a un fact.

### Match

Partida.

### MatchQuestion

Pregunta servida dentro de una partida.

### UserQuestionHistory

Historial anti-repetición.

### AntiCheatEvent

Eventos sospechosos.

### LeaderboardEntry

Entrada de ranking.

## Consideración crítica

`Question.correctAnswerHash` debe evitar exponer la respuesta correcta directamente en el frontend. La validación real debe ocurrir en backend contra datos seguros.

## Estados recomendados

### MatchStatus

- `IN_PROGRESS`
- `COMPLETED`
- `ABANDONED`
- `UNDER_REVIEW`
- `INVALIDATED`

### QuestionStatus

- `DRAFT`
- `PENDING_REVIEW`
- `APPROVED`
- `REJECTED`
- `PUBLISHED`
- `ARCHIVED`

### VerifiedStatus

- `NORMAL`
- `UNDER_REVIEW`
- `VERIFIED`
- `HIDDEN`
- `BANNED`
