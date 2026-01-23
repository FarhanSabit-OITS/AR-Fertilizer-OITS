
import { Category, Product, TeamMember, GalleryItem, BlogPost } from './types';

const asset = (path: string) => path.startsWith('/') ? path : `/${path}`;

export const PRODUCTS: Product[] = [
  // Fertilizers (8)
  {
    id: 'f1',
    name: 'NPK 15-15-15 Plus',
    category: Category.FERTILIZERS,
    description: 'A premium balanced fertilizer designed for general crop growth and soil revitalization. Optimized for maximum absorption in diverse soil conditions.',
    image: asset('assets/portfolio/portfolio-7.jpg'),
    specifications: ['Nitrogen: 15%', 'Phosphorus: 15%', 'Potassium: 15%', 'Enhanced with Micro-nutrients']
  },
  {
    id: 'f2',
    name: 'Urea Diamond Grade',
    category: Category.FERTILIZERS,
    description: 'High-nitrogen fertilizer essential for the vegetative growth phase of crops. Provides a quick boost to leaf and stem development.',
    image: asset('assets/portfolio/portfolio-8.jpg'),
    specifications: ['Nitrogen: 46%', 'Slow Release Formula', 'Industrial Grade Purity']
  },
  {
    id: 'f3',
    name: 'DAP Power Gold',
    category: Category.FERTILIZERS,
    description: 'Diammonium Phosphate formulated for strong root development and winter hardiness. Essential for cereal crops and orchards.',
    image: asset('assets/portfolio/portfolio-9.jpg'),
    specifications: ['N: 18%', 'P2O5: 46%', 'High Water Solubility', 'Fast Acting']
  },
  {
    id: 'f4',
    name: 'MOP Premium Red',
    category: Category.FERTILIZERS,
    description: 'Muriate of Potash provides essential potassium for fruit quality, water regulation, and disease resistance.',
    image: asset('assets/portfolio/portfolio-1.jpg'),
    specifications: ['K2O: 60%', 'Crystalline Form', 'Low Moisture Content']
  },
  {
    id: 'f5',
    name: 'Boron Booster 20',
    category: Category.FERTILIZERS,
    description: 'Highly soluble boron for correcting deficiencies in high-value horticultural crops and oilseeds.',
    image: asset('assets/portfolio/portfolio-2.jpg'),
    specifications: ['Boron: 20%', 'Instant Dissolving', 'Foliar Grade']
  },
  {
    id: 'f6',
    name: 'Zinc-Sulphate Hepta',
    category: Category.FERTILIZERS,
    description: 'Essential micronutrient for enzyme function and chlorophyll production. Prevents white bud disease in maize.',
    image: asset('assets/portfolio/portfolio-3.jpg'),
    specifications: ['Zn: 21%', 'S: 10%', 'Heptahydrate Crystals']
  },
  {
    id: 'f7',
    name: 'Organic Compost Plus',
    category: Category.FERTILIZERS,
    description: 'Enriched organic matter that improves soil structure and microbial activity. Sustainable long-term nutrition.',
    image: asset('assets/portfolio/portfolio-4.jpg'),
    specifications: ['Organic Carbon: 16%', 'C:N Ratio < 20:1', 'Pathogen Free']
  },
  {
    id: 'f8',
    name: 'TSP Superior Grey',
    category: Category.FERTILIZERS,
    description: 'Triple Superphosphate for efficient phosphorus delivery in root-heavy crops. Essential for legume nitrogen fixation.',
    image: asset('assets/portfolio/portfolio-5.jpg'),
    specifications: ['P2O5: 46%', 'High Water Solubility', 'Granular Form']
  },

  // Feed Additives (8)
  {
    id: 'a1',
    name: 'Lipidin - Feed Supplement',
    category: Category.FEED_ADDITIVES,
    description: 'Advanced nutritional supplement from Avitech, enhancing lipid metabolism and growth efficiency. Formulated for high-performance poultry and livestock.',
    image: asset('assets/portfolio/portfolio-6.jpg'),
    specifications: ['Lipid metabolism enhancer', 'Growth promoter', 'Highly digestible', 'Member of Keggfarms Group']
  },
  {
    id: 'a2',
    name: 'Huineng Immunity Boost',
    category: Category.FEED_ADDITIVES,
    description: 'Specialized animal health supplement manufactured under strict global quality standards in Zhejiang. Focuses on immunity and yield optimization.',
    image: asset('assets/portfolio/portfolio-details-1.jpg'),
    specifications: ['Veterinary Grade', 'Zhejiang Huineng Brand', 'Immunity Booster', 'GMP Certified']
  },
  {
    id: 'a3',
    name: 'Pro-Enzyme X Multi',
    category: Category.FEED_ADDITIVES,
    description: 'Multi-enzyme complex from VTR Bio-Tech. Enhances digestibility of unconventional feed ingredients.',
    image: asset('assets/portfolio/portfolio-details-2.jpg'),
    specifications: ['Xylanase', 'Beta-Glucanase', 'Cellulase', 'Protease']
  },
  {
    id: 'a4',
    name: 'Amino-Grow L-Lysine',
    category: Category.FEED_ADDITIVES,
    description: 'Essential amino acid supplement for optimizing protein synthesis in broiler chickens and swine.',
    image: asset('assets/portfolio/portfolio-details-3.jpg'),
    specifications: ['L-Lysine HCl: 98.5%', 'Feed Grade', 'Dust Free Granules']
  },
  {
    id: 'a5',
    name: 'Bio-Tox Binder Ultra',
    category: Category.FEED_ADDITIVES,
    description: 'High-capacity mycotoxin binder that protects livestock from contaminated feed and improves gut health.',
    image: asset('assets/portfolio/portfolio-1.jpg'),
    specifications: ['Broad Spectrum Binding', 'HSCAS Base', 'Yeast Cell Wall Enriched']
  },
  {
    id: 'a6',
    name: 'Vita-Shell D3 Plus',
    category: Category.FEED_ADDITIVES,
    description: 'Concentrated Vitamin D3 and Electrolyte mix for improving eggshell quality in layer birds.',
    image: asset('assets/portfolio/portfolio-2.jpg'),
    specifications: ['Vit D3: 500,000 IU', 'Calcium Gluconate', 'Water Soluble']
  },
  {
    id: 'a7',
    name: 'Choline Guard 60',
    category: Category.FEED_ADDITIVES,
    description: 'Essential nutrient for fat metabolism and preventing fatty liver syndrome in poultry.',
    image: asset('assets/portfolio/portfolio-3.jpg'),
    specifications: ['Choline Chloride: 60%', 'Corn Cob Carrier', 'High Bioavailability']
  },
  {
    id: 'a8',
    name: 'Opti-Gut Prebiotic',
    category: Category.FEED_ADDITIVES,
    description: 'High-quality mannan-oligosaccharides to support beneficial gut microflora and inhibit pathogen attachment.',
    image: asset('assets/portfolio/portfolio-4.jpg'),
    specifications: ['MOS: 40%', 'Beta-Glucan: 30%', 'Heat Stable']
  },

  // Minerals (4)
  {
    id: 'm1',
    name: 'Loong Dicalcium Phosphate',
    category: Category.MINERALS,
    description: 'High-purity feed-grade mineral powder from Sichuan Chanhen, essential for bone development and overall metabolic health.',
    image: asset('assets/portfolio/portfolio-5.jpg'),
    specifications: ['Phosphorus: 18% min', 'Calcium: 21% min', 'Feed Grade Powder', 'Certified Asian Leader']
  },
  {
    id: 'm2',
    name: 'MCP Mono-Calcium 22',
    category: Category.MINERALS,
    description: 'High-solubility phosphorus source for starter diets and aquaculture applications.',
    image: asset('assets/portfolio/portfolio-6.jpg'),
    specifications: ['Total P: 22.7%', 'Water Soluble P: 20%', 'Fine Granule']
  },
  {
    id: 'm3',
    name: 'Trace Mineral Premix-P',
    category: Category.MINERALS,
    description: 'Custom blend of essential minerals for poultry including Fe, Mn, Zn, Cu, and I.',
    image: asset('assets/portfolio/portfolio-details-1.jpg'),
    specifications: ['Poultry Specific', 'Consistent Particle Size', 'Non-Reactive Carrier']
  },
  {
    id: 'm4',
    name: 'Bone-Strength Calcium Carbonate',
    category: Category.MINERALS,
    description: 'Ultrafine ground limestone for maximum calcium absorption in high-production layer hens.',
    image: asset('assets/portfolio/portfolio-details-2.jpg'),
    specifications: ['Calcium: 38%', 'Purity: 98%', 'Grit Size: 2-4mm']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Mr. Atiar Rahman',
    role: 'Chief Executive Officer',
    image: asset('assets/team/team-1.jpg'),
    bio: 'Visionary leader with 35+ years of experience. Former specialist at Biman Poultry Complex since 1987. Architect of AR Group\'s success.',
    socials: { linkedin: '#', email: 'atiar@aranimalhealthltd.com' }
  },
  {
    id: 'research-lead',
    name: 'Dr. Michael Lau',
    role: 'Lead Researcher',
    image: asset('assets/team/team-2.jpg'),
    bio: 'With a Ph.D. in Agricultural Sciences, Dr. Lau leads our R&D initiatives, focusing on sustainable nutrient delivery systems.',
    socials: { linkedin: '#', email: 'michael.lau@aranimalhealthltd.com' }
  },
  {
    id: 'ops-director',
    name: 'Sarah Jenkins',
    role: 'Director of Operations',
    image: asset('assets/team/team-3.jpg'),
    bio: 'Sarah oversees our supply chain and global partnerships, ensuring seamless logistics from our international manufacturing hubs.',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'tech-support',
    name: 'Engr. Faisal Ahmed',
    role: 'Technical Support Head',
    image: asset('assets/team/team-4.jpg'),
    bio: 'Faisal bridges the gap between our high-tech products and farm-level implementation with expert diagnostic support.',
    socials: { linkedin: '#', email: 'faisal.ahmed@aranimalhealthltd.com' }
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'State-of-the-art Production', category: 'Facilities', image: asset('assets/portfolio/portfolio-1.jpg') },
  { id: 'g2', title: 'Global Logistics Hub', category: 'Facilities', image: asset('assets/portfolio/portfolio-2.jpg') },
  { id: 'g3', title: 'Smart Farming Dashboard', category: 'Innovation', image: asset('assets/portfolio/portfolio-3.jpg') },
  { id: 'g4', title: 'Poultry Health Research', category: 'Innovation', image: asset('assets/portfolio/portfolio-4.jpg') },
  { id: 'g5', title: 'R&D Center Laboratory', category: 'Science', image: asset('assets/portfolio/portfolio-5.jpg') },
  { id: 'g6', title: 'Sustainable Field Trials', category: 'Environment', image: asset('assets/portfolio/portfolio-6.jpg') }
];

export const HERO_SLIDES = [
  {
    title: "World-Class Agricultural Partners",
    subtitle: "Strategic alliances with Sichuan Chanhen, VTR, and Esigma to bring global innovation to Bangladesh.",
    image: asset('assets/slide/slide-1.jpg')
  },
  {
    title: "Advanced Feed Biotechnology",
    subtitle: "Pioneering the market with high-efficiency enzymes and pharmaceutical-grade poultry additives.",
    image: asset('assets/slide/slide-2.jpg')
  }
];

export const PARTNER_DETAILS = [
  {
    name: 'Sichuan Chanhen',
    desc: 'Asia\'s largest supplier of MCP/MKP. Specializing in phosphate rock mining and intensive processing with annual capacity over 700,000 tons.',
    logo: asset('assets/clients/client-1.png')
  },
  {
    name: 'VTR Bio-Tech',
    desc: 'Largest professional animal feed enzyme manufacturer in China. 18+ years of experience in bioengineering and natural medicine extraction.',
    logo: asset('assets/clients/client-2.png')
  },
  {
    name: 'ESIGMA Health',
    desc: 'Chinese leader in pharmaceutical additives since 1997. Specializing in anticoccidial products with GMP approved facilities.',
    logo: asset('assets/clients/client-3.png')
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Future of Phosphate in Soil Nutrition",
    excerpt: "Discover how deep processing of phosphorus resources is revolutionizing agricultural yield across Southeast Asia.",
    content: "Phosphorus is a cornerstone of modern agriculture. At AR Fertilizer Ltd, we are partnering with global leaders like Sichuan Chanhen to bring high-purity MCP and MDCP to the local market. Our research shows that optimized mineral intake in livestock significantly boosts health and productivity...",
    date: "Jan 12, 2024",
    author: "Dr. Michael Lau",
    image: asset('assets/portfolio/portfolio-1.jpg'),
    category: "Technical"
  },
  {
    id: '2',
    title: "Optimizing Poultry Health with Bio-Enzymes",
    excerpt: "New studies show that feed additives containing targeted enzymes can improve feed conversion ratios by up to 15%.",
    content: "Bio-engineering in poultry feed is no longer a luxury but a necessity for sustainable farming. Guangdong VTR Bio-Tech has pioneered enzymatic solutions that ensure better nutrient absorption. By integrating these solutions, farmers can expect a significant reduction in waste and cost...",
    date: "Feb 05, 2024",
    author: "Atiar Rahman",
    image: asset('assets/portfolio/portfolio-2.jpg'),
    category: "Research"
  }
];

export const MILESTONES = [
  { year: '2010', title: 'Founding Year', description: 'AR Animal Health Ltd established to fill the gap in high-tech agricultural supplies.', icon: 'Flag' },
  { year: '2013', title: 'Strategic Alliance', description: 'Became the primary distributor of Asia\'s leading Monocalcium Phosphate brand.', icon: 'Globe' },
  { year: '2023', title: 'Biotech Hub', description: 'Launched a dedicated technical support app for farmers.', icon: 'Zap' }
];
