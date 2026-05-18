import type { QuizQuestion } from '../lib/quizEngine';

export const sampleQuestions: QuizQuestion[] = [
  {
    id: 'q_mario_64_year',
    category: 'Nintendo',
    text: '¿En qué consola salió originalmente Super Mario 64?',
    options: [
      { id: 'a', text: 'Nintendo 64' },
      { id: 'b', text: 'GameCube' },
      { id: 'c', text: 'Super Nintendo' },
      { id: 'd', text: 'Wii' },
    ],
    correctOptionId: 'a',
    explanation: 'Super Mario 64 fue uno de los juegos emblema de Nintendo 64.',
  },
  {
    id: 'q_doom_genre',
    category: 'FPS',
    text: '¿Qué género popularizó fuertemente Doom en PC?',
    options: [
      { id: 'a', text: 'JRPG' },
      { id: 'b', text: 'FPS' },
      { id: 'c', text: 'MOBA' },
      { id: 'd', text: 'Puzzle táctico' },
    ],
    correctOptionId: 'b',
    explanation: 'Doom fue clave en la popularización de los shooters en primera persona.',
  },
  {
    id: 'q_lol_map',
    category: 'League of Legends',
    text: '¿Cuál es el mapa clásico principal de League of Legends?',
    options: [
      { id: 'a', text: 'Dust II' },
      { id: 'b', text: 'Blood Gulch' },
      { id: 'c', text: 'Grieta del Invocador' },
      { id: 'd', text: 'Nuketown' },
    ],
    correctOptionId: 'c',
    explanation: 'La Grieta del Invocador es el mapa clásico 5v5 principal.',
  },
  {
    id: 'q_elden_ring_studio',
    category: 'Soulslike',
    text: '¿Qué estudio desarrolló Elden Ring?',
    options: [
      { id: 'a', text: 'FromSoftware' },
      { id: 'b', text: 'Bethesda Game Studios' },
      { id: 'c', text: 'CD Projekt Red' },
      { id: 'd', text: 'Capcom' },
    ],
    correctOptionId: 'a',
    explanation: 'Elden Ring fue desarrollado por FromSoftware.',
  },
  {
    id: 'q_minecraft_style',
    category: 'Sandbox',
    text: '¿Qué tipo de experiencia representa mejor Minecraft?',
    options: [
      { id: 'a', text: 'Novela visual lineal' },
      { id: 'b', text: 'Sandbox de construcción y supervivencia' },
      { id: 'c', text: 'Simulador de carreras realista' },
      { id: 'd', text: 'Juego musical de ritmo' },
    ],
    correctOptionId: 'b',
    explanation: 'Minecraft combina construcción, exploración y supervivencia tipo sandbox.',
  },
];
