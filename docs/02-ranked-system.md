# 02 — Sistema Ranked

## Filosofía

El usuario debe sentir progreso competitivo. Se usará:

- **MMR oculto:** mide habilidad real.
- **LP visible:** experiencia entendible para usuario.
- **Rango:** identidad competitiva.

## Rangos

| Tier | Divisiones |
|---|---|
| Recluta | IV, III, II, I |
| Bronce | IV, III, II, I |
| Plata | IV, III, II, I |
| Oro | IV, III, II, I |
| Platino | IV, III, II, I |
| Diamante | IV, III, II, I |
| Maestro | Sin divisiones |
| Gran Maestro | Top porcentaje |
| Retador | Top mundial |
| Leyenda | Top 0.01% |

## Partida ranked

- 20 preguntas.
- Una pregunta a la vez.
- Sin pausa.
- Score calculado en backend.
- El match puede quedar `COMPLETED` o `UNDER_REVIEW`.

## Dificultad por rango

### Rango bajo

- 6 fáciles
- 8 medias
- 5 difíciles
- 1 infernal

### Rango medio

- 3 fáciles
- 7 medias
- 7 difíciles
- 3 infernales

### Rango alto

- 1 fácil
- 4 medias
- 9 difíciles
- 6 infernales

## Fórmula de performance

```text
performance_score =
accuracy_score +
difficulty_score +
speed_score +
streak_score -
mistake_penalty
```

## LP

```text
lp_change = clamp(performance_score - expected_score, -30, +30)
```

## Ascenso

- 100 LP sube una división.
- El excedente se conserva parcialmente.
- De división I con 100 LP sube al siguiente tier.

## Descenso

- Si baja de 0 LP, desciende una división.
- Se puede aplicar protección inicial para nuevos jugadores.

## Soft reset de temporada

```text
new_mmr = 1000 + ((old_mmr - 1000) * 0.65)
```

## Estados de perfil ranked

- `ACTIVE`
- `PROVISIONAL`
- `UNDER_REVIEW`
- `RESTRICTED`
- `BANNED_FROM_RANKED`
