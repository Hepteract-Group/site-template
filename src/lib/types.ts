export interface SiteContent {
  business: {
    name: string;
    tagline: string;
    description?: string;
    phone: string;
    email?: string;
    address?: string;
    category: string;
    location: {
      city: string;
      postcode: string;
      neighbourhood?: string;
      region?: string;
    };
    rating?: number;
    reviewCount?: number;
  };
  hero: {
    headline: string;
    subheadline?: string;
    ctaText: string;
    ctaHref: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  about: {
    headline: string;
    body: string;
    values?: string[];
  };
  contact: {
    formEnabled?: boolean;
    mapEnabled?: boolean;
  };
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
  theme?: {
    primaryColor?: string;
    accentColor?: string;
    font?: string;
  };
  meta?: {
    generatedAt?: string;
    leadId?: string;
    placeId?: string;
    deployedUrl?: string;
  };
}
