// ============================================================
// Portfolio Data — Rahul Suthar
// Update this file with your real content
// ============================================================

export const profile = {
  name: 'Rahul Suthar',
  role: 'Full Stack Developer',
  tagline: 'Building intelligent web experiences at the intersection of AI and modern engineering.',
  bio: "Full-stack developer who's shipped multiple production apps for freelance clients. I own features end-to-end — schema to API to UI — with an AI-driven workflow that takes ideas from planning to deploy, fast.",
  avatar: 'https://avatars.githubusercontent.com/u/117563756?v=4',
  location: 'India',
  availability: 'Open to opportunities',
  resumeUrl: '/resume',
  email: 'rahulsuthar@example.com',
  github: 'https://github.com/sutharrahul',
  linkedin: 'https://linkedin.com/in/suthar-rahul',
  twitter: 'https://twitter.com/sutharrahul',
  aiAssistantUrl: 'https://chat.rahuls.dev/',
}

export const skills = [
  {
    category: 'Frontend',
    icon: '⚡',
    items: [
      { name: 'React', level: 95, years: 3 },
      { name: 'Next.js', level: 92, years: 2 },
      { name: 'TypeScript', level: 88, years: 2 },
      { name: 'Tailwind CSS', level: 95, years: 3 },
      { name: 'Framer Motion', level: 80, years: 1 },
      { name: 'Redux Toolkit', level: 85, years: 2 },
    ],
  },
  {
    category: 'Backend',
    icon: '🔧',
    items: [
      { name: 'Node.js', level: 82, years: 2 },
      { name: 'FastAPI', level: 78, years: 1 },
      { name: 'REST APIs', level: 90, years: 3 },
      { name: 'WebSockets', level: 75, years: 1 },
      { name: 'GraphQL', level: 65, years: 1 },
    ],
  },
  {
    category: 'AI',
    icon: '🤖',
    items: [
      { name: 'LangChain', level: 80, years: 1 },
      { name: 'OpenAI API', level: 88, years: 1 },
      { name: 'RAG Systems', level: 82, years: 1 },
      { name: 'Vector DBs', level: 75, years: 1 },
      { name: 'Prompt Engineering', level: 85, years: 1 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL', level: 80, years: 2 },
      { name: 'MongoDB', level: 75, years: 2 },
      { name: 'Redis', level: 70, years: 1 },
      { name: 'Pinecone', level: 72, years: 1 },
    ],
  },
  {
    category: 'Cloud',
    icon: '☁️',
    items: [
      { name: 'Vercel', level: 90, years: 2 },
      { name: 'AWS (basics)', level: 60, years: 1 },
      { name: 'Firebase', level: 72, years: 1 },
      { name: 'Supabase', level: 78, years: 1 },
    ],
  },
  {
    category: 'DevOps',
    icon: '🚀',
    items: [
      { name: 'Git / GitHub', level: 92, years: 3 },
      { name: 'Docker', level: 65, years: 1 },
      { name: 'CI/CD', level: 68, years: 1 },
      { name: 'Linux', level: 70, years: 2 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: [
      { name: 'VS Code', level: 98, years: 3 },
      { name: 'Figma', level: 72, years: 2 },
      { name: 'Postman', level: 88, years: 3 },
      { name: 'Jira', level: 75, years: 1 },
    ],
  },
]

export const projects = [
  {
    id: '1',
    featured: true,
    title: 'chat.rahul',
    subtitle: 'RAG chatbot with document-grounded answers',
    description:
      'A retrieval-augmented chatbot that answers from uploaded documents — with indexing and persistent chat history for fast, grounded multi-turn conversations.',
    heroColor: 'bg-[var(--purple)]',
    technologies: ['React', 'FastAPI', 'LangChain', 'Vector DB', 'OpenAI API', 'Python'],
    challenges: 'Designing chunking and retrieval so answers stay accurate and grounded while streaming with low latency.',
    results: 'Delivers accurate, source-grounded answers over an uploaded knowledge base.',
    liveUrl: 'https://chat.rahuls.dev/',
    githubUrl: 'https://github.com/sutharrahul',
  },
  {
    id: '2',
    featured: false,
    title: 'CodeStudio',
    subtitle: 'Browser-based multi-language IDE',
    description:
      'A browser IDE for writing, running, and testing code across languages — with sandboxed execution and shareable, persistent snippets.',
    heroColor: 'bg-[var(--purple-dark)]',
    technologies: ['React', 'Node.js', 'Monaco Editor', 'Docker', 'WebSockets'],
    challenges: 'Running untrusted user code safely and quickly in isolated, sandboxed environments.',
    results: 'Provides a fast, setup-free environment to write, run, and share code in the browser.',
    liveUrl: 'https://code.rahuls.dev/',
    githubUrl: 'https://github.com/sutharrahul',
  },
]

export const experiences = [
  {
    id: '1',
    company: 'Binc',
    role: 'Full-Stack Web Developer',
    type: 'Contract',
    timeline: 'Oct 2025 — Present',
    location: 'Remote',
    link: 'https://binc.co.in',
    description:
      'Building a single dashboard for creators to run Instagram and YouTube together — post scheduling, brand-collaboration workflows, and engagement analytics, with caching to keep it fast.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js'],
    highlights: [
      'Unified Instagram + YouTube management in one dashboard',
      'Built post scheduling and brand-collaboration workflows',
      'Added engagement analytics with caching for responsiveness',
    ],
  },
  {
    id: '2',
    company: 'The Proven Club',
    role: 'Front-end Developer',
    type: 'Contract',
    timeline: 'Jun 2024 — May 2025',
    location: 'Remote',
    link: '#',
    description:
      'Built the UI for a technical-interview platform covering screening, coding, and system-design rounds — with live session monitoring, screen recording, integrity checks, and AI-generated summaries that speed up recruiter reviews.',
    technologies: ['Next.js', 'React', 'Redux', 'WebSockets', 'Tailwind CSS'],
    highlights: [
      'Built interview flows for screening, coding, and system design',
      'Added real-time monitoring, screen recording, and integrity checks',
      'Integrated AI summaries that cut recruiter review time',
    ],
  },
]

export const education = [
  {
    id: '1',
    institution: 'Rajasthan Technical University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    timeline: '2021 — 2025',
    location: 'Rajasthan, India',
    gpa: '7.8/10',
  },
  {
    id: '2',
    institution: 'Self-Learning & Online Courses',
    degree: 'Continuous Learning',
    field: 'AI, Web Development, System Design',
    timeline: '2022 — Present',
    location: 'Online',
    courses: ['The Odin Project', 'Zero to Mastery', 'FastAI', 'CS50'],
  },
]

