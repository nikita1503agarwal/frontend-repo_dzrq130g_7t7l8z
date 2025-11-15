export const profile = {
  name: 'Alex Carter',
  title: 'Data Scientist',
  location: 'San Francisco, CA',
  summary:
    'I build data products that turn messy, high-volume data into clear decisions. Experienced across the full lifecycle: problem framing, data engineering, modeling, and productionization.',
  photo: null,
  links: [
    { label: 'GitHub', href: 'https://github.com/', type: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', type: 'linkedin' },
    { label: 'Email', href: 'mailto:you@example.com', type: 'mail' },
  ],
}

export const skills = [
  { name: 'Python', level: 90 },
  { name: 'Pandas', level: 90 },
  { name: 'NumPy', level: 85 },
  { name: 'scikit-learn', level: 85 },
  { name: 'XGBoost', level: 80 },
  { name: 'PyTorch', level: 70 },
  { name: 'SQL', level: 85 },
  { name: 'Airflow', level: 70 },
  { name: 'Docker', level: 70 },
  { name: 'ML Ops', level: 65 },
  { name: 'Experimentation', level: 80 },
  { name: 'Visualization', level: 85 },
]

export const projects = [
  {
    title: 'Demand Forecasting for Retail',
    description:
      'Built gradient-boosted and Prophet ensembles forecasting 10k+ SKUs. Reduced stockouts by 18% and inventory holding costs by 12%.',
    tags: ['Python', 'XGBoost', 'Prophet', 'Airflow', 'Docker'],
    links: [
      { label: 'Code', href: 'https://github.com/', type: 'code' },
      { label: 'Report', href: '#', type: 'report' },
    ],
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'End-to-end pipeline from feature store to deployment. Calibrated probabilities powering lifecycle campaigns; +9% retention.',
    tags: ['scikit-learn', 'Feature Store', 'MLflow'],
    links: [
      { label: 'Code', href: 'https://github.com/', type: 'code' },
      { label: 'Demo', href: '#', type: 'demo' },
    ],
  },
  {
    title: 'NLP Topic Modeling for Support Tickets',
    description:
      'BERTopic pipeline identifying top drivers of support volume and deflection opportunities; -15% average response time.',
    tags: ['NLP', 'BERTopic', 'spaCy', 'Dash'],
    links: [
      { label: 'Code', href: 'https://github.com/', type: 'code' },
      { label: 'App', href: '#', type: 'demo' },
    ],
  },
]

export const publications = [
  {
    title: 'Causal Impact of Pricing on Conversion in B2C',
    venue: 'ACME Analytics Conference 2023',
    link: '#',
  },
  { title: 'Feature Stores in Practice', venue: 'Medium', link: '#' },
]

export const tools = [
  'Python',
  'Pandas',
  'NumPy',
  'scikit-learn',
  'PyTorch',
  'SQL',
  'BigQuery',
  'dbt',
  'Airflow',
  'Docker',
  'MLflow',
  'Weights & Biases',
]
