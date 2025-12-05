export interface Service {
  id: string;
  number: string;
  title: string;
  description: {
    line1: string;
    line2: string;
  };
  features: string[];
  image: string | undefined;
}

export interface ServicesSchema {
  services: Service[];
}

export const SERVICES_DATA = [
  { id: '1', number: '01', key: 'websites' },
  { id: '2', number: '02', key: 'apps' },
  { id: '3', number: '03', key: 'integrations' },
  { id: '4', number: '04', key: 'ai' },
] as const;

export type ServiceKey = (typeof SERVICES_DATA)[number]['key'];