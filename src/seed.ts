import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  console.log('Seeding Homepage in Payload CMS...')
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const initialData = {
    banner: {
      type: 'video' as const,
      videoUrl: '/Banner-video.mp4',
      singleImage: {
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop',
        title: 'Welcome to Zevriqa',
        subtitle: 'A single vision for a better future.',
      },
      carouselSlides: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1740&auto=format&fit=crop',
          title: 'Design Innovation',
          subtitle: 'Creating experiences that matter.',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop',
          title: 'Technology Forward',
          subtitle: 'Building for the future today.',
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop',
          title: 'Strategic Solutions',
          subtitle: 'Empowering your business.',
        },
      ],
    },
    hero: {
      kicker: 'Software & Cloud Engineering',
      title: 'Scalable Solutions For Modern Business.',
      description:
        'Zevriqa engineers reliable custom software and cloud applications that streamline operations, improve performance, and support long-term growth.',
      buttonText: 'Explore Capabilities',
      buttonLink: '/services',
      imageAlt: 'Software engineering team collaborating in a modern office',
    },
    trustedBy: {
      label: 'Trusted by innovative companies worldwide',
      companies: [
        { name: 'Acme Corp' },
        { name: 'GlobalTech' },
        { name: 'InnovateIO' },
        { name: 'NexusSystems' },
        { name: 'CloudScale' },
      ],
    },
    about: {
      kicker: 'Who We Are',
      title: 'Transforming vision into robust digital realities.',
      description:
        "At Zevriqa, we don't just write code; we engineer solutions that drive business transformation. With a team of seasoned architects and developers, we partner with enterprises to modernize legacy systems, build scalable cloud infrastructure, and deliver custom software that directly impacts the bottom line.",
      linkText: 'Discover Our Story',
      linkUrl: '/about',
      imageAlt: 'Software development team',
    },
    features: {
      kicker: 'Core Services',
      title: 'Comprehensive Engineering',
      services: [
        {
          icon: 'Code' as const,
          title: 'Custom Software',
          desc: 'Tailored applications designed from the ground up to meet your exact business workflows and requirements.',
        },
        {
          icon: 'Cloud' as const,
          title: 'Cloud Architecture',
          desc: 'Scalable, resilient cloud infrastructure deployment and migration on AWS, Azure, and GCP.',
        },
        {
          icon: 'Plug' as const,
          title: 'Systems Integration',
          desc: 'Connecting disparate systems and APIs to create unified, efficient operational ecosystems.',
        },
      ],
    },
    solutions: {
      kicker: 'Solutions We Build',
      title: 'Engineered for specific business needs.',
      items: [
        {
          title: 'Enterprise ERP Systems',
          desc: 'Centralized resource planning platforms that streamline operations, HR, finance, and supply chain logistics.',
        },
        {
          title: 'SaaS Platforms',
          desc: 'Multi-tenant software-as-a-service architectures built for scale, security, and recurring revenue models.',
        },
        {
          title: 'Data & Analytics Dashboards',
          desc: 'Real-time business intelligence tools that turn complex data streams into actionable insights.',
        },
        {
          title: 'Legacy Modernization',
          desc: 'Upgrading outdated systems to modern frameworks without disrupting your daily operations.',
        },
      ],
    },
    sectors: {
      kicker: 'Industries We Serve',
      title: 'Domain expertise across sectors.',
      items: [
        { title: 'Website Development' },
        { title: 'Digital Marketing' },
        { title: 'Branding' },
        { title: 'Mobile App Development' },
      ],
    },
    tools: {
      kicker: 'Technology Stack',
      title: 'Modern tools for modern problems.',
      items: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'AWS' },
        { name: 'Google Cloud' },
        { name: 'Docker' },
        { name: 'Oracle DB' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'GraphQL' },
        { name: 'Express.js' },
      ],
    },
    process: {
      kicker: 'Our Development Process',
      title: 'How we deliver success.',
      steps: [
        {
          num: '01',
          title: 'Discovery & Architecture',
          desc: 'We analyze your requirements and design a scalable system architecture before writing a single line of code.',
        },
        {
          num: '02',
          title: 'Agile Development',
          desc: 'Iterative sprints ensure transparency, allowing for feedback and adjustments as the software takes shape.',
        },
        {
          num: '03',
          title: 'Rigorous Testing',
          desc: 'Automated QA, security audits, and load testing guarantee the system behaves flawlessly under stress.',
        },
        {
          num: '04',
          title: 'Deployment & Support',
          desc: 'Smooth CI/CD rollouts followed by 24/7 monitoring and dedicated maintenance teams.',
        },
      ],
    },
    flawless: {
      subtitle: 'WHY ZEVRIQA',
      title: 'Every system is designed to help you operate flawlessly.',
      features: [
        {
          title: 'End-to-End Delivery',
          desc: 'From initial architecture planning and UI/UX to final deployment and ongoing maintenance.',
        },
        {
          title: 'Scalable Architecture',
          desc: 'Built to grow seamlessly as your user base, traffic, and data expand over time.',
        },
        {
          title: 'Security First',
          desc: 'Implementing industry best practices to protect your data and ensure strict compliance.',
        },
        {
          title: 'Ongoing Support',
          desc: 'Dedicated engineering teams ensuring your mission-critical systems run flawlessly 24/7.',
        },
      ],
    },
    stats: {
      items: [
        { number: '2+', label: 'Projects Delivered' },
        { number: '99.9%', label: 'Uptime SLA' },
        { number: '5+', label: 'Senior Engineers' },
        { number: '1', label: 'Years Experience' },
      ],
    },
    testimonials: {
      subtitle: 'TESTIMONIALS',
      title: 'What our partners say.',
      items: [
        {
          quote:
            'The robust architecture they delivered was crucial for our hyper-growth phase. Our systems are now faster and infinitely scalable.',
          name: 'Jane Doe',
          title: 'CTO, TechFlow',
          avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
        },
        {
          quote:
            "Their team's deep understanding of cloud infrastructure helped us reduce our monthly AWS bills by 40% while improving latency.",
          name: 'John Smith',
          title: 'VP Engineering, HealthSync',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
        },
        {
          quote:
            "Zevriqa's commitment to quality and security is unmatched. They feel like a true extension of our in-house engineering team.",
          name: 'Sarah Jenkins',
          title: 'Founder, FinTrust',
          avatarUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
        },
      ],
    },
    blog: {
      kicker: 'Latest Insights',
      title: 'Engineering blog.',
      posts: [
        {
          title: 'Microservices vs Monoliths: When to Transition',
          date: 'Oct 12, 2026',
          imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b441.jpg?format=avif',
          link: '#',
        },
        {
          title: 'Securing Cloud Infrastructure in 2026',
          date: 'Sep 28, 2026',
          imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b445.jpg?format=avif',
          link: '#',
        },
        {
          title: 'The Future of Edge Computing in Retail',
          date: 'Sep 15, 2026',
          imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b44a.jpg?format=avif',
          link: '#',
        },
      ],
    },
    faq: {
      subtitle: 'FAQ',
      title: 'Frequent Questions.',
      items: [
        {
          q: 'What services do you offer?',
          a: 'We offer end-to-end software engineering, from custom backend APIs to cloud infrastructure optimization and secure enterprise architecture design.',
        },
        {
          q: 'How long does a typical project take?',
          a: 'Project timelines vary based on complexity, but most initial MVP implementations take between 8-12 weeks.',
        },
        {
          q: 'Do you provide ongoing support?',
          a: 'Yes, we offer comprehensive maintenance and SLA-backed support packages for all systems we deploy.',
        },
        {
          q: 'What technologies do you specialize in?',
          a: 'Our core stack includes React, Next.js, Node.js, Python, AWS, and modern DevOps tools like Docker and Kubernetes.',
        },
      ],
    },
    cta: {
      title: 'Ready to build the future?',
      desc: "Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.",
      buttonText: 'Start a Project',
      buttonLink: '/contact',
    },
  }

  await payload.updateGlobal({
    slug: 'homepage',
    data: initialData,
  })

  console.log('Homepage successfully seeded with full website initial content!')

  const initialAboutData = {
    hero: {
      title: 'About Us',
      subtitle: 'Discover our vision and the dedicated team behind Zevriqa.',
    },
    empowering: {
      kicker: 'About Zevriqa',
      title: 'Empowering businesses through technology.',
      desc1:
        'Founded with a vision to bridge the gap between complex engineering and business efficiency, Zevriqa is a team of dedicated technologists, strategists, and innovators. We believe that the right software can transform how a company operates, scales, and delivers value to its customers.',
      desc2:
        'Our collective expertise spans across multiple industries, allowing us to bring fresh perspectives and robust architectures to every digital challenge we solve.',
      buttonText: 'Work With Us',
      buttonLink: '/contact',
      imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae189d07e7a.jpg?format=avif',
      imageAlt: 'Zevriqa team collaborating',
    },
    journey: {
      kicker: 'Our Story',
      title: 'A journey of innovation.',
      desc:
        'From a small consulting firm to a global digital engineering partner, our journey has been defined by a commitment to solving complex business challenges.',
      milestones: [
        {
          year: '2016',
          title: 'The Beginning',
          desc: 'Started as a boutique consulting firm focused on modernizing legacy systems for financial institutions.',
        },
        {
          year: '2020',
          title: 'Cloud Expansion',
          desc: 'Expanded our core services to include enterprise cloud architectures, rapidly scaling our engineering team.',
        },
        {
          year: '2026',
          title: 'Global Reach',
          desc: 'Now serving Fortune 500 companies worldwide, delivering end-to-end digital transformation at scale.',
        },
      ],
    },
    mission: {
      kicker: 'Purpose',
      title: 'Mission & Vision.',
      missionTitle: 'Our Mission',
      missionDesc:
        'To empower businesses through robust, scalable, and secure technology solutions that drive operational efficiency and measurable growth.',
      visionTitle: 'Our Vision',
      visionDesc:
        'To be the global leader in digital engineering, setting the standard for how enterprises leverage technology to solve their most complex challenges.',
      imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1e7804da6.jpg?format=avif',
      imageAlt: 'Team strategy and planning',
    },
    values: {
      kicker: 'Our Values',
      title: 'What drives us forward.',
      items: [
        {
          icon: 'Lightbulb' as const,
          title: 'Innovation',
          desc: 'We constantly explore new technologies and architectural patterns to deliver cutting-edge, future-proof solutions.',
        },
        {
          icon: 'Shield' as const,
          title: 'Transparency',
          desc: 'Honest communication, clear expectations, and open collaboration in every client partnership we build.',
        },
        {
          icon: 'Users' as const,
          title: 'Customer-First',
          desc: 'Your business goals dictate our engineering decisions. We succeed only when your business succeeds.',
        },
        {
          icon: 'Gem' as const,
          title: 'Quality',
          desc: 'We never compromise on the security, performance, or scalability of the code we ship to production.',
        },
        {
          icon: 'Handshake' as const,
          title: 'Collaboration',
          desc: 'We integrate seamlessly, working closely as an extension of your internal product and engineering teams.',
        },
        {
          icon: 'TrendingUp' as const,
          title: 'Continuous Improvement',
          desc: 'Always learning, adapting, and refining our processes to stay ahead of an ever-evolving digital landscape.',
        },
      ],
    },
    different: {
      kicker: 'Why Choose Us',
      title: 'What Makes Us Different',
      desc:
        'We combine deep technical expertise with a sharp focus on business outcomes, ensuring every line of code adds tangible value.',
      items: [
        {
          icon: 'Code' as const,
          title: 'Business-Focused',
          desc: "We don't just write code; we align every architectural decision with your bottom line and operational goals.",
        },
        {
          icon: 'Settings' as const,
          title: 'Holistic Approach',
          desc: 'From initial discovery and UX to deployment and 24/7 maintenance, we handle the entire software lifecycle.',
        },
        {
          icon: 'User' as const,
          title: 'Senior Talent',
          desc: 'Your mission-critical projects are built by seasoned engineers and architects with deep industry expertise.',
        },
        {
          icon: 'Lock' as const,
          title: 'Security First',
          desc: "Security isn't an afterthought. It's built into our CI/CD pipelines and architectural foundations from day one.",
        },
      ],
    },
    cta: {
      title: 'Ready to build the future?',
      desc: "Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.",
      buttonText: 'Start a Project',
      buttonLink: '/contact',
    },
  }

  await payload.updateGlobal({
    slug: 'aboutpage',
    data: initialAboutData,
  })

  console.log('About page successfully seeded with full website initial content!')

  const initialWorksData = {
    hero: {
      title: 'Our Works',
      description:
        "Explore how we've helped leading businesses scale, secure, and innovate with cutting-edge infrastructure.",
    },
    categories: [
      {
        title: 'Cloud Architecture',
        items: [
          {
            title: 'Global Payment Gateway',
            desc: 'Architected a highly scalable, multi-region microservices environment to handle massive transaction volumes.',
            tags: [{ name: 'AWS' }, { name: 'MICROSERVICES' }],
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Data Lake Migration',
            desc: 'Migrated petabytes of enterprise data to a highly available cloud storage infrastructure with zero downtime.',
            tags: [{ name: 'GCP' }, { name: 'DATA' }],
            imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Serverless Infrastructure',
            desc: 'Built a fully serverless backend for real-time analytics, processing millions of events per second.',
            tags: [{ name: 'AWS LAMBDA' }, { name: 'NODEJS' }],
            imageUrl: 'https://images.unsplash.com/photo-1614064641913-6b71f3016345?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Multi-Region Setup',
            desc: 'Designed high availability multi-region deployment systems with automated failover and disaster recovery.',
            tags: [{ name: 'AZURE' }, { name: 'DOCKER' }],
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Edge Compute Network',
            desc: 'Deployed distributed edge computing nodes to reduce latency for global IoT endpoints by 40%.',
            tags: [{ name: 'AWS GREENGRASS' }, { name: 'IOT' }],
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
          },
        ],
      },
      {
        title: 'Web Development',
        items: [
          {
            title: 'Telemedicine Platform',
            desc: 'Developed an end-to-end HIPAA compliant video consultation and patient records system.',
            tags: [{ name: 'REACT' }, { name: 'WEBRTC' }],
            imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'LMS Portal',
            desc: 'Interactive learning management system supporting over 100,000 concurrent students globally.',
            tags: [{ name: 'NEXT.JS' }, { name: 'TYPESCRIPT' }],
            imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Headless Commerce',
            desc: 'High-performance e-commerce storefront integrated with a flexible headless CMS.',
            tags: [{ name: 'SHOPIFY' }, { name: 'VUE' }],
            imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Analytics Dashboard',
            desc: 'Real-time financial data reporting and portfolio management dashboard for wealth advisors.',
            tags: [{ name: 'D3.JS' }, { name: 'REACT' }],
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Real Estate Marketplace',
            desc: 'Built a high-traffic property listing platform with advanced geographic search and virtual tours.',
            tags: [{ name: 'REACT' }, { name: 'MAPBOX' }],
            imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
          },
        ],
      },
      {
        title: 'Systems Integration',
        items: [
          {
            title: 'Omnichannel ERP',
            desc: 'Unified inventory and sales data across 500+ physical stores and e-commerce storefronts.',
            tags: [{ name: 'ERP' }, { name: 'API' }],
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Supply Chain Sync',
            desc: 'Real-time logistics tracking integration connecting legacy warehouse systems with modern apps.',
            tags: [{ name: 'LOGISTICS' }, { name: 'IOT' }],
            imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'HRIS Data Migration',
            desc: 'Seamless migration and ongoing sync for enterprise global employee HR records.',
            tags: [{ name: 'HRIS' }, { name: 'DATA' }],
            imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'CRM Automation Flow',
            desc: 'Unified marketing and sales data via custom bi-directional API integrations.',
            tags: [{ name: 'SALESFORCE' }, { name: 'CRM' }],
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Legacy System Gateway',
            desc: 'Created a modern GraphQL layer over a 20-year-old mainframe database.',
            tags: [{ name: 'GRAPHQL' }, { name: 'MAINFRAME' }],
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
          },
        ],
      },
      {
        title: 'Cybersecurity',
        items: [
          {
            title: 'Zero-Trust Network',
            desc: 'Designed and implemented a zero-trust architecture to secure distributed global teams.',
            tags: [{ name: 'SECURITY' }, { name: 'NETWORKING' }],
            imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Penetration Testing',
            desc: 'Comprehensive vulnerability and patching for a major online banking institution.',
            tags: [{ name: 'PENTEST' }, { name: 'FINANCE' }],
            imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Compliance Infrastructure',
            desc: 'Upgraded data storage workflows to guarantee strict HIPAA and GDPR compliance mandates.',
            tags: [{ name: 'HIPAA' }, { name: 'COMPLIANCE' }],
            imageUrl: 'https://images.unsplash.com/photo-1614064642236-40742f10b777?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Active Threat Monitoring',
            desc: 'Implemented a 24/7 SIEM setup for threat detection and automated response.',
            tags: [{ name: 'MONITORING' }, { name: 'AI' }],
            imageUrl: 'https://images.unsplash.com/photo-1510511459019-5d67af7c46a6?q=80&w=800&auto=format&fit=crop',
          },
          {
            title: 'Secure Identity Access',
            desc: 'Deployed enterprise-wide Okta SSO with advanced conditional access policies.',
            tags: [{ name: 'OKTA' }, { name: 'IAM' }],
            imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
          },
        ],
      },
    ],
    cta: {
      title: 'Ready to build the future?',
      desc: "Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.",
      buttonText: 'Start a Project',
      buttonLink: '/contact',
    },
  }

  await payload.updateGlobal({
    slug: 'workspage',
    data: initialWorksData,
  })

  console.log('Works page successfully seeded with full website initial content!')

  const initialServicesData = {
    hero: {
      title: 'Our Services',
      desc: 'Comprehensive digital solutions tailored to scale, secure, and accelerate your business.',
      buttonText: "Let's Talk",
      buttonLink: '/contact',
    },
    overview: {
      kicker: 'Our Services',
      title: 'Services Overview',
      items: [
        { icon: 'Monitor' as const, label: 'Web Development' },
        { icon: 'Smartphone' as const, label: 'Mobile App Development' },
        { icon: 'LayoutDashboard' as const, label: 'UI/UX Design' },
        { icon: 'Search' as const, label: 'SEO Optimization' },
        { icon: 'Shield' as const, label: 'Cybersecurity' },
        { icon: 'Zap' as const, label: 'Performance Tuning' },
        { icon: 'Cloud' as const, label: 'Cloud Architecture' },
        { icon: 'ShoppingCart' as const, label: 'E-commerce Solutions' },
        { icon: 'Lock' as const, label: 'Data Privacy' },
        { icon: 'Briefcase' as const, label: 'IT Consulting' },
        { icon: 'Key' as const, label: 'System Integration' },
        { icon: 'PenTool' as const, label: 'Content Strategy' },
      ],
    },
    details: {
      items: [
        {
          title: 'Custom Software Development',
          kicker: 'ENGINEERING',
          desc: 'From initial concept to final deployment, we build robust, scalable custom software solutions tailored to your unique business requirements.',
          features: [
            { name: 'Enterprise Applications' },
            { name: 'SaaS Platform Development' },
            { name: 'Legacy Modernization' },
          ],
          imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
          imagePosition: 'right' as const,
        },
        {
          title: 'Mobile App Development',
          kicker: 'MOBILE FIRST',
          desc: 'Deliver seamless user experiences across iOS and Android with our high-performance native and cross-platform mobile development services.',
          features: [
            { name: 'iOS & Android Native Apps' },
            { name: 'React Native & Flutter' },
            { name: 'Mobile UX/UI Design' },
          ],
          imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
          imagePosition: 'left' as const,
        },
        {
          title: 'Data & Analytics',
          kicker: 'DATA INTELLIGENCE',
          desc: 'Unlock the power of your data. We design data pipelines, analytics dashboards, and implement machine learning models to drive decision-making.',
          features: [
            { name: 'Data Warehousing' },
            { name: 'Predictive Analytics' },
            { name: 'Business Intelligence' },
          ],
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
          imagePosition: 'right' as const,
        },
        {
          title: 'Cloud & DevOps',
          kicker: 'INFRASTRUCTURE',
          desc: 'Accelerate your time-to-market with automated CI/CD pipelines, containerization, and scalable cloud infrastructure on AWS, Azure, or GCP.',
          features: [
            { name: 'Cloud Migration' },
            { name: 'CI/CD Pipelines' },
            { name: 'Infrastructure as Code' },
          ],
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
          imagePosition: 'left' as const,
        },
      ],
    },
    techStack: {
      kicker: 'Our Technology Stack',
      title: 'Tools we use to build.',
      categories: [
        {
          title: 'Frontend',
          tools: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Vue.js' }, { name: 'TypeScript' }, { name: 'Tailwind CSS' }],
        },
        {
          title: 'Backend',
          tools: [{ name: 'Node.js' }, { name: 'Python' }, { name: 'Go' }, { name: 'Java' }, { name: 'GraphQL' }],
        },
        {
          title: 'Database',
          tools: [{ name: 'PostgreSQL' }, { name: 'MongoDB' }, { name: 'Redis' }, { name: 'Elasticsearch' }],
        },
        {
          title: 'Cloud',
          tools: [{ name: 'AWS' }, { name: 'Google Cloud' }, { name: 'Microsoft Azure' }, { name: 'Vercel' }],
        },
        {
          title: 'DevOps & CI/CD',
          tools: [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'GitHub Actions' }, { name: 'Terraform' }],
        },
        {
          title: 'AI & Data',
          tools: [{ name: 'TensorFlow' }, { name: 'PyTorch' }, { name: 'OpenAI API' }, { name: 'Apache Kafka' }],
        },
      ],
    },
    process: {
      kicker: 'Our Process',
      title: 'From concept to launch.',
      steps: [
        { num: '01', title: 'Discovery', desc: 'We start by understanding your business, goals, and technical requirements.' },
        { num: '02', title: 'Strategy', desc: 'Developing a comprehensive roadmap and system architecture for the project.' },
        { num: '03', title: 'Wireframing', desc: 'Creating intuitive UI/UX designs and user flows for seamless interaction.' },
        { num: '04', title: 'Development', desc: 'Agile implementation using modern frameworks and best coding practices.' },
        { num: '05', title: 'Testing', desc: 'Rigorous QA, security auditing, and performance optimization before release.' },
        { num: '06', title: 'Launch', desc: 'Smooth deployment and ongoing support to ensure long-term success.' },
      ],
    },
    domainExpertise: {
      kicker: 'Industries',
      title: 'Domain expertise.',
      items: [
        { title: 'Finance & Fintech', imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop' },
        { title: 'Healthcare & Medtech', imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
        { title: 'Retail & E-commerce', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop' },
        { title: 'Logistics & Supply', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' },
      ],
    },
    statsBanner: {
      kicker: 'Why Choose Our Services',
      title: 'Engineering excellence.',
      features: [
        { icon: 'Shield' as const, title: 'Security by Design', desc: 'Rigorous compliance and protection built into every layer.' },
        { icon: 'Rocket' as const, title: 'Scalable Architecture', desc: 'Systems engineered to handle massive growth without breaking.' },
        { icon: 'Users' as const, title: 'Dedicated Teams', desc: 'Senior engineers acting as a true extension of your company.' },
        { icon: 'History' as const, title: 'Agile Delivery', desc: 'Iterative sprints for fast, reliable, and transparent releases.' },
      ],
    },
    caseStudies: {
      kicker: 'Case Studies',
      title: 'Real results.',
      items: [
        {
          kicker: 'CLOUD MIGRATION',
          title: 'Global Logistics Network Modernization',
          desc: 'How we transitioned a legacy on-premise system to a highly available, multi-region AWS cloud architecture, reducing downtime by 99.9%.',
          imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
        },
        {
          kicker: 'AI INTEGRATION',
          title: 'Predictive Analytics for Healthcare',
          desc: 'Implementing machine learning models into an existing EHR system to predict patient readmissions with 85% accuracy.',
          imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
        },
      ],
    },
    faq: {
      title: 'Common Service Questions.',
      faqs: [
        {
          question: 'Do you provide post-launch support and maintenance?',
          answer: 'Yes, we offer comprehensive post-launch support packages, including regular updates, security patching, and performance monitoring to ensure your application runs smoothly long-term.',
        },
        {
          question: 'How do you ensure the security of our data?',
          answer: 'We employ industry-standard encryption, zero-trust architectures, and regular penetration testing. Compliance with GDPR, HIPAA, and other regulatory frameworks is built into our development lifecycle.',
        },
        {
          question: 'How long does a typical project take to complete?',
          answer: 'Project timelines vary widely based on scope and complexity. A standard web application might take 3-4 months, while enterprise system integrations can take 6-12 months. We provide detailed estimates during the Discovery phase.',
        },
        {
          question: 'What is your pricing model for development services?',
          answer: 'We offer both fixed-price contracts for well-defined scopes and time-and-materials (T&M) models for agile projects with evolving requirements. We tailor the approach to fit your budget and project style.',
        },
      ],
    },
    cta: {
      title: 'Ready to build the future?',
      desc: "Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.",
      buttonText: 'Start a Project',
      buttonLink: '/contact',
    },
  }

  await payload.updateGlobal({
    slug: 'servicespage',
    data: initialServicesData,
  })

  console.log('Services page successfully seeded with full website initial content!')

  const initialSiteSettingsData = {
    brandDescription:
      'Delivering reliable, scalable digital solutions for businesses of all sizes to streamline operations and drive growth.',
    copyright: '© 2026 Zevriqa. All rights reserved.',
    tagline: 'Engineered for clarity, performance, and scale.',
    email: 'zevriqasolutions@gmail.com',
    phoneNumbers: [
      { number: '+91-7994398200' },
      { number: '+91-7994532263' },
    ],
    whatsappNumber: '+917994532263',
    whatsappMessage: 'Hello Zevriqa, I would like to discuss a project.',
    address: '6VVQ+X99, Perumanna,\nKeralam 673019',
    googleMapsUrl:
      'https://www.google.com/maps/place/6VVQ%2BX99,+Perumanna,+Keralam+673019/@11.2449266,75.8882922,54m/data=!3m1!1e3!4m6!3m5!1s0x3ba65b309c30ccaf:0x616b27d6f0668e35!8m2!3d11.2449327!4d75.8884664!16s%2Fg%2F11f50wt4_k?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D',
    instagram:
      'https://www.instagram.com/zevriqasolutions?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
    twitter: '#',
    facebook:
      'https://www.facebook.com/profile.php?id=61594699738577&sk=directory_personal_details',
    linkedin: '#',
  }

  await payload.updateGlobal({
    slug: 'site-settings',
    data: initialSiteSettingsData,
  })

  console.log('Site settings successfully seeded with company info & social links!')

  const initialContactData = {
    hero: {
      title: "Let's Build Something Great Together",
      desc: "Reach out to our team today. We're ready to answer your questions and kickstart your next project.",
    },
    intro: {
      kicker: 'GET IN TOUCH',
      title: "We'd love to hear from you.",
      desc: 'Whether you have a question about our services, need a technical assessment, or are ready to start a project, our team is ready to help.',
    },
    form: {
      nameLabel: 'NAME',
      namePlaceholder: 'Your name',
      emailLabel: 'EMAIL',
      emailPlaceholder: 'you@company.com',
      detailsLabel: 'PROJECT DETAILS',
      detailsPlaceholder: 'Tell us about your digital challenges or software goals...',
      buttonText: 'Send Message',
    },
  }

  await payload.updateGlobal({
    slug: 'contactpage',
    data: initialContactData,
  })

  console.log('Contact page successfully seeded with full website initial content!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Error seeding CMS:', err)
  process.exit(1)
})
