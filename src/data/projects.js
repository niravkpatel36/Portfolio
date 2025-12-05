// src/data/projects.js
export const projects = [
  {
    id: 'traininghub',
    title: 'TrainingHub — Data Pipeline',
    stack: 'Python · Airflow · BigQuery · dbt',
    short: 'Reduced ETL latency from 8h to 30m; processed 10M/day.',
    images: ['/assets/traininghub-1.jpg','/assets/traininghub-2.jpg'],
    description: 'Architected an event-driven, low-latency pipeline with observability, backpressure handling and retries. Achieved consistent SLA and meaningful cost savings.',
    highlights: ['8× ETL speedup','10M events/day','SLA 99.9%'],
    metrics: { throughput: '10M / day', latencyReduction: '8×' },
    pinned: true
  },
  {
    id: 'telemetry',
    title: 'Realtime Telemetry Dashboard',
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
  }
]


