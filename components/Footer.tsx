import React from 'react';
import { WEDDING_DETAILS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-900 text-sage-100 py-12 text-center">
      <div className="container mx-auto px-4 space-y-4">
        <h3 className="font-serif text-2xl">{WEDDING_DETAILS.coupleNames}</h3>
        <p className="font-light text-sm tracking-widest opacity-70">
          {WEDDING_DETAILS.date} • {WEDDING_DETAILS.venue}
        </p>
        <div className="pt-8 border-t border-sage-800 w-1/2 mx-auto">
          <p className="text-xs text-sage-400">
            Made with love for the happy couple.
          </p>
        </div>
      </div>
    </footer>
  );
};