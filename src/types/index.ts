export type FirearmCategory =
  | 'Pistol'
  | 'Revolver'
  | 'Rifle'
  | 'Shotgun'
  | 'Submachine Gun'
  | 'Machine Gun';

export type ProductionStatus = 'Active' | 'Discontinued' | 'Historic' | 'Prototype';

export interface FirearmVariant {
  name: string;
  description: string;
  year?: number;
}

export interface Firearm {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  manufacturer: string;
  designer: string;
  country: string;
  yearIntroduced: number;
  productionStart: number;
  productionEnd?: number;
  status: ProductionStatus;
  category: FirearmCategory;
  subtype: string;
  family: string;
  action: string;
  operatingSystem: string;
  caliber: string;
  feedSystem: string;
  capacity: string;
  barrelLength: string;
  overallLength: string;
  weight: string;
  sights: string;
  overview: string;
  history: string;
  serviceUse: string;
  variants: FirearmVariant[];
  tags: string[];
  images: string[];
  relatedIds: string[];
  sourceNotes: string[];
  confidence: 'High' | 'Medium' | 'Low';
  lastReviewed: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  slug: string;
  country: string;
  founded: number;
  yearsActive: string;
  overview: string;
  notableModelIds: string[];
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  summary: string;
  era: string;
  firearmIds: string[];
  image: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  related?: string[];
}

export interface BrowseFilters {
  category: string[];
  manufacturer: string[];
  country: string[];
  era: string[];
  caliber: string[];
  action: string[];
  status: string[];
}

export type SortKey = 'relevance' | 'name-asc' | 'year-desc' | 'year-asc';
