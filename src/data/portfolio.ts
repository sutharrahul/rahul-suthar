// ============================================================
// Portfolio Data — Rahul Suthar
// Update this file with your real content
// ============================================================

export const profile = {
  name: 'Rahul Suthar',
  role: 'Full Stack Developer',
  tagline: 'Building intelligent web experiences at the intersection of AI and modern engineering.',
  bio: 'I craft production-ready web applications with a focus on performance, AI integration, and developer experience. Currently building AI-powered platforms that scale.',
  avatar: 'https://avatars.githubusercontent.com/u/117563756?v=4',
  location: 'India',
  availability: 'Open to opportunities',
  resumeUrl: '/resume.pdf',
  email: 'rahulsuthar@example.com',
  github: 'https://github.com/sutharrahul',
  linkedin: 'https://linkedin.com/in/sutharrahul',
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
    title: 'Binc',
    subtitle: 'Social media management platform',
    description:
      'An all-in-one social media management platform that lets teams plan, schedule, and publish content across multiple channels, with built-in analytics and a pricing calculator embedded across partner sites.',
    heroColor: 'bg-[var(--purple)]',
    technologies: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js'],
    challenges: 'Building a multi-platform scheduling and analytics engine that stays fast and reliable as connected accounts and content volume scale up.',
    results: 'Powers content scheduling and analytics for multiple brands from a single, unified dashboard.',
    liveUrl: 'https://binc-frontend.vercel.app',
    githubUrl: 'https://github.com/sutharrahul',
  },
  {
    id: '2',
    featured: false,
    title: 'Personal AI Chatbot',
    subtitle: 'RAG-powered assistant, right below on this page',
    description:
      'A retrieval-augmented conversational assistant that answers questions about my background, skills, and projects in real time. Built with LangChain, a vector database for semantic search, and a FastAPI backend that streams responses token by token.',
    heroColor: 'bg-[var(--purple-dark)]',
    technologies: ['React', 'FastAPI', 'LangChain', 'Vector DB', 'OpenAI API', 'Python'],
    challenges: 'Designing efficient chunking and retrieval pipelines so answers stay accurate and grounded while streaming with low latency.',
    results: 'Answers portfolio questions instantly with streamed, source-grounded responses — try it in the Contact section below.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/sutharrahul',
  },
  {
    id: '3',
    featured: false,
    title: 'CodeStudio',
    subtitle: 'Online IDE for writing, running & testing code',
    description:
      'A browser-based IDE that lets developers write, run, and test code in multiple languages without any local setup — complete with a code editor, isolated execution sandbox, and instant output.',
    heroColor: 'bg-surface-3',
    technologies: ['React', 'Node.js', 'Monaco Editor', 'Docker', 'WebSockets'],
    challenges: 'Running untrusted, user-submitted code safely and quickly using isolated, sandboxed execution environments.',
    results: 'Provides a fast, dependency-free coding environment for writing and testing snippets directly in the browser.',
    liveUrl: '#',
    githubUrl: 'https://github.com/sutharrahul',
  },
]

export const experiences = [
  {
    id: '1',
    company: 'The Proven Club',
    role: 'Frontend Developer',
    type: 'Freelance',
    timeline: 'Jun 2024 — Present',
    location: 'Remote',
    link: 'https://theproven.club',
    description:
      'Leading frontend development of an AI-driven hiring challenge platform. Built real-time coding environments with AI-powered live chat, instant code compilation, and automated feedback systems. Improved platform UX and cross-device compatibility.',
    technologies: ['Next.js', 'React', 'Redux', 'Node.js', 'WebSockets', 'Tailwind CSS', 'Axios'],
    highlights: [
      'Built real-time collaborative coding editor with WebSocket synchronization',
      'Integrated AI-powered hint system reducing candidate frustration by 35%',
      'Optimized bundle size by 42% through code splitting and lazy loading',
      'Implemented responsive design supporting 99% of device configurations',
    ],
  },
  {
    id: '2',
    company: 'Freelance Projects',
    role: 'Full Stack Developer',
    type: 'Self-Employed',
    timeline: 'Jan 2024 — Jun 2024',
    location: 'Remote',
    link: '#',
    description:
      'Delivered end-to-end web solutions for small businesses and startups. Focused on React-based SPAs, API integrations, and performance optimization.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Delivered 5+ production projects on time and within scope',
      'Achieved average Lighthouse performance score of 95+',
      'Reduced page load times by 60% through optimization techniques',
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

export const funFacts = [
  { emoji: '☕', label: 'Cups of coffee / day', value: '3–4' },
  { emoji: '🌙', label: 'Late-night coder', value: 'Always' },
  { emoji: '🎯', label: 'PRs merged in 2024', value: '120+' },
  { emoji: '🌍', label: 'Countries as client base', value: '3' },
]

