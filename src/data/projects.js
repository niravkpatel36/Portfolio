import awe1 from '../assets/awe1.jpg';
import awe2 from '../assets/awe2.jpg';
import awe3 from '../assets/awe3.jpg';
import awe4 from '../assets/awe4.jpg';

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
    metrics: { tasksHandled: '100s concurrently',
    liveUpdates: 'Real-time streaming'},
    pinned: true
  },
  {
    id: 'telemetry',
    title: 'Realtime Telemetry Dashboard',
    repo: 'https://github.com/niravkpatel36/VENTURE.git',
    demo: 'https://venture-qgzz.onrender.com/',
    stack: 'React · WebSockets · D3',
    short: 'Realtime UI for 100+ devices; improved monitoring 4×.',
    images: ['/assets/telemetry-1.jpg'],
    description: 'Realtime dashboard with robust reconnection, data aggregation, and streaming visualizations for operations teams.',
    highlights: ['Realtime charts','4× improved detection'],
    metrics: { activeDevices: '100+', p99Latency: '<200ms' },
    pinned: false
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


