# Quest Gamer

Juego de trivia gamer con estética retro 8-bit.

## Estado actual

La primera versión jugable incluye:

- Interfaz básica tipo ventana de juego antiguo.
- Preguntas con exactamente 4 alternativas.
- Solo 1 alternativa correcta por pregunta.
- Feedback inmediato al responder.
- Score básico de +100 por respuesta correcta.
- Tests automatizados para validar el motor de preguntas.

## Stack

- Vite
- React
- TypeScript
- Vitest
- Testing Library

## Instalar

```powershell
npm install
```

## Correr en desarrollo

```powershell
npm run dev
```

Luego abre la URL que indique Vite, normalmente:

```text
http://localhost:5173
```

## Ejecutar tests

```powershell
npm test
```

## Build de producción

```powershell
npm run build
```

## Estructura principal

```text
src/
├── App.tsx
├── main.tsx
├── styles.css
├── data/
│   └── questions.ts
├── lib/
│   ├── quizEngine.ts
│   └── quizEngine.test.ts
└── test/
    └── setup.ts
```

## Regla de preguntas

Cada pregunta debe cumplir:

```ts
{
  id: string;
  category: string;
  text: string;
  options: [4 alternativas únicas];
  correctOptionId: string; // debe existir dentro de options
  explanation: string;
}
```

El motor valida que:

1. Existan exactamente 4 alternativas.
2. Los IDs de alternativas sean únicos.
3. Los textos de alternativas sean únicos.
4. La respuesta correcta exista dentro de las alternativas.

## Próximos pasos sugeridos

1. Agregar temporizador por pregunta.
2. Crear pantalla de inicio.
3. Cargar preguntas desde JSON/CSV.
4. Agregar rangos estilo competitivo.
5. Guardar historial de partidas.
6. Crear leaderboard.
