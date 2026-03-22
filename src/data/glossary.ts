import type { GlossaryTerm } from '../types';

export const glossaryTerms: GlossaryTerm[] = [
  { id: 'action', term: 'Action', definition: 'The mechanism by which a firearm loads, fires, and ejects cartridges.' },
  { id: 'blowback', term: 'Blowback', definition: 'Operating system using rearward force from firing to cycle the action.' },
  { id: 'caliber', term: 'Caliber', definition: 'Nominal internal diameter of a barrel, often tied to cartridge designation.' },
  { id: 'headspace', term: 'Headspace', definition: 'Distance from bolt face to datum point in chamber when action is closed.' },
  { id: 'striker-fired', term: 'Striker-fired', definition: 'Ignition system where a spring-driven striker hits the primer directly.' },
  { id: 'gas-system', term: 'Gas system', definition: 'Mechanism diverting propellant gases to cycle the action in self-loading firearms.' },
  { id: 'gpmg', term: 'General-purpose machine gun', definition: 'Machine gun designed for both sustained fire and multi-role mounting applications.', related: ['Machine Gun', 'Belt-fed'] },
  { id: 'sight-radius', term: 'Sight radius', definition: 'Distance between front and rear iron sights affecting aiming precision.' }
];
