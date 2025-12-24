import awe1 from '../assets/awe1.jpg';
import awe2 from '../assets/awe2.jpg';
import awe3 from '../assets/awe3.jpg';
import awe4 from '../assets/awe4.jpg';
import v1 from '../assets/v1.png';
import v2 from '../assets/v2.png';
import v3 from '../assets/v3.png';
import v4 from '../assets/v4.png';

export const projects = [
  {
    id: 'awe',
    title: 'Autonomous Workflow Engine',
    repo: 'https://github.com/niravkpatel36/AWE.git',
    stack: 'React · TypeScript · FastAPI · Docker',
    short: 'Transforms high-level goals into DAGs with live execution visualization and real-time updates.',
    images: [awe1, awe2, awe3, awe4],
    description: 'AWE is a full-stack autonomous execution system that decomposes high-level objectives into structured, observable workflows. Each task is materialized as a node in a Directed Acyclic Graph (DAG) and updates are streamed in real time. Designed for transparency, determinism, and modular extensibility, AWE supports experimentation, internal tooling, and research in autonomous systems.',
    highlights: ['Live DAG', 'WebSocket Updates'],
    pinned: true
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
    pinned: true
  },
  {
    id: 'reco',
    title: 'Recommendation Engine',
    stack: 'Spark · Python · Scala',
    short: '+12% CTR through personalized features and A/B tests.',
    images: ['/assets/reco-1.jpg'],
    description: 'Built feature pipelines and offline evaluation to ship personalized models that improved product metrics.',
    highlights: ['+12% CTR','A/B tested'],
    metrics: { uplift: '+12%', evals: '1000s' },
    pinned: false
  },
  {
    id: 'reco',
    title: 'VENTURE',
    stack: 'Spark · Python · Scala',
    short: '+12% CTR through personalized features and A/B tests.',
    images: ['/assets/reco-1.jpg'],
    description: 'Built feature pipelines and offline evaluation to ship personalized models that improved product metrics.',
    highlights: ['+12% CTR','A/B tested'],
    metrics: { uplift: '+12%', evals: '1000s' },
    pinned: false
  },
  {
    id: 'venture',
    title: 'VENTURE (AI Music Explorer)',
    stack: 'Django · FastAPI · Redis · React',
    short: 'End-to-end AI-powered music discovery with real-time React interface.',
    images: ['/assets/venture-1.jpg', '/assets/venture-2.jpg'],
    description: 'A full-stack music exploration platform combining third-party music discovery, prompt-driven interaction, and a curated listening experience. Built with an emphasis on clean architecture and AI-driven integrations.',
    highlights: [
      'Search Music',
      'Explore Music',
      'My Album'
    ],
    metrics: {
      'searchLatency': '<200ms',
      'albumTracks': '14 interactive tracks'
    },
    pinned: true
  }
];


