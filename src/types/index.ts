export interface Plan {
  id: string;
  name: string;
  tagline: string;
  ram: number; // in GB
  vCpu: number;
  disk: string;
  backupSlots: number;
  monthlyPrice: number;
  isPopular?: boolean;
  recommendedPlayers: string;
  features: string[];
}

export interface BotPlan {
  id: string;
  name: string;
  ram: string;
  vCpu: string;
  disk: string;
  monthlyPrice: number;
  description: string;
  features: string[];
}

export interface DatacenterLocation {
  id: string;
  city: string;
  country: string;
  region: string;
  testIp: string;
  basePing: number; // simulated base ping ms
  flag: string;
}

export interface ModItem {
  id: string;
  name: string;
  category: 'Performance' | 'Administration' | 'World' | 'Crossplay';
  description: string;
  installed: boolean;
  downloads: string;
}
