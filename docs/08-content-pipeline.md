# 08 — Pipeline de Contenido

## Objetivo

Escalar de 1.000 a 100.000+ preguntas sin perder calidad.

## Flujo

```text
Tema → Fact → Preguntas variantes → Revisión → Publicación
```

## Estados

1. `DRAFT`
2. `PENDING_REVIEW`
3. `APPROVED`
4. `PUBLISHED`
5. `ARCHIVED`

## Importación inicial

Usar JSON o CSV.

Campos mínimos:

```text
category
entity
property
value
questionText
answerOptions
correctAnswer
difficulty
explanation
source
```

## Revisión humana

Preguntas generadas por IA no pasan directo a ranked.

## Reglas de calidad

- No preguntas ambiguas.
- No preguntas dependientes de parches sin versión.
- No preguntas con dos respuestas posibles.
- No contenido protegido como logos o assets.
- No usar imágenes de juegos comerciales sin licencia en el producto.
