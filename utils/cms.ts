import { api } from './api';

export interface ServiceFeature {
  title: string;
  desc: string;
  iconName: string;
}

export interface ServiceModel {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  fullDescription: string;
  benefits: string[];
  features: ServiceFeature[];
}

export interface ResourceModel {
  id: string;
  title: string;
  category: string;
  format: string;
  date: string;
  readTime: string;
}

export interface JobModel {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
}

export interface IndustryFeature {
  title: string;
  desc: string;
  iconName: string;
}

export interface IndustryModel {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  fullDescription: string;
  benefits: string[];
  features: IndustryFeature[];
}

export interface FooterLinkModel {
  id: string;
  column: 'Quick Links' | 'Services' | 'Resources';
  label: string;
  url: string;
}

// ============================================================
// Default data — used as fallback when API is unreachable
// ============================================================

const defaultServices: ServiceModel[] = [
  {
    id: '1',
    slug: 'ai-ml-services',
    title: 'AI & ML Services',
    description: 'Top-notch delivery of comprehensive GenAI and Agentic AI solutions tailored for enterprise success.',
    iconName: 'Brain',
    fullDescription: 'Our AI & ML Services provide cutting-edge artificial intelligence and machine learning solutions designed for modern enterprises.',
    benefits: ['Generative AI Implementation', 'Machine Learning Models', 'Enterprise AI Integration', 'Scalable AI Solutions'],
    features: [{ title: 'GenAI Solutions', desc: 'Advanced generative AI for content and decision-making', iconName: 'Zap' }, { title: 'Agentic AI', desc: 'Autonomous AI agents for complex workflows', iconName: 'Brain' }, { title: 'Custom Models', desc: 'Tailored machine learning models for your use cases', iconName: 'Settings' }]
  },
  {
    id: '2',
    slug: 'cloud-cognitive-business-operations',
    title: 'Cloud Cognitive Business Operations',
    description: 'Intelligent cloud-based business operations powered by cognitive technologies.',
    iconName: 'Cloud',
    fullDescription: 'Transform your business operations with our cloud-based cognitive solutions.',
    benefits: ['Cloud Infrastructure', 'Cognitive Automation', 'Real-time Analytics', 'Cost Optimization'],
    features: [{ title: 'Cloud Platform', desc: 'Scalable cloud infrastructure for enterprise operations', iconName: 'Cloud' }, { title: 'Cognitive Automation', desc: 'AI-powered process automation and optimization', iconName: 'Zap' }, { title: 'Analytics & Insights', desc: 'Real-time business intelligence and reporting', iconName: 'BarChart3' }]
  },
  {
    id: '3',
    slug: 'mechanical-industrial-solutions',
    title: 'Mechanical & Industrial Solutions',
    description: 'Expert mechanical engineering and industrial systems design for complex environments.',
    iconName: 'Factory',
    fullDescription: 'Specialized mechanical engineering and industrial systems design services for complex manufacturing and industrial environments.',
    benefits: ['System Design & Engineering', 'Machinery Optimization', 'Industrial Automation', 'Quality Assurance'],
    features: [{ title: 'Design Engineering', desc: 'Advanced CAD and mechanical design solutions', iconName: 'Wrench' }, { title: 'Automation', desc: 'Industrial automation and control systems', iconName: 'Zap' }, { title: 'Optimization', desc: 'Equipment performance and efficiency optimization', iconName: 'TrendingUp' }]
  },
  {
    id: '4',
    slug: 'pipeline-design-installation',
    title: 'Pipeline Design & Installation',
    description: 'Professional pipeline engineering, mapping, and installation services worldwide.',
    iconName: 'GitBranch',
    fullDescription: 'Comprehensive pipeline engineering and installation services covering design, mapping, installation, and maintenance.',
    benefits: ['Global Expertise', 'Advanced Mapping', 'Quality Installation', 'Maintenance Support'],
    features: [{ title: 'Engineering Design', desc: 'Professional pipeline design and route optimization', iconName: 'GitBranch' }, { title: 'Installation', desc: 'Expert installation and commissioning services', iconName: 'Hammer' }, { title: 'Maintenance', desc: 'Ongoing maintenance and inspection services', iconName: 'Wrench' }]
  },
  {
    id: '5',
    slug: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise-grade solutions tailored to your business needs.',
    iconName: 'Building2',
    fullDescription: 'Our enterprise solutions provide scalable, robust systems designed for large organizations.',
    benefits: ['Scalable Infrastructure', 'Enterprise Architecture', 'High Availability', 'Business Continuity'],
    features: [{ title: 'Infrastructure', desc: 'Enterprise-grade infrastructure and architecture', iconName: 'Building2' }, { title: 'Applications', desc: 'Custom enterprise applications and integrations', iconName: 'Code' }, { title: 'Support', desc: '24/7 enterprise support and managed services', iconName: 'Headphones' }]
  },
  {
    id: '6',
    slug: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
    iconName: 'Shield',
    fullDescription: 'Complete cybersecurity solutions protecting your organization from evolving threats.',
    benefits: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Consulting'],
    features: [{ title: 'Threat Detection', desc: 'Advanced threat detection and monitoring systems', iconName: 'AlertTriangle' }, { title: 'Incident Response', desc: 'Rapid response to security incidents', iconName: 'Zap' }, { title: 'Compliance', desc: 'Security compliance and audit management', iconName: 'CheckCircle' }]
  }
];

const defaultIndustries: IndustryModel[] = [
  {
    id: '1',
    slug: 'manufacturing',
    title: 'Manufacturing',
    description: 'Digital solutions for modern manufacturing',
    iconName: 'Factory',
    fullDescription: 'We deliver cutting-edge solutions tailored for the manufacturing sector, from automation and optimization to digital transformation and Industry 4.0 integration.',
    benefits: ['Production Optimization', 'Equipment Monitoring', 'Quality Control', 'Supply Chain Integration'],
    features: [{ title: 'Automation', desc: 'Advanced manufacturing automation systems', iconName: 'Zap' }, { title: 'IoT Integration', desc: 'Connected sensors and real-time monitoring', iconName: 'Radio' }, { title: 'Analytics', desc: 'Production analytics and insights', iconName: 'BarChart3' }]
  },
  {
    id: '2',
    slug: 'healthcare',
    title: 'Healthcare',
    description: 'Health tech solutions for modern healthcare providers',
    iconName: 'Heart',
    fullDescription: 'Our healthcare solutions support patient care, operational efficiency, and digital transformation.',
    benefits: ['Patient Care Enhancement', 'Regulatory Compliance', 'Data Security', 'Operational Efficiency'],
    features: [{ title: 'EHR Systems', desc: 'Electronic health record management systems', iconName: 'FileText' }, { title: 'Telemedicine', desc: 'Remote patient consultation platforms', iconName: 'Video' }, { title: 'Analytics', desc: 'Healthcare data analytics and reporting', iconName: 'BarChart3' }]
  },
  {
    id: '3',
    slug: 'retail-ecommerce',
    title: 'Retail & E-commerce',
    description: 'Omnichannel commerce solutions for retailers',
    iconName: 'ShoppingCart',
    fullDescription: 'Transform your retail business with our comprehensive e-commerce and omnichannel solutions.',
    benefits: ['Sales Growth', 'Customer Experience', 'Inventory Management', 'Omnichannel Integration'],
    features: [{ title: 'E-commerce Platform', desc: 'Scalable online shopping platforms', iconName: 'ShoppingCart' }, { title: 'Payment Processing', desc: 'Secure payment gateway integration', iconName: 'CreditCard' }, { title: 'Inventory', desc: 'Real-time inventory and order management', iconName: 'Package' }]
  },
  {
    id: '4',
    slug: 'financial-services',
    title: 'Financial Services',
    description: 'Fintech solutions for financial institutions',
    iconName: 'DollarSign',
    fullDescription: 'We provide secure, compliant fintech solutions for banks, investment firms, and financial institutions.',
    benefits: ['Regulatory Compliance', 'Security & Encryption', 'Trading Efficiency', 'Risk Management'],
    features: [{ title: 'Trading Platforms', desc: 'Advanced trading and investment platforms', iconName: 'TrendingUp' }, { title: 'Compliance', desc: 'Regulatory compliance management systems', iconName: 'CheckCircle' }, { title: 'Risk Analysis', desc: 'Real-time risk monitoring and analysis', iconName: 'AlertTriangle' }]
  },
  {
    id: '5',
    slug: 'energy-utilities',
    title: 'Energy & Utilities',
    description: 'Digital solutions for energy and utility sectors',
    iconName: 'Zap',
    fullDescription: 'Optimize energy distribution and utility operations with our smart grid, IoT, and analytics solutions.',
    benefits: ['Smart Grid Technology', 'Energy Efficiency', 'Real-time Monitoring', 'Sustainability'],
    features: [{ title: 'Smart Grid', desc: 'Intelligent grid management systems', iconName: 'Radio' }, { title: 'IoT Sensors', desc: 'Connected sensor networks for monitoring', iconName: 'Zap' }, { title: 'Predictive', desc: 'Predictive maintenance and analytics', iconName: 'TrendingUp' }]
  },
  {
    id: '6',
    slug: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    description: 'Supply chain optimization and logistics solutions',
    iconName: 'Truck',
    fullDescription: 'Optimize your entire supply chain with our logistics, tracking, and analytics solutions.',
    benefits: ['Route Optimization', 'Real-time Tracking', 'Warehouse Automation', 'Cost Reduction'],
    features: [{ title: 'Tracking', desc: 'Real-time shipment tracking and visibility', iconName: 'Radio' }, { title: 'Optimization', desc: 'Route and delivery optimization', iconName: 'Navigation' }, { title: 'Warehouse', desc: 'Warehouse management systems', iconName: 'Package' }]
  },
  {
    id: '7',
    slug: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Solutions for upstream, midstream, and downstream operations',
    iconName: 'Droplet',
    fullDescription: 'Specialized solutions for the oil and gas industry including exploration, production, distribution, and safety.',
    benefits: ['Production Optimization', 'Safety & Compliance', 'Resource Management', 'Environmental Monitoring'],
    features: [{ title: 'Production', desc: 'Reservoir and production optimization', iconName: 'TrendingUp' }, { title: 'Safety', desc: 'Safety systems and incident prevention', iconName: 'AlertTriangle' }, { title: 'Pipeline', desc: 'Pipeline monitoring and management', iconName: 'GitBranch' }]
  },
  {
    id: '8',
    slug: 'infrastructure-construction',
    title: 'Infrastructure & Construction',
    description: 'Digital solutions for construction and infrastructure projects',
    iconName: 'HardHat',
    fullDescription: 'Streamline construction and infrastructure projects with our project management, BIM, and collaboration solutions.',
    benefits: ['Project Management', 'Cost Control', 'Safety Management', 'Quality Assurance'],
    features: [{ title: 'BIM', desc: 'Building Information Modeling systems', iconName: 'Building2' }, { title: 'Collaboration', desc: 'Team collaboration and communication tools', iconName: 'Users' }, { title: 'Compliance', desc: 'Safety and compliance management', iconName: 'CheckCircle' }]
  }

const defaultResources: ResourceModel[] = [
  { id: '1', title: "The Future of Industrial AI", category: "AI & ML", format: "PDF Guide", date: "Oct 24", readTime: "15 min" }
];

const defaultJobs: JobModel[] = [
  { id: '1', title: "Lead ML Engineer", department: "Data/AI", location: "On Location", type: "FULL-TIME", tags: ["MLOps", "Cloud", "Predictive Modeling"] }
];

const defaultFooterLinks: FooterLinkModel[] = [
  { id: '1', column: 'Quick Links', label: 'Home', url: '/' },
  { id: '2', column: 'Quick Links', label: 'About Us', url: '/#about' },
  { id: '3', column: 'Quick Links', label: 'Industries', url: '/#industries' },
  { id: '4', column: 'Quick Links', label: 'Careers', url: '/careers' },
  { id: '5', column: 'Quick Links', label: 'Contact', url: '/#contact' },
  { id: '6', column: 'Services', label: 'AI & ML Services', url: '/solutions/ai-ml-services' },
  { id: '7', column: 'Services', label: 'Cloud & Digital Operations', url: '/solutions/cloud-cognitive' },
  { id: '8', column: 'Services', label: 'Mechanical & Industrial', url: '/solutions/mechanical-industrial' },
  { id: '9', column: 'Services', label: 'Pipeline Design & Installation', url: '/solutions/pipeline-design' },
  { id: '10', column: 'Services', label: 'Gas Industry Solutions', url: '/solutions/gas-industry' },
  { id: '11', column: 'Services', label: 'Digital Marketing', url: '/solutions/digital-marketing' },
  { id: '12', column: 'Services', label: 'Consulting & Cybersecurity', url: '/solutions/enterprise-solutions' },
  { id: '13', column: 'Resources', label: 'Blog', url: '/#resources' },
  { id: '14', column: 'Resources', label: 'Case Studies', url: '/#resources' },
  { id: '15', column: 'Resources', label: 'Whitepapers', url: '/#resources' },
  { id: '16', column: 'Resources', label: 'Tutorials', url: '/#resources' },
  { id: '17', column: 'Resources', label: 'Company Updates', url: '/#resources' }
];

// ============================================================
// Async API-backed CMS helpers (with fallback to defaults)
// ============================================================

function createAPIHelper<T extends { id: string }>(endpoint: string, staticDataFile: string, fallbackData: T[]) {
  return {
    getAll: async (): Promise<T[]> => {
      try {
        // First try to fetch from static JSON file
        const response = await fetch(staticDataFile);
        if (response.ok) {
          console.log(`[CMS] Loaded ${staticDataFile} from static files`);
          return await response.json();
        }
      } catch (err) {
        console.warn(`[CMS] Static file ${staticDataFile} not found, trying API...`);
      }

      try {
        // Try API endpoint as secondary source
        return await api.get<T[]>(endpoint);
      } catch (err) {
        console.warn(`API ${endpoint} unavailable, using defaults:`, err);
        return fallbackData;
      }
    },
    add: async (item: Omit<T, 'id'>): Promise<T> => {
      return await api.post<T>(endpoint, item);
    },
    update: async (id: string, updated: Partial<T>): Promise<T> => {
      return await api.put<T>(`${endpoint}/${id}`, updated);
    },
    remove: async (id: string): Promise<void> => {
      await api.delete(`${endpoint}/${id}`);
    }
  };
}

export const CMSServices = createAPIHelper<ServiceModel>('/services', '/data/services.json', defaultServices);
export const CMSResources = createAPIHelper<ResourceModel>('/resources', '/data/resources.json', defaultResources);
export const CMSJobs = createAPIHelper<JobModel>('/jobs', '/data/jobs.json', defaultJobs);
export const CMSIndustries = createAPIHelper<IndustryModel>('/industries', '/data/industries.json', defaultIndustries);
export const CMSFooterLinks = createAPIHelper<FooterLinkModel>('/footer-links', '/data/footer-links.json', defaultFooterLinks);
