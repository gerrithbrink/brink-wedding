import React from 'react';
import { WEDDING_DETAILS } from '../constants';
import { SectionId } from '../types';

export const InfoSection: React.FC = () => {
  return (
    <section id={SectionId.DETAILS} className="py-20 px-6 bg-rustic-cream text-sage-900 scroll-mt-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Text Details */}
        <div className="space-y-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-600 mb-6">The Details</h2>
            <p className="text-lg text-sage-800/80 leading-relaxed font-light">
              We invite you to join us in the heart of the forest for a rustic celebration of love, nature, and new beginnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-rustic-rose/30 p-6 border border-rustic-rose rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif text-rustic-brown mb-2">When</h3>
              <p className="text-sage-900">{WEDDING_DETAILS.date}</p>
              <p className="text-sm text-sage-600 mt-1">Ceremony begins promptly at 3:00 PM</p>
            </div>

            <div className="bg-rustic-rose/30 p-6 border border-rustic-rose rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif text-rustic-brown mb-2">Where</h3>
              <p className="text-sage-900">{WEDDING_DETAILS.venue}</p>
              <p className="text-sm text-sage-600 mt-1">{WEDDING_DETAILS.address}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-sage-600 border-b border-sage-200 pb-2">Schedule</h3>
            <ul className="space-y-4">
              {WEDDING_DETAILS.schedule.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sage-800">
                  <span className="font-bold text-rustic-brown w-20 text-right">{item.time}</span>
                  <span className="w-px h-4 bg-sage-300"></span>
                  <span className="font-light">{item.event}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rustic-orange/30 p-6 rounded-sm border border-rustic-orange">
            <h3 className="text-xl font-serif text-sage-800 mb-2">Dress Code</h3>
            <p className="text-sage-800 font-light italic">
              {WEDDING_DETAILS.dressCode}
            </p>
          </div>
        </div>

        {/* Right: Images */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <img
            src={WEDDING_DETAILS.images.details1}
            alt="Forest Detail"
            className="w-full h-64 md:h-80 object-cover rounded-t-full shadow-lg mt-12"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://picsum.photos/id/1028/600/800";
            }}
          />
          <img
            src={WEDDING_DETAILS.images.details2}
            alt="Rustic Hall"
            className="w-full h-64 md:h-80 object-cover rounded-b-full shadow-lg mb-12"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://picsum.photos/id/216/600/800";
            }}
          />
        </div>

      </div>
    </section>
  );
};