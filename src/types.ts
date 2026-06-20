export interface Garden {
  id: string;
  name: string;
  location: string;
  description: string;
  detailedDescription?: string;
  teaTypes: string[];
  production: string;
  productionDetails?: string;
  emoji: string;
}

export interface PartnerGarden {
  id: string;
  name: string;
  location: string;
  teaTypes: string[];
  description: string;
  emoji: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  icon: string;
}

export type PageId =
  | "home"
  | "about"
  | "gardens"
  | "partners"
  | "services"
  | "sample-request"
  | "contact";

export interface SampleRequest {
  name: string;
  phone: string;
  email: string;
  address: string;
  sampleName: string;
  grade: string;
  priceRange?: string;
  preferredLocationMark?: string;
  notes: string;
}

export interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
}
