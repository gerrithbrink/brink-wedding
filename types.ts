export interface GuestRSVP {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  attending: 'yes' | 'no' | 'maybe';
  dietaryRestrictions: string;
  songRequest: string;
}

export enum SectionId {
  HOME = 'home',
  DETAILS = 'details',
  RSVP = 'rsvp',
  QA = 'qa',
  REGISTRY = 'registry',
  STORY = 'story'
}
