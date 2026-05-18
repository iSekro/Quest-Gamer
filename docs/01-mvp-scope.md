# 01 — Alcance del MVP

## MVP v0.1

El primer MVP debe demostrar que el loop central funciona:

```text
Entrar → Jugar ranked → Responder 20 preguntas → Recibir score/rango → Ver leaderboard → Repetir
```

## Incluido

### Páginas

- `/` Home
- `/ranked` Inicio de ranked
- `/ranked/match` Partida activa
- `/leaderboard` Ranking
- `/profile` Perfil del jugador
- `/admin/questions` Panel básico de preguntas

### Funciones

- Partida ranked de 20 preguntas.
- Selección de preguntas desde base de datos.
- Timer por pregunta.
- Score server-side.
- LP visible.
- MMR oculto.
- Historial de preguntas vistas.
- Ranking global de temporada.
- Seed inicial de categorías, facts y preguntas.
- Anti-cheat básico.

## No incluido en MVP

- Pagos.
- App móvil nativa.
- Matchmaking 1v1.
- Chat.
- Clanes.
- Generación IA automática en producción.
- Marketplace.
- Sistema avanzado de skins.

## Métrica de validación

El MVP funciona si 10 usuarios de prueba juegan al menos 3 partidas cada uno y comparan ranking/rangos sin que el sistema se rompa.

## Criterios de aceptación

- El proyecto corre localmente.
- La base de datos migra correctamente.
- Se puede iniciar una partida.
- Se responden 20 preguntas.
- Se calcula resultado.
- Se actualiza rango/LP.
- Aparece en leaderboard.
- No se envía respuesta correcta al frontend antes de responder.
