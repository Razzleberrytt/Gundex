import { firearms } from './firearms';

export const categories = Array.from(new Set(firearms.map((f) => f.category))).sort();
export const countries = Array.from(new Set(firearms.map((f) => f.country))).sort();
export const calibers = Array.from(new Set(firearms.map((f) => f.caliber))).sort();
export const actions = Array.from(new Set(firearms.map((f) => f.action))).sort();
export const statuses = Array.from(new Set(firearms.map((f) => f.status))).sort();
export const manufacturerNames = Array.from(new Set(firearms.map((f) => f.manufacturer))).sort();

export const eras = ['Pre-1900', '1900-1945', '1946-1990', '1991-Present'];

export const getEraFromYear = (year: number) => {
  if (year < 1900) return 'Pre-1900';
  if (year <= 1945) return '1900-1945';
  if (year <= 1990) return '1946-1990';
  return '1991-Present';
};
