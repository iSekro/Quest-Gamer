# 04 — Sistema Anti-Cheat

## Objetivo

Hacer que usar IA externa, bots u OCR sea:

- Difícil.
- Lento.
- Detectable.
- Poco rentable para ranked.

## Reglas fundamentales

1. El backend es autoritativo.
2. El frontend nunca calcula score real.
3. El frontend nunca recibe la respuesta correcta antes de contestar.
4. Se envía una pregunta a la vez.
5. Cada pregunta tiene token temporal firmado.
6. El tiempo válido se mide en servidor.

## Token por pregunta

Debe incluir:

```text
userId
matchId
questionId
issuedAt
expiresAt
nonce
signature
```

## Rechazos automáticos

El servidor rechaza respuesta si:

- Token inválido.
- Token expirado.
- Token corresponde a otro match.
- Pregunta ya respondida.
- Respuesta fuera de tiempo.
- Alternativa inexistente.

## Señales sospechosas

| Señal | Riesgo |
|---|---|
| Respuesta infernal correcta en menos de 700 ms | Alto |
| Muchas respuestas perfectas seguidas | Alto |
| Tiempos demasiado constantes | Medio/alto |
| Precisión extrema para rango bajo | Alto |
| Cambio brutal de rendimiento | Medio |
| Muchas partidas diarias con precisión estable | Medio |

## Flujo de sanción

```text
NORMAL → SUSPICIOUS → UNDER_REVIEW → RESTRICTED → BANNED_FROM_RANKED
```

## Leaderboard

Los matches `UNDER_REVIEW` no deben aparecer en rankings top hasta ser verificados.

## Integridad competitiva

Cada jugador tiene:

```text
integrity_score = 100
```

Baja con eventos graves.
