export interface GuestRSVP {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  attending: 'yes' | 'no' | 'maybe';
  dietaryRestrictions: string;
  songRequest: string;
  plusOne: boolean;
  plusOneName?: string;
}

export enum SectionId {
  HOME = 'home',
  DETAILS = 'details',
  RSVP = 'rsvp',
  QA = 'qa'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}