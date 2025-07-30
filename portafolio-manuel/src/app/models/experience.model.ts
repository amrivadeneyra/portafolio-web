export interface Experience {
  readonly company: string;
  readonly position: string;
  readonly period: string;
  readonly location: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly responsibilities: readonly string[];
  readonly logo?: string;
} 