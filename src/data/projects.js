import awe2 from '../assets/awe2.jpg';
import awe3 from '../assets/awe3.jpg';
import awe4 from '../assets/awe4.jpg';
import v1 from '../assets/v1.png';
import v2 from '../assets/v2.png';
import v3 from '../assets/v3.png';
import v4 from '../assets/v4.png';
import skrt1 from '../assets/skrt1.png';
import skrt2 from '../assets/skrt2.png';
import skrt3 from '../assets/skrt3.png';

export const projects = [
  {
    id: 'awe',
    title: 'Autonomous Workflow Engine',
    repo: 'https://github.com/niravkpatel36/AWE.git',
    stack: 'React · TypeScript · FastAPI · Docker',
    short: 'Transforms high-level goals into DAGs with live execution visualization and real-time updates.',
    images: [awe2, awe3, awe4],
    description: 'AWE is a full-stack autonomous execution system that decomposes high-level objectives into structured, observable workflows. Each task is materialized as a node in a Directed Acyclic Graph (DAG) and updates are streamed in real time. Designed for transparency, determinism, and modular extensibility, AWE supports experimentation, internal tooling, and research in autonomous systems.',
    highlights: ['Live DAG', 'WebSocket Updates'],
  },
  {
    id: 'venture',
    title: 'VENTURE',
    repo: 'https://github.com/niravkpatel36/VENTURE.git',
    demo: 'https://venture-qgzz.onrender.com/',
    stack: 'Django · JavaScript · OAuth 2.0 · HTML/CSS',
    short: 'A full-stack music platform that combines discovery, interactive prompts, and curated album experiences.',
    images: [v1, v2, v3, v4],
    description: 'VENTURE is a production-oriented, full-stack music exploration system that unifies external API integration, deterministic prompt interpretation, and custom audio playback within a single cohesive architecture. The platform supports real-time music search via the Spotify Web API, a prompt-driven mood and theme explorer, and a fully designed interactive album experience. Built with clear separation of concerns and extensibility in mind, VENTURE prioritizes predictable rendering, accessibility, and scalability while providing a forward-compatible surface for future AI-driven enhancements.',
    highlights: ['Spotify API Integration', 'Deterministic Prompt Engine'],
  },
  {
    id: 'skrt',
    title: 'SKRT',
    stack: 'Python · Kivy · OOP · Canvas',
    repo: 'https://github.com/niravkpatel36/SKRT.git',
    short: 'A cross-platform 2D perspective runner game with dynamic tiles, collisions, and score tracking.',
    images: [skrt1, skrt2, skrt3],
    description: 'SKRT is a Python game built with Kivy that demonstrates interactive graphics, procedural tile generation, perspective rendering, and smooth animation. Players navigate a spaceship along a continuously scrolling track while avoiding collisions. The project emphasizes modular design, reusable components, and cross-platform deployment for desktop and mobile environments.',
    highlights: ['Perspective Rendering','Score Tracking'],
  },
];


