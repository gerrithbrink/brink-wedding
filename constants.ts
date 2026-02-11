import { SectionId } from './types';

export const WEDDING_DETAILS = {
  coupleNames: "Gerrit & Sara",
  date: "9 May 2026",
  dateISO: "2026-05-09T15:00:00",
  venue: "Beyond the Moon",
  address: "Hoekville, South Africa",
  schedule: "Stay Tuned...",
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
  { label: 'Our Journey', href: `#${SectionId.STORY}` },
  { label: 'RSVP', href: `#${SectionId.RSVP}` },
  { label: 'Registry', href: `#${SectionId.REGISTRY}` },
];

export const MOCK_API_DELAY = 1500;