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
    title: 'AI Hiring Challenge Platform',
    subtitle: 'Real-time AI-powered coding environment',
    description:
      'A cutting-edge hiring platform built for The Proven Club featuring live code compilation, AI-powered chat assistance, real-time collaboration via WebSockets, and an intelligent evaluation engine. Handles thousands of concurrent users with sub-100ms response times.',
    heroColor: 'bg-[var(--purple)]',
    technologies: ['Next.js', 'React', 'Redux', 'Node.js', 'WebSockets', 'Tailwind CSS', 'OpenAI API'],
    challenges: 'Achieving real-time code execution at scale while maintaining a seamless UX required careful WebSocket management and optimistic UI updates.',
    results: 'Reduced candidate drop-off by 40%, achieved 99.8% uptime, and processed 10,000+ coding challenges in the first month.',
    liveUrl: 'https://theproven.club',
    githubUrl: 'https://github.com/sutharrahul',
    category: ['Next.js', 'React', 'AI'],
  },
  {
    id: '2',
    featured: false,
    title: 'RAG Portfolio Assistant',
    subtitle: 'Retrieval-augmented portfolio chatbot',
    description:
      'An intelligent conversational AI assistant that answers questions about Rahul\'s work, skills, and projects. Built with LangChain, Pinecone vector database, and a custom FastAPI backend with semantic search.',
    heroColor: 'bg-[var(--purple-dark)]',
    technologies: ['React', 'FastAPI', 'LangChain', 'Pinecone', 'OpenAI', 'Python'],
    challenges: 'Designing efficient chunking strategies and retrieval pipelines to ensure accurate, contextually-relevant responses.',
    results: 'Achieves 94% answer relevance score with sub-2s response times using async retrieval.',
    liveUrl: '#',
    githubUrl: 'https://github.com/sutharrahul',
    category: ['React', 'AI', 'Python'],
  },
  {
    id: '3',
    featured: false,
    title: 'Cinema Review App',
    subtitle: 'Movie discovery platform',
    description:
      'A full-featured movie discovery app powered by the OMDb API. Features include advanced search, ratings, cast & director info, and a clean responsive design with dark mode support.',
    heroColor: 'bg-surface-3',
    technologies: ['React', 'Vite', 'Axios', 'Tailwind CSS', 'React Router', 'OMDb API'],
    challenges: 'Implementing efficient API rate limiting and caching to prevent redundant requests and smooth the UX.',
    results: 'Deployed on Vercel with Lighthouse score of 98/100 and 500+ monthly active users.',
    liveUrl: 'https://cinema-review-seven.vercel.app',
    githubUrl: 'https://github.com/sutharrahul',
    category: ['React', 'Vite'],
  },
  {
    id: '4',
    featured: false,
    title: 'Git Issue Tracker',
    subtitle: 'Project management tool',
    description:
      'A comprehensive issue tracking system built with Redux Toolkit for state management. Features issue creation, commenting, status tracking, and responsive UI with DaisyUI components.',
    heroColor: 'bg-surface-2',
    technologies: ['React', 'Tailwind CSS', 'Redux Toolkit', 'React Router'],
    challenges: 'Designing a normalized Redux store for efficient issue state management without performance regressions.',
    results: 'Manages 100+ issues with zero state synchronization bugs and optimistic UI updates.',
    liveUrl: 'https://git-issue-tracker-58iy.vercel.app',
    githubUrl: 'https://github.com/sutharrahul',
    category: ['React', 'Redux'],
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

export const testimonials = [
  {
    id: '1',
    content:
      'Rahul delivered outstanding work on our hiring platform. His attention to detail, technical depth, and ability to quickly integrate AI features exceeded our expectations. He is a rare engineer who combines strong UX intuition with solid backend knowledge.',
    author: 'Arjun Sharma',
    role: 'CTO',
    company: 'The Proven Club',
    avatar: 'AS',
    avatarColor: 'bg-[var(--purple)]',
  },
  {
    id: '2',
    content:
      'Working with Rahul was a pleasure. He took full ownership of the frontend codebase, introduced best practices, and shipped features at an impressive velocity without sacrificing code quality.',
    author: 'Priya Mehta',
    role: 'Product Manager',
    company: 'The Proven Club',
    avatar: 'PM',
    avatarColor: 'bg-[var(--purple-dark)]',
  },
  {
    id: '3',
    content:
      'Rahul built our company website in record time with a design that genuinely impressed our investors. He communicated clearly, met every deadline, and delivered polished code that was easy to maintain.',
    author: 'Vikram Patel',
    role: 'Founder',
    company: 'TechStart India',
    avatar: 'VP',
    avatarColor: 'bg-surface-2',
  },
]

export const githubStats = {
  username: 'sutharrahul',
  repos: 24,
  stars: 48,
  contributions: 847,
  streak: 32,
  languages: [
    { name: 'TypeScript', percentage: 38, color: '#3178C6' },
    { name: 'JavaScript', percentage: 28, color: '#F7DF1E' },
    { name: 'Python', percentage: 18, color: '#3776AB' },
    { name: 'CSS', percentage: 10, color: '#264de4' },
    { name: 'Other', percentage: 6, color: '#D97757' },
  ],
  recentActivity: [
    { repo: 'rahul-suthar', action: 'Pushed', message: 'feat: premium portfolio redesign', time: '2h ago' },
    { repo: 'rag-app', action: 'Pushed', message: 'fix: improve retrieval pipeline accuracy', time: '1d ago' },
    { repo: 'cinema-review', action: 'Pushed', message: 'perf: implement lazy image loading', time: '3d ago' },
    { repo: 'git-issue-tracker', action: 'Pushed', message: 'feat: add bulk issue management', time: '1w ago' },
    { repo: 'find-pokemon', action: 'Pushed', message: 'style: update type badge colors', time: '2w ago' },
  ],
}

export const funFacts = [
  { emoji: '☕', label: 'Cups of coffee / day', value: '3–4' },
  { emoji: '🌙', label: 'Late-night coder', value: 'Always' },
  { emoji: '🎯', label: 'PRs merged in 2024', value: '120+' },
  { emoji: '🌍', label: 'Countries as client base', value: '3' },
]

