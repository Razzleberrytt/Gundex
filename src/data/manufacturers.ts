import type { Manufacturer } from '../types';

export const manufacturers: Manufacturer[] = [
  { id: 'glock', name: 'Glock Ges.m.b.H.', slug: 'glock', country: 'Austria', founded: 1963, yearsActive: '1963–present', overview: 'Austrian manufacturer known for polymer-frame service pistols and minimalist design language.', notableModelIds: ['glock-17'] },
  { id: 'colt', name: 'Colt', slug: 'colt', country: 'United States', founded: 1855, yearsActive: '1855–present', overview: 'Historic American arms manufacturer with major military and civilian model lineages.', notableModelIds: ['colt-python', 'm16a1'] },
  { id: 'beretta', name: 'Beretta', slug: 'beretta', country: 'Italy', founded: 1526, yearsActive: '1526–present', overview: 'One of the oldest active manufacturers, producing military and sporting arms.', notableModelIds: ['beretta-92fs'] },
  { id: 'fn', name: 'FN Herstal', slug: 'fn-herstal', country: 'Belgium', founded: 1889, yearsActive: '1889–present', overview: 'Belgian arms manufacturer recognized for battle rifles, machine guns, and sidearms.', notableModelIds: ['fn-fal', 'm240'] },
  { id: 'hk', name: 'Heckler & Koch', slug: 'heckler-koch', country: 'Germany', founded: 1949, yearsActive: '1949–present', overview: 'German small arms producer with strong police and military portfolio.', notableModelIds: ['mp5'] },
  { id: 'remington', name: 'Remington Arms', slug: 'remington-arms', country: 'United States', founded: 1816, yearsActive: '1816–present', overview: 'Long-established U.S. maker of sporting and service shotguns and rifles.', notableModelIds: ['remington-870'] }
];
