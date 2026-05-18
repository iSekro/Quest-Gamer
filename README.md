# GamerRank — Competitive Gaming Trivia Platform

GamerRank es una aplicación web competitiva tipo ranked para medir conocimiento gamer mediante trivia de alta velocidad, rangos, temporadas, ranking mundial, banco masivo de preguntas y sistema anti-cheat.

## Objetivo del MVP

Crear una versión jugable donde un usuario pueda:

1. Entrar a la web.
2. Jugar una partida ranked de 20 preguntas.
3. Recibir score, precisión, tiempo promedio y resultado.
4. Ganar o perder LP.
5. Ver su rango.
6. Aparecer en un leaderboard de temporada.
7. Evitar preguntas repetidas gracias a `question_id` y `fact_id`.

## Stack recomendado

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Prisma ORM
- PostgreSQL
- Supabase/Auth o NextAuth
- Vercel
- Upstash Redis, opcional para ranking rápido y rate limit

## Cómo usar este starter

Este paquete no reemplaza `create-next-app`; funciona como estructura profesional inicial para pegar dentro de tu repo real.

### Ruta recomendada

```powershell
cd C:\proyectos
npx create-next-app@latest gamerrank-web --typescript --tailwind --eslint --app --src-dir
cd gamerrank-web
```

Después copia el contenido de este starter dentro de `gamerrank-web`.

Instala dependencias sugeridas:

```powershell
npm install @prisma/client prisma framer-motion lucide-react zod jose
npx shadcn@latest init
npx shadcn@latest add button card badge progress tabs table input dialog dropdown-menu avatar separator
```

Configura Prisma:

```powershell
npx prisma init
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

## Flujo de trabajo recomendado

1. Modifica `docs/`.
2. Dale a Codex una tarea pequeña de `prompts/codex/`.
3. Ejecuta `npm run lint`, `npm run build` y tests.
4. Si falla, pega el error completo a ChatGPT.
5. Haz commit cuando funcione.

## Regla central

ChatGPT diseña y ordena. Codex implementa. Tú pruebas.
