import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
