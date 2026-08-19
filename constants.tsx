import React from 'react';
import type { NavLink, SkillCategory, Project } from './types';

// Icons using SVG paths
const PhpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 18H12.01"/><path d="M12 12C12 12 13.5 10 16 10C18.5 10 20 12 20 14C20 16 18 18 16 18C14 18 12.5 16.5 12 15"/><path d="M12 12C12 12 10.5 14 8 14C5.5 14 4 12 4 10C4 8 6 6 8 6C10 6 11.5 7.5 12 9"/></svg>;
const LaravelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m13.23 4.85 5.54 3.17-5.54 3.17-5.54-3.17 5.54-3.17z"/><path d="m5.54 8.77 5.54-3.17 5.54 3.17v6.34l-5.54 3.17-5.54-3.17V8.77z"/><path d="M2.26 6.86 7.8 10l-5.54 3.17v-6.3z"/><path d="m21.74 6.86-5.54 3.17L21.74 13v-6.3z"/></svg>;
const NodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 2L2 7v10l10 5 10-5V7L12 2Z" /><path d="M12 22V12" /><path d="M12 12L2 7" /><path d="M12 12l10-5" /><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>;
const MySqlIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const RestApiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M4 13h16"/><path d="M4 13a4 4 0 0 0-1.05 7.88"/><path d="M21.05 20.88A4 4 0 0 0 20 13"/><path d="M4 13a4 4 0 0 1 1.05-7.88"/><path d="M21.05 5.12A4 4 0 0 1 20 13"/></svg>;
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/><path d="M12 2v2m0 16v2m9-11h-2M5 12H3"/></svg>;
const JsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M16 18a4 4 0 0 0-8 0"/><path d="M12 2v10"/><path d="M12 12H8"/><path d="M12 12h4"/></svg>;
const HtmlIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m18 16 4-14"/><path d="M6 8h12"/><path d="M10 20l4-14"/></svg>;
const CssIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="m14 17-1-1-1 1 1 1 1-1z"/><path d="M9 18l-1-1-1 1 1 1 1-1z"/></svg>;
const TailwindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 12c-3.333-3.333-5-5-5-5 0 3.333-1.667 5-5 5 3.333 0 5 1.667 5 5 0 0 1.667-1.667 5-5z"/><path d="M22 12c-3.333-3.333-5-5-5-5 0 3.333-1.667 5-5 5 3.333 0 5 1.667 5 5 0 0 1.667-1.667 5-5z"/></svg>;
const WpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 12a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/><path d="M12 12h.01"/><path d="M15 15.5c-1.5 1-3.5 1-5 0"/><path d="M16 11.5c-1-1-2.5-1-3.5 0"/></svg>;
const WooIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M16 11.5c-.77.77-1.79 1.23-2.83 1.25H12c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.55 0 2.9.89 3.54 2.23"/><path d="M17.5 14c-1.28-1.28-3.05-2-4.88-2H12c-3.31 0-6 2.69-6 6s2.69 6 6 6h.17c1.83 0 3.6-1.02 4.88-2.3"/></svg>;
const AcfIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 3v18"/><path d="m9 21 3-3 3 3"/><path d="m9 3-3 3 3 3"/><rect width="18" height="12" x="3" y="6" rx="2"/></svg>;
const GitIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="12" r="4"/><path d="M12 3v5"/><path d="M12 17v4"/><path d="m16.5 7.5-.88.88"/><path d="M21 12h-4"/><path d="M3 12h4"/><path d="m7.5 7.5.88.88"/></svg>;
const DockerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M22 12c0-2.5-1-5-5-5H7c-4 0-5 2.5-5 5v3c0 2.5 1 5 5 5h10c4 0 5-2.5 5-5Z"/><path d="M7 12h2.5"/><path d="M11 12h2.5"/><path d="M15 12h1.5"/></svg>;
const FigmaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/><path d="M6 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/><path d="M6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/><path d="M18 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/><path d="M6 18a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/></svg>;
const WorkflowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>;
const SparkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>;
const WebhookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;


export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'PHP', icon: <PhpIcon /> },
      { name: 'Laravel', icon: <LaravelIcon /> },
      { name: 'Node.js & Express', icon: <NodeIcon /> },
      { name: 'MySQL', icon: <MySqlIcon /> },
      { name: 'RESTful & GraphQL APIs', icon: <RestApiIcon /> },
    ],
  },
  {
    title: 'Frontend & UI',
    skills: [
      { name: 'React.js', icon: <ReactIcon /> },
      { name: 'JavaScript', icon: <JsIcon /> },
      { name: 'HTML5', icon: <HtmlIcon /> },
      { name: 'CSS3 / SASS', icon: <CssIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      { name: 'n8n / Make.com', icon: <WorkflowIcon /> },
      { name: 'OpenAI & Gemini APIs', icon: <SparkIcon /> },
      { name: 'AI Agent Workflows', icon: <BotIcon /> },
      { name: 'Webhooks & Middleware', icon: <WebhookIcon /> },
    ],
  },
  {
    title: 'WordPress Niches',
    skills: [
      { name: 'Headless Architecture', icon: <WpIcon /> },
      { name: 'Custom WooCommerce', icon: <WooIcon /> },
      { name: 'Theme & Plugin Dev', icon: <WpIcon /> },
      { name: 'ACF & Custom Blocks', icon: <AcfIcon /> },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', icon: <GitIcon /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'Figma', icon: <FigmaIcon /> },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 4,
    title: 'AI Workflow Automation Suite',
    role: 'Automation Engineer (n8n, Gemini API & WordPress)',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop',
    description: 'A production automation platform built on self-hosted n8n — try it live at automations.abemt.dev: AI lead intake with intent classification, an AI content pipeline publishing to WordPress via REST API, and WooCommerce order-ops automation — all with custom JavaScript code nodes where no-code stops.',
    technologies: ['n8n', 'Gemini API', 'Webhooks', 'WordPress REST API', 'WooCommerce', 'Docker', 'JavaScript'],
    liveDemoUrl: 'https://automations.abemt.dev',
    codeUrl: 'https://github.com/abemt/ai-automation-suite',
    caseStudy: {
      challenge: 'Small businesses lose hours daily to manual lead triage, content publishing and order administration — but off-the-shelf no-code automations break the moment real data validation, deduplication or API quirks appear.',
      solution: 'Engineered a suite of n8n workflows on self-hosted Docker infrastructure: HMAC-secured webhook intake, custom JavaScript code nodes for validation and transformation, Gemini API calls for intent classification and content drafting, and delivery into WordPress, CRMs, Google Sheets and Slack — with retry logic, dead-letter queues and alerting built in.',
      outcome: 'Lead response time dropped from hours to under 5 seconds with automatic spam gating. The AI content pipeline drafts and schedules posts end-to-end, and order-ops automation eliminated daily spreadsheet work — each workflow documented with a data-mapping spec and handover video.',
    },
  },
  {
    id: 5,
    title: 'TradeMate — AI Trading Discipline Companion',
    role: 'Product Engineer (React 19, Cloudflare Workers & Gemini)',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    description: 'An installable PWA that fixes the real problem in discretionary trading — execution. AI vision grades chart setups against the trader\'s own playbook, a 20-second journal captures trades and emotions offline-first, and discipline XP is earned for process — never for profits. Runs entirely on Cloudflare\'s free tier at $0/month.',
    technologies: ['React 19', 'TypeScript', 'Cloudflare Workers', 'D1', 'Hono', 'Gemini Vision', 'Zustand', 'PWA', 'Tailwind v4'],
    codeUrl: 'https://github.com/abemt/trademate',
    caseStudy: {
      challenge: 'Trading apps give you charts; almost none fix the actual failure mode — overtrading, revenge entries, fear-moved stop-losses and skipped journaling. The tool had to enforce the trader\'s own rules at the moment discipline slips, and cost nothing to run.',
      solution: 'Built a single Cloudflare Worker serving both the PWA and API: Gemini vision grades uploaded chart setups A–F against a stored personal playbook with a confluence checklist; an offline-first journal (localStorage write queue, idempotent upserts) logs direction, risk, R-multiple and emotion tags in ~20 seconds; a risk guard visualizes trades-per-day as spendable tokens with circuit breakers after consecutive losses; and a news watcher classifies headline severity, waking the app through payload-free Web Push signed with WebCrypto ES256. Chart screenshots are compressed client-side to WebP and stored as D1 blobs to stay inside the free tier.',
      outcome: 'A senior-grade product shipped solo and used in live trading: strict-JSON AI contracts with provider fallback (Gemini → Groq), push notifications with the app fully closed, and years of chart history in 5 GB of free storage. Its discipline-XP scoreboard — points for skipping bad setups — is now expanding into a full nervous-system journaling system in v2.',
    },
  },
  {
    id: 1,
    title: 'Enterprise SaaS Analytics Dashboard',
    role: 'Full-Stack Developer (React.js & Laravel)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A premium full-stack analytics engine powered by a Laravel API backend and a React.js single-page application, featuring real-time data visualization, Node.js queue processing, and microsecond response optimization.',
    technologies: ['Laravel', 'PHP', 'Node.js/Express', 'React.js', 'MySQL', 'Docker', 'RESTful APIs'],
    liveDemoUrl: 'https://saas.abemt.dev',
    caseStudy: {
      challenge: 'A high-traffic SaaS platform required an analytics cockpit capable of aggregating millions of daily user interactions and rendering them dynamically without degrading application speed.',
      solution: 'Designed a secure, decoupled architecture. I built a robust, high-performance RESTful API using Laravel (PHP) utilizing Redis for request caching and Node.js/Express workers to handle background queue tasks. Developed a modern, component-driven dashboard with React.js and Tailwind CSS, leveraging custom WebSockets for live telemetry data.',
      outcome: 'Achieved sub-100ms API response times under load, successfully serving over 50,000 active users. Interactive SVG charts and smooth dashboard animations boosted overall user session length by 40%.',
    },
  },
  {
    id: 2,
    title: 'Headless WordPress & React.js Portal',
    role: 'Lead WordPress Architect (React & PHP)',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A custom headless WordPress (PHP) platform utilizing GraphQL and a React.js frontend, bridging the power of WordPress content management with the performance and interactivity of a modern React single-page app.',
    technologies: ['WordPress', 'Headless Architecture', 'PHP', 'GraphQL', 'React.js', 'ACF'],
    liveDemoUrl: 'https://wordpress.abemt.dev',
    caseStudy: {
      challenge: 'A major digital marketing agency needed to decouple their content management from their delivery layer to dramatically improve performance, SEO, and developer agility, while keeping WordPress for their editorial team.',
      solution: 'Architected a headless WordPress instance using PHP and WPGraphQL. Built custom Gutenberg blocks with React.js for content editing. Created a lightning-fast React.js frontend that consumes the WordPress GraphQL API, using Server-Side Rendering (SSR) and Tailwind CSS for visual excellence.',
      outcome: 'Decoupling the frontend resulted in perfect Lighthouse scores (100/100) and dropped page load times from 4.2s to 0.8s. The editors maintained their WordPress workflow while the agency gained complete design freedom and security.',
    },
  },
  {
    id: 3,
    title: 'Custom WooCommerce E-Commerce Suite',
    role: 'Full-Stack WooCommerce Engineer',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A fully custom WooCommerce digital storefront featuring a Node.js/Express cart validation layer, high-performance PHP backend templates, and a dynamic React.js checkout experience.',
    technologies: ['WooCommerce', 'WordPress', 'React.js', 'Node.js/Express', 'PHP', 'MySQL', 'Stripe API'],
    liveDemoUrl: 'https://woocomerce.abemt.dev',
    caseStudy: {
      challenge: "An enterprise retailer's standard WooCommerce site suffered from checkout bottlenecks and slow product filtering, causing a high cart abandonment rate.",
      solution: 'Developed a lightweight, fully custom WordPress/WooCommerce theme utilizing optimized PHP backend templates. Built a React.js product filtering module and custom checkout drawer. Integrated a Node.js & Express microservice to validate stock allocations in real-time, reducing checkout friction and improving transaction security via Stripe API.',
      outcome: 'The highly optimized custom store lowered cart abandonment by 28% and increased e-commerce conversion rates by 22%. Performance tuning reduced database load by 45%, ensuring stability during peak shopping events.',
    },
  },
];