import { Project, Testimonial, FAQItem } from '../types';

// High-definition public motion graphics & cinematic video loops
export const PROJECTS_DATA: Project[] = [
  {
    id: 'after-effects-saas',
    title: 'After Effects SaaS',
    client: 'SaaS Platform',
    category: 'SaaS Motion Graphics',
    shortDescription: 'Dynamic After Effects product animation and kinetic UI walkthrough illustrating modern SaaS features with fluid precision.',
    fullDescription: 'A high-impact product video created in Adobe After Effects for modern SaaS platforms. Featuring sleek UI micro-interactions, seamless camera transitions, and crystal-clear feature walkthroughs designed to accelerate user conversion and retention.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-mesh-41551-large.mp4',
    embedUrl: 'https://play.gumlet.io/embed/6a9bc5cdf7c3f210e8053967',
    posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2563EB',
    duration: '01:30',
    services: ['Motion Graphics', 'SaaS Product Explainer', 'UI Animation', 'Sound Design'],
    softwareUsed: ['After Effects', 'Premiere Pro', 'Illustrator', 'Figma'],
    results: [
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'Full Play Rate', value: '88%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'dropbox-motion-concept',
    title: 'Dropbox Motion Concept',
    client: 'Dropbox',
    category: 'SaaS Motion Graphics',
    shortDescription: 'Kinetic product motion and sleek interface animations spotlighting effortless cloud file collaboration and team sync.',
    fullDescription: 'An engaging, fast-paced motion design concept demonstrating Dropbox’s next-generation workspace sync, smart file organization, and real-time team collaboration. Built with clean kinetic typography, elegant layer transitions, and snappy UI pacing.',
    year: '2025',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-rotating-golden-3d-rings-41561-large.mp4',
    embedUrl: 'https://play.gumlet.io/embed/6a9bc931800014611e26b693',
    posterUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B82F6',
    duration: '01:15',
    services: ['Motion Graphics', 'Product Demo', 'UI Micro-Interactions', 'Brand Motion'],
    softwareUsed: ['After Effects', 'Premiere Pro', 'Figma'],
    results: [
      { label: 'Sign-up Conversion', value: '+3.4x' },
      { label: 'Social Engagement', value: '1.2M+' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'stripe-concept-saas',
    title: 'Stripe Concept SaaS Video',
    client: 'Stripe',
    category: 'Fintech SaaS Motion Graphics',
    shortDescription: 'Sleek kinetic typography and checkout flow animation illustrating frictionless global payments and developer infrastructure.',
    fullDescription: 'A high-energy fintech motion graphics piece illustrating Stripe’s global payment infrastructure, one-click checkout flows, and automated developer APIs through rhythmic kinetic typography, smooth UI transitions, and crisp audio cues.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-blue-glowing-digital-particles-41550-large.mp4',
    embedUrl: 'https://play.gumlet.io/embed/6a9bc977800014611e26b7f8',
    posterUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#60A5FA',
    duration: '01:10',
    services: ['Motion Graphics', 'Fintech Explainer', 'Kinetic Typography', 'Product Animation'],
    softwareUsed: ['After Effects', 'Premiere Pro'],
    results: [
      { label: 'Checkout Adoption', value: '+74%' },
      { label: 'Video Retention', value: '92%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'juiceman-launch-saas',
    title: 'Juiceman Launch Video SaaS',
    client: 'Juiceman SaaS',
    category: 'SaaS Launch & Motion Graphics',
    shortDescription: 'Vibrant product launch animation transforming complex backend analytics into intuitive, visually captivating motion scenes.',
    fullDescription: 'A captivating flagship launch video for Juiceman SaaS. Bringing complex automated pipeline logic and real-time metric analytics to life with punchy vector motion, playful interface transitions, and clear storytelling crafted to turn visitors into active subscribers.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-41552-large.mp4',
    embedUrl: 'https://play.gumlet.io/embed/6a9bc984d9ae2eeb4b6f1257',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#38BDF8',
    duration: '01:45',
    services: ['Motion Graphics', 'SaaS Launch Film', 'App Feature Tour', 'Sound Design'],
    softwareUsed: ['After Effects', 'Premiere Pro', 'Audition'],
    results: [
      { label: 'Launch Day MRR', value: '+$85K' },
      { label: 'Full Play Rate', value: '86%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'claude-saas-concept',
    title: 'Claude SaaS Concept Ad — Claude Code',
    client: 'Anthropic',
    category: 'Developer Tool Motion Graphics',
    shortDescription: 'High-velocity motion graphics ad unveiling next-generation AI terminal workflows, agentic coding loops, and developer speed.',
    fullDescription: 'A modern, high-velocity motion ad showcasing Claude Code’s command-line capabilities and agentic software engineering workflows. Engineered with hyper-crisp terminal typography, kinetic syntax animations, and sleek dark-mode aesthetics that resonate with developers.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glowing-lines-and-dots-in-dark-space-41558-large.mp4',
    embedUrl: 'https://play.gumlet.io/embed/6a9bc9baf7c3f210e8054e26',
    posterUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#818CF8',
    duration: '01:20',
    services: ['Motion Graphics', 'Developer Product Ad', 'Terminal Motion Design', 'Audio Production'],
    softwareUsed: ['After Effects', 'Premiere Pro'],
    results: [
      { label: 'Dev Community Reach', value: '4.5M+' },
      { label: 'Click-through Rate', value: '+190%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'linear-sync-saas',
    title: 'Linear Sync — SaaS Product Demo',
    client: 'Linear Workspace',
    category: 'SaaS Product Motion Graphics',
    shortDescription: 'Precision motion graphics showcasing keyboard-first issue tracking, cycle roadmaps, and frictionless engineering velocity.',
    fullDescription: 'A sleek, precision-crafted motion graphics showcase highlighting Linear’s issue management, git branch automation, and keyboard-first developer experience. Features silky UI layer motion, dark-mode glass styling, and punchy sound design.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-moving-41554-large.mp4',
    embedUrl: 'https://play.gumlet.io/embed/6a9bcf9b800014611e26d81a',
    posterUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#6366F1',
    duration: '01:15',
    services: ['Motion Graphics', 'Product Walkthrough', 'UI Animation', 'Visual Polish'],
    softwareUsed: ['After Effects', 'Premiere Pro'],
    results: [
      { label: 'User Onboarding Speed', value: '+65%' },
      { label: 'Trial Conversions', value: '+118%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Elena Rostova',
    clientTitle: 'Head of Product Marketing',
    company: 'SaaS Platform Global',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'ULTRA MOTION delivered the single most impressive motion graphics launch film in our company’s history. Their SaaS explainer drove a remarkable 142% conversion lift.',
    rating: 5,
    projectTag: 'After Effects SaaS'
  },
  {
    id: 't2',
    clientName: 'Marcus Vance',
    clientTitle: 'VP of Brand & Growth',
    company: 'Cloud Workspace',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'The clarity, kinetic pacing, and smooth UI transitions they created for our Dropbox concept ad drove over 1.2M impressions and doubled our trial signups.',
    rating: 5,
    projectTag: 'Dropbox Motion Concept'
  },
  {
    id: 't3',
    clientName: 'Sarah Jenkins',
    clientTitle: 'Chief Marketing Officer',
    company: 'Fintech Payments',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'Working with ULTRA MOTION was effortless. They transformed complex API payment logic into mesmerizing motion graphics that completely elevated our brand prestige.',
    rating: 5,
    projectTag: 'Stripe Concept SaaS'
  },
  {
    id: 't4',
    clientName: 'Kenji Takahashi',
    clientTitle: 'Head of Developer Relations',
    company: 'AI Developer Tools',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote: 'When our developer ad went live, the engineering community went wild. The terminal motion design and audio synchronization were immaculate.',
    rating: 5,
    projectTag: 'Claude SaaS Concept Ad'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of videos do you create?',
    answer: 'We specialize in motion graphics and video editing for SaaS and tech companies — think product demos, explainer videos, feature walkthroughs, and onboarding content that make complex tools easy to understand.',
    category: 'Services'
  },
  {
    id: 'faq-2',
    question: 'What software do you use?',
    answer: 'We work primarily in Adobe After Effects for motion graphics and animation, paired with Premiere Pro for editing — giving you polished, professional results with smooth transitions and custom animations.',
    category: 'Tools'
  },
  {
    id: 'faq-3',
    question: 'How long does a typical project take?',
    answer: 'Turnaround depends on video length and complexity, but most projects — from a 30-second explainer to a 90-seconds product demo — take 1 to 2 weeks. We\'ll give you a clear timeline after our initial call.',
    category: 'Timeline'
  },
  {
    id: 'faq-4',
    question: 'Do you handle scriptwriting and voiceover too?',
    answer: 'Yes, we offer scriptwriting and can help source voiceover talent or focus purely on the visual side depending on your project needs.',
    category: 'Services'
  },
  {
    id: 'faq-5',
    question: 'How does the process work, from start to finish?',
    answer: 'It typically starts with a discovery call to understand your goals, followed by a script/storyboard, then a rough animation draft for feedback, and finally polished delivery with revisions built in along the way.',
    category: 'Process'
  }
];
