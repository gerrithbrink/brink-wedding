import { SectionId } from './types';

export const WEDDING_DETAILS = {
  coupleNames: "Gerrit & Sara",
  date: "9 May 2026",
  dateISO: "2026-05-09T15:00:00",
  venue: "Beyond the Moon",
  address: "Hoekville, South Africa",
  schedule: [
    { time: "3:00 PM", event: "Ceremony in the Grove" },
    { time: "4:30 PM", event: "Cocktail Hour & Lawn Games" },
    { time: "6:00 PM", event: "Rustic Feast & Toasts" },
    { time: "8:00 PM", event: "Dancing Under the Stars" },
  ],
  dressCode: "Semi-Formal",
  images: {
    hero: "/images/hero-bg1.jpg",
    details1: "/images/details_1.jpg",
    details2: "/images/details_2.jpg",
  },
  registryLink: "#",
};

export const NAV_LINKS = [
  { label: 'Home', href: `#${SectionId.HOME}` },
  { label: 'Details', href: `#${SectionId.DETAILS}` },
  { label: 'RSVP', href: `#${SectionId.RSVP}` },
];

export const MOCK_API_DELAY = 1500;