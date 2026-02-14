import React from 'react';
import { WEDDING_DETAILS } from '../constants';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(SectionId.RSVP);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={SectionId.HOME}
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden scroll-mt-28"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={WEDDING_DETAILS.images.hero}
          alt="Forest Background"
          className="w-full h-full object-cover object-[50%_35%] md:object-[80%_80%]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://picsum.photos/id/1047/1920/1080";
          }}
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-sage-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-rustic-cream space-y-6 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-xl md:text-2xl tracking-[0.2em] uppercase font-light text-rustic-pink">
          We are getting married
        </p>
        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-wide text-rustic-cream drop-shadow-lg">
          {WEDDING_DETAILS.coupleNames}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl font-light tracking-wider mt-4">
          <span>{WEDDING_DETAILS.date}</span>
          <span className="hidden md:inline text-sage-300">•</span>
          <span>{WEDDING_DETAILS.venue}</span>
        </div>

        <div className="pt-8">
          <a
            href={`#${SectionId.RSVP}`}
            onClick={handleScroll}
            className="inline-block px-8 py-3 border border-rustic-cream/50 text-rustic-cream hover:bg-rustic-cream hover:text-sage-800 transition-all duration-300 font-serif text-lg tracking-widest rounded-sm uppercase backdrop-blur-sm cursor-pointer"
          >
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
};