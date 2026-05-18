# 03 — Banco Masivo de Preguntas

## Principio central

No se debe pensar en “preguntas sueltas”. Se debe pensar en:

```text
Fact verificable → Variantes de pregunta → Historial por usuario
```

## Ejemplo

### Fact

```text
Super Mario 64 fue lanzado originalmente en 1996 para Nintendo 64.
```

### Variantes

```text
¿En qué año salió Super Mario 64?
¿Qué juego de Nintendo 64 salió originalmente en 1996?
Super Mario 64 debutó originalmente en:
```

## Regla anti-repetición

No basta con evitar el mismo `question_id`. También se debe evitar el mismo `fact_id`.

```text
No repetir question_id en 180 días.
No repetir fact_id en 60-120 días.
Nunca repetir pregunta dentro de una misma partida.
```

## Categorías iniciales

- Gaming general
- Historia de videojuegos
- Nintendo
- PlayStation
- Xbox
- PC Gaming
- League of Legends
- RPG
- Soulslike
- Esports
- Hardware gamer
- Cultura gamer

## Estados de pregunta

- `DRAFT`
- `PENDING_REVIEW`
- `APPROVED`
- `REJECTED`
- `PUBLISHED`
- `ARCHIVED`

Solo `PUBLISHED` entra a ranked.

## Dificultad inicial

- `EASY`
- `MEDIUM`
- `HARD`
- `INSANE`
- `LEGENDARY`

## Dificultad dinámica

Con datos reales, se ajusta por tasa de acierto:

| Tasa de acierto | Dificultad real |
|---|---|
| 85%-100% | Fácil |
| 60%-84% | Media |
| 35%-59% | Difícil |
| 10%-34% | Infernal |
| 0%-9% | Legendaria |

## Selección de preguntas

La función principal debe ser:

```ts
selectQuestionsForRankedMatch(userId, categoryId, mmr)
```

Debe:

1. Excluir preguntas vistas recientemente.
2. Excluir facts vistos recientemente.
3. Balancear dificultad por MMR.
4. Balancear subcategorías.
5. Evitar repetición dentro del match.
6. Usar menos recientes si falta stock.
