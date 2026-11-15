export interface Capability {
  index: string;
  title: string;
  description: string;
}

export interface MineralProduct {
  id: string;
  name: string;
  category: 'Drilling & Oilfield' | 'Ceramics & Glass' | 'Construction & Metallurgy';
  formulaOrType: string;
  summary: string;
  applications: string;
}

export interface OrePowderSpecRow {
  no: number;
  property: string;
  unit: string;
  sg420: string;
  sg410: string;
}

export interface PowderSupplyResultRow {
  no: number;
  property: string;
  unit: string;
  sg420Req: string;
  sg420Result: string;
  sg410Req: string;
  sg410Result: string;
}

export const COMPANY_INFO = {
  shortName: 'Gulfasia Trade Engineering',
  legalName: 'GULFASIA TRADE ENGINEERING PRIVATE LIMITED',
  displayName: 'Gulfasia Trade Engineering Pvt Ltd',
  registrationNote: 'Registered with the Government of India as an Export Organization',
  phone: '+91 70102 83309',
  phoneHref: 'tel:+917010283309',
  email: 'ceo@gatetradeengg.com',
  emailHref: 'mailto:ceo@gatetradeengg.com',
  website: 'www.gatetradeengg.com',
  websiteHref: 'https://www.gatetradeengg.com',
  brochurePath: '/assets/aistudio/GULFASIA_brochure_v3_f59a4a9d.pdf',
  addressLines: [
    'Alliance Humming Garden, Villa No. 92',
    'Thayyur, Rajiv Gandhi Salai',
    'Kelambakkam, Tamil Nadu 603103, India',
  ],
  fullAddress:
    'Alliance Humming Garden, Villa No. 92, Thayyur, Rajiv Gandhi Salai, Kelambakkam, Tamil Nadu 603103',
  aboutParagraph:
    "Registered with the Government of India as an Export Organization, GULFASIA TRADE ENGINEERING Pvt Ltd has come into force to make and mark a difference in how the Barite and other mineral industry work. From confirmation of order till delivering the products to the warehouse or client's site, we understand and cater to the buyer's requirement with tailor-made precision: smoothly, efficiently, and above all professionally.",
};

export const HERO_METRICS = [
  {
    value: '4.20 / 4.10 SG',
    label: 'API Spec 13A Min. Density Guaranteed',
  },
  {
    value: '90% / 85%',
    label: 'Minimum Barium Sulfate (BaSO₄) Content',
  },
  {
    value: '1.50 MT',
    label: 'New Big Bag Standard & Custom Packing',
  },
  {
    value: '27 MT / FCL',
    label: "20' HD Container & Break-Bulk Vessels",
  },
];

export const CORE_CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Global Mineral Sourcing',
    description:
      'Source the best and wide range of industrial minerals directly from premium geographies.',
  },
  {
    index: '02',
    title: 'Committed Deliveries',
    description:
      'End-to-end execution from order confirmation through final delivery to the warehouse or client site.',
  },
  {
    index: '03',
    title: 'Factories & Pulverizing Units',
    description:
      'Operate dedicated factories and pulverizing units to facilitate crushing, processing, packing, production, and marketing of minerals.',
  },
  {
    index: '04',
    title: 'Ship Chartering & Cargo Broking',
    description:
      'Provide ship chartering, cargo broking, and multimodal logistics services for both domestic and international movement of commodities.',
  },
];

export const BARITE_HIGHLIGHTS = {
  etymology:
    'Derived from the Greek word βαρύς (barys) meaning heavy, Barite consists of Barium Sulfate (BaSO₄) and is the primary mineral source for producing Barium.',
  globalPosition:
    'Globally, India ranks at the top in producing Barite and is the largest supplier of Barite ore to drilling industries worldwide.',
  oreDescription:
    'The most commonly available colour of Barite is grey, which is majorly used in onshore and offshore oil, gas, and drilling industries. Supplied strictly as per the specific gravity requirements of the buyer with 4.20 and 4.10 SG minimum guarantee.',
  powderDescription:
    'Milled and processed to API Spec 13A standards with 4.20 and 4.10 SG minimum guaranteed density, low soluble alkaline earth metals, and controlled particle size distribution for drilling mud formulations.',
};

export const OTHER_MINERALS: MineralProduct[] = [
  {
    id: 'bentonite',
    name: 'Bentonite',
    category: 'Drilling & Oilfield',
    formulaOrType: 'Montmorillonite Clay',
    summary: 'High-swelling viscosity agent for drilling fluids, foundry molding, and civil sealing.',
    applications: 'Oil & gas drilling mud, iron ore pelletizing, foundry',
  },
  {
    id: 'calcite',
    name: 'Calcite',
    category: 'Construction & Metallurgy',
    formulaOrType: 'CaCO₃',
    summary: 'High-purity calcium carbonate supplied in lump and micronized grades.',
    applications: 'Paints, plastics, polymers, construction compounds',
  },
  {
    id: 'feldspar',
    name: 'Feldspar',
    category: 'Ceramics & Glass',
    formulaOrType: 'Potash & Soda Feldspar',
    summary: 'Fluxing aluminosilicate mineral sourced from premier Indian deposits.',
    applications: 'Vitrified tiles, sanitaryware, container & float glass',
  },
  {
    id: 'quartz',
    name: 'Quartz',
    category: 'Ceramics & Glass',
    formulaOrType: 'SiO₂ (High Silica)',
    summary: 'Low-iron crystalline silica processed in crushed lumps, grits, and powder.',
    applications: 'Engineered stone, glass manufacturing, ferro-silicon, ceramics',
  },
  {
    id: 'china-clay',
    name: 'China Clay',
    category: 'Ceramics & Glass',
    formulaOrType: 'Kaolin',
    summary: 'Bright white kaolin clay processed for controlled plasticity and firing whiteness.',
    applications: 'Porcelain, paper coating, rubber, fiberglass',
  },
  {
    id: 'limestone',
    name: 'Limestone',
    category: 'Construction & Metallurgy',
    formulaOrType: 'Calcium Carbonate Rock',
    summary: 'Sized industrial limestone for metallurgical fluxing and clinker production.',
    applications: 'Steel flux, cement manufacturing, flue-gas desulfurization',
  },
  {
    id: 'dolomite',
    name: 'Dolomite',
    category: 'Construction & Metallurgy',
    formulaOrType: 'CaMg(CO₃)₂',
    summary: 'High-magnesia carbonate mineral for refractory and glass batch applications.',
    applications: 'Steel refractories, float glass, agricultural soil conditioning',
  },
  {
    id: 'bauxite',
    name: 'Bauxite',
    category: 'Construction & Metallurgy',
    formulaOrType: 'Aluminium Ore',
    summary: 'Calcined and raw bauxite grades tailored for alumina and refractory kilns.',
    applications: 'Alumina refining, high-alumina refractories, abrasives',
  },
  {
    id: 'vermiculite',
    name: 'Vermiculite',
    category: 'Drilling & Oilfield',
    formulaOrType: 'Hydrous Phyllosilicate',
    summary: 'Exfoliated and raw micaceous mineral for thermal insulation and lost-circulation muds.',
    applications: 'Drilling lost-circulation control, fireproofing, horticulture',
  },
  {
    id: 'cement',
    name: 'Cement (Any Grade)',
    category: 'Construction & Metallurgy',
    formulaOrType: 'OPC / PPC / Oilwell Grades',
    summary: 'Export-grade Portland and specialty cements supplied in big bags or bulk vessels.',
    applications: 'Infrastructure, marine construction, oilwell cementing',
  },
];

export const ORE_POWDER_SPECS: OrePowderSpecRow[] = [
  {
    no: 1,
    property: 'Density',
    unit: 'g/cc',
    sg420: '4.20 Min',
    sg410: '4.10 Min',
  },
  {
    no: 2,
    property: 'Water soluble alkaline earth metal as calcium',
    unit: 'Mg/kg',
    sg420: '200 Max',
    sg410: '200 Max',
  },
  {
    no: 3,
    property: 'Water soluble total sulfide',
    unit: 'Mg/l',
    sg420: '70 Max',
    sg410: '70 Max',
  },
  {
    no: 4,
    property: 'Water soluble total carbonate',
    unit: 'Mg/l',
    sg420: '3000 Max',
    sg410: '3000 Max',
  },
  {
    no: 5,
    property: 'Methylene blue test',
    unit: 'meq/100g',
    sg420: '0.5 Max',
    sg410: '0.5 Max',
  },
  {
    no: 6,
    property: 'pH',
    unit: '—',
    sg420: '10 Max',
    sg410: '10 Max',
  },
  {
    no: 7,
    property: 'Mercury',
    unit: 'PPM',
    sg420: '1 Max',
    sg410: '1 Max',
  },
  {
    no: 8,
    property: 'Cadmium',
    unit: 'PPM',
    sg420: '3 Max',
    sg410: '3 Max',
  },
  {
    no: 9,
    property: 'Barium sulfate content',
    unit: 'Wt. Percent',
    sg420: '90 Min',
    sg410: '85 Min',
  },
  {
    no: 10,
    property: 'Moisture content',
    unit: 'Wt. Percent',
    sg420: '2 Max',
    sg410: '2 Max',
  },
  {
    no: 11,
    property: 'Lump size (only for ore)',
    unit: 'mm',
    sg420: '200 Max',
    sg410: '200 Max',
  },
];

export const POWDER_SUPPLY_RESULTS: PowderSupplyResultRow[] = [
  {
    no: 1,
    property: 'Density',
    unit: 'Sg. Min',
    sg420Req: '4.2',
    sg420Result: '4.22',
    sg410Req: '4.1',
    sg410Result: '4.12',
  },
  {
    no: 2,
    property: 'Soluble alkaline earth metal as calcium',
    unit: 'Mg/kg. Max',
    sg420Req: '250',
    sg420Result: '71.4',
    sg410Req: '250',
    sg410Result: '71.4',
  },
  {
    no: 3,
    property: 'Residue greater than 75 micron',
    unit: '% Wt Max',
    sg420Req: '3',
    sg420Result: '2.1',
    sg410Req: '3',
    sg410Result: '2.1',
  },
  {
    no: 4,
    property: 'Particles less than 6 micron',
    unit: '% Wt Max',
    sg420Req: '30',
    sg420Result: '22.8',
    sg410Req: '30',
    sg410Result: '24.59',
  },
];

export const PACKING_AND_SHIPPING = {
  packing: [
    'New 1.50 MT Big Bags (FIBC Jumbo Bags)',
    "Customized bag capacities and branding as per buyer's requirements",
  ],
  shipments: [
    "20' HD FCL Loads: 27 MTs (18 × 1.50 MT Big Bags per FCL)",
    "Break-bulk vessels depending on order volume and buyer's requirements",
  ],
};
