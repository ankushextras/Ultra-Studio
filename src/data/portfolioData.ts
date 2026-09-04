import { Project, Testimonial, FAQItem } from '../types';

// High-definition public motion graphics & cinematic video loops
export const PROJECTS_DATA: Project[] = [
  {
    id: 'cyber-neural-os',
    title: 'NEURAL OS — Spatial Interface Concept',
    client: 'NeuralTech Global',
    category: 'Spatial UI & 3D Motion',
    shortDescription: 'Cinematic brand launch reveal and real-time volumetric interface motion graphics for VisionOS & spatial computing.',
    fullDescription: 'We collaborated with NeuralTech to design and render the flagship launch film for NEURAL OS, showcasing seamless volumetric glass windows, optical light interaction, and 120fps physics-driven spatial UI motions.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-mesh-41551-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2563EB',
    duration: '02:15',
    services: ['3D Motion Graphics', 'Spatial UI Design', 'CGI Product Reveal', 'Sound Design'],
    softwareUsed: ['Cinema 4D', 'Octane Render', 'Houdini', 'After Effects', 'Unreal Engine 5'],
    results: [
      { label: 'Launch Views', value: '18.4M+' },
      { label: 'Conversion Impact', value: '+210%' },
      { label: 'Industry Awards', value: '4× Awwwards' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80'
    ],
    awards: ['FWA of the Month', 'Awwwards Site of the Day', 'CSS Design Gold']
  },
  {
    id: 'quantum-hypercar',
    title: 'AETHER X — Electric Hypercar Teaser',
    client: 'Aether Motors',
    category: '3D CGI Product Film',
    shortDescription: 'Ultra-photorealistic 3D car reveal showcasing active aerodynamic carbon weaves and laser photonic illumination.',
    fullDescription: 'A dramatic, cinematic 90-second reveal video for the AETHER X hypercar. Utilizing Redshift ray tracing and Houdini particle physics to simulate wind tunnel airflow dynamics and light caustics.',
    year: '2025',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-rotating-golden-3d-rings-41561-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B82F6',
    duration: '01:45',
    services: ['CGI Automotive Rendering', 'Volumetric Lighting', 'Houdini Fluid Simulation', 'Cinematic Sound'],
    softwareUsed: ['Unreal Engine 5.4', 'Houdini FX', 'Maya', 'DaVinci Resolve Studio'],
    results: [
      { label: 'Pre-Orders Generated', value: '$42M' },
      { label: 'Social Impressions', value: '35M+' },
      { label: 'Press Outlets', value: 'Top Gear, Wired' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    awards: ['Red Dot Best of Best 2025', 'Motion Awards Winner']
  },
  {
    id: 'luminous-audio',
    title: 'SONIC PRO — Holographic Earbuds',
    client: 'Luminous Audio Labs',
    category: 'Commercial & 3D Visualizer',
    shortDescription: 'Exploded-view hardware animation unveiling precision beryllium drivers and acoustic dampening chambers.',
    fullDescription: 'An organic, macro-scale journey inside audio engineering. We rendered floating neodymium magnetic fields and sound wave refraction in stunning slow motion.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-blue-glowing-digital-particles-41550-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#60A5FA',
    duration: '01:10',
    services: ['Exploded View Animation', 'Product Design Reel', 'Macro CGI Rendering'],
    softwareUsed: ['Cinema 4D S26', 'Redshift 3D', 'Adobe After Effects'],
    results: [
      { label: 'Unit Sales Increase', value: '+185%' },
      { label: 'CES Innovation Award', value: 'Winner' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'chronos-luxury',
    title: 'CHRONOS — Mechanical Tourbillon',
    client: 'Chronos Haute Horlogerie',
    category: 'Luxury CGI Craftsmanship',
    shortDescription: 'Precision 3D micro-mechanics animation highlighting a floating triple-axis tourbillon escapement.',
    fullDescription: 'Delighting horology enthusiasts worldwide, CHRONOS commissioned this intricate visual poem showing 428 hand-finished movement components locking together with microscopic precision.',
    year: '2025',
    featured: false,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-moving-41554-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#1D4ED8',
    duration: '02:00',
    services: ['Micro-Mechanical CGI', 'Lighting & Texturing', 'Original Score'],
    softwareUsed: ['Blender 4.2 Cycles', 'Houdini', 'Nuke Studio'],
    results: [
      { label: 'Limited Edition Sold Out', value: 'In 42 Mins' },
      { label: 'Featured In', value: 'Hodinkee, GQ' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'solaris-energy',
    title: 'SOLARIS — Orbital Clean Energy',
    client: 'Solaris Aerospace',
    category: 'Brand Film & VFX',
    shortDescription: 'Epic 3D sci-fi atmosphere commercial showing orbital solar reflector arrays deploying in deep space.',
    fullDescription: 'A awe-inspiring vision of zero-emission space energy transmission. Built with procedural space dust, solar flare shaders, and volumetric orbital glare.',
    year: '2026',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-41552-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#38BDF8',
    duration: '02:40',
    services: ['VFX Compositing', 'Space Environment Art', 'Title Design'],
    softwareUsed: ['Houdini', 'Unreal Engine 5', 'Flame', 'After Effects'],
    results: [
      { label: 'Series B Funding Raised', value: '$120M' },
      { label: 'Global Ad Reach', value: '45M' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'cyberpunk-keynote',
    title: 'KINETIC KEYNOTE 2026',
    client: 'Veloce AI',
    category: 'Event Graphics & Opener',
    shortDescription: 'An explosive 60fps opening title sequence for Veloce’s annual global AI Developer Keynote.',
    fullDescription: 'Designed for a 120-foot seamless LED mainstage wall in San Francisco. Dynamic glitch typography, kinetic particle grids, and bass-heavy audio synchronization.',
    year: '2026',
    featured: false,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glowing-lines-and-dots-in-dark-space-41558-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#818CF8',
    duration: '01:30',
    services: ['Large Format Event CGI', 'Opening Title Design', 'Live Stage Loop'],
    softwareUsed: ['Cinema 4D', 'Octane Render', 'Notch 3D', 'Ableton Live'],
    results: [
      { label: 'Live Attendees', value: '12,000' },
      { label: 'Livestream Viewers', value: '2.8M' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'biomimic-sneaker',
    title: 'PULSE — Biomorphic Running Shoe',
    client: 'Kinetix Labs',
    category: 'Product Motion & Typography',
    shortDescription: 'Flexible mesh deformation & fluid foam simulation highlighting kinetic energy return soles.',
    fullDescription: 'Combining organic cloth soft-body dynamics with sharp kinetic typography to express weightlessness and rapid acceleration.',
    year: '2025',
    featured: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fluid-abstract-background-41553-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#22D3EE',
    duration: '00:55',
    services: ['Cloth & Soft Body Simulation', 'Kinetic Typography', 'Social Campaign Reel'],
    softwareUsed: ['Houdini Vellum', 'Cinema 4D', 'Marvelous Designer'],
    results: [
      { label: 'TikTok & IG Views', value: '24M+' },
      { label: 'CTR Growth', value: '+320%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'vortex-fintech',
    title: 'VORTEX — Autonomous DeFi Protocol',
    client: 'Vortex Finance',
    category: 'Abstract 3D Motion Graphics',
    shortDescription: 'Floating glass monetary nodes and quantum encryption ribbon animations.',
    fullDescription: 'Translating abstract algorithmic liquidity pools into tangible, glowing crystal geometry and fluid light ribbons.',
    year: '2026',
    featured: false,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-particle-mesh-41555-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#6366F1',
    duration: '01:20',
    services: ['Abstract Motion Design', 'Explainer Visuals', 'App UI Teaser'],
    softwareUsed: ['Cinema 4D', 'Redshift', 'After Effects'],
    results: [
      { label: 'TVL Locked Post-Launch', value: '$850M' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Elena Rostova',
    clientTitle: 'Global Creative Director',
    company: 'NeuralTech Global',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'Aether Motion delivered the single most impressive 3D reveal film in our company’s decade-long history. Their spatial interface work felt like stepping 5 years into the future.',
    rating: 5,
    projectTag: 'NEURAL OS Spatial UI'
  },
  {
    id: 't2',
    clientName: 'Marcus Vance',
    clientTitle: 'VP of Brand & Product',
    company: 'Aether Motors',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'The level of CGI realism and lighting perfection they achieved for the AETHER X hypercar reveal drove over $42M in pre-orders within the first hour of live stream.',
    rating: 5,
    projectTag: 'AETHER X Hypercar'
  },
  {
    id: 't3',
    clientName: 'Sarah Jenkins',
    clientTitle: 'Chief Marketing Officer',
    company: 'Luminous Audio',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'Working with Aether Motion was effortless. They transformed complex acoustic physics into mesmerizing macro 3D art that completely elevated our brand prestige.',
    rating: 5,
    projectTag: 'SONIC PRO Launch'
  },
  {
    id: 't4',
    clientName: 'Kenji Takahashi',
    clientTitle: 'Head of Event Production',
    company: 'Veloce AI',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote: 'When our keynote opener played on the 120-foot LED stage, 12,000 attendees erupted into cheers. The fluid motion timing and audio synchronization were immaculate.',
    rating: 5,
    projectTag: 'Keynote 2026 Opener'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of videos do you create?',
    answer: 'I specialize in motion graphics and video editing for SaaS and tech companies — think product demos, explainer videos, feature walkthroughs, and onboarding content that make complex tools easy to understand.',
    category: 'Services'
  },
  {
    id: 'faq-2',
    question: 'What software do you use?',
    answer: 'I work primarily in Adobe After Effects for motion graphics and animation, paired with Premiere Pro for editing — giving you polished, professional results with smooth transitions and custom animations.',
    category: 'Tools'
  },
  {
    id: 'faq-3',
    question: 'How long does a typical project take?',
    answer: 'Turnaround depends on video length and complexity, but most projects — from a 30-second explainer to a 2-minute product demo — take 1 to 2 weeks. I\'ll give you a clear timeline after our initial call.',
    category: 'Timeline'
  },
  {
    id: 'faq-4',
    question: 'Do you handle scriptwriting and voiceover too?',
    answer: 'Yes, I offer scriptwriting and can help source voiceover talent or focus purely on the visual side depending on your project needs.',
    category: 'Services'
  },
  {
    id: 'faq-5',
    question: 'How does the process work, from start to finish?',
    answer: 'It typically starts with a discovery call to understand your goals, followed by a script/storyboard, then a rough animation draft for feedback, and finally polished delivery with revisions built in along the way.',
    category: 'Process'
  }
];
