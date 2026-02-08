import { SectionId } from './types';

export const WEDDING_DETAILS = {
  coupleNames: "Oliver & Amelia",
  date: "October 14, 2024",
  dateISO: "2024-10-14T15:00:00",
  venue: "The Whispering Pines Forest Hall",
  address: "123 Woodland Drive, Emerald Valley, CA",
  schedule: [
    { time: "3:00 PM", event: "Ceremony in the Grove" },
    { time: "4:30 PM", event: "Cocktail Hour & Lawn Games" },
    { time: "6:00 PM", event: "Rustic Feast & Toasts" },
    { time: "8:00 PM", event: "Dancing Under the Stars" },
  ],
  dressCode: "Rustic Formal (Earth tones encouraged, comfortable shoes for grass recommended)",
  registryLink: "#",
};

export const NAV_LINKS = [
  { label: 'Home', href: `#${SectionId.HOME}` },
  { label: 'Details', href: `#${SectionId.DETAILS}` },
  { label: 'RSVP', href: `#${SectionId.RSVP}` },
];

export const MOCK_API_DELAY = 1500;