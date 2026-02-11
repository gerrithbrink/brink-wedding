import React from 'react';
import { SectionId } from '../types';

export const GiftRegistry: React.FC = () => {
  return (
    <section id={SectionId.REGISTRY} className="py-24 bg-rustic-cream relative scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-10">

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <span className="block w-16 h-px bg-sage-300"></span>
            <svg className="w-6 h-6 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <span className="block w-16 h-px bg-sage-300"></span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-sage-600 mb-4">Gift Registry</h2>
            <p className="text-sage-800/80 leading-relaxed font-light max-w-xl mx-auto">
              Your presence at our celebration is the greatest gift of all.
              We are incredibly fortunate to already have everything we need to start our life together —
              well, <em>almost</em> everything.
            </p>
          </div>

          {/* Microwave message card */}
          <div className="bg-rustic-rose/30 border border-rustic-rose rounded-sm p-8 shadow-sm">
            <div className="flex justify-center mb-4">
              <span className="text-4xl" role="img" aria-label="microwave">🍽️</span>
            </div>
            <p className="text-sage-800 leading-relaxed font-light">
              There is, however, one thing our kitchen is still missing — a trusty microwave!
              If you'd like to contribute towards this, we would be truly grateful.
              Please use the banking details below to make a contribution.
              No amount is too small, and no gift is expected — your love and company mean the world to us.
            </p>
          </div>

          <p className="text-sage-600 font-light italic text-sm">
            P.S. Any extra funds may or may not find their way into the honeymoon fund… we promise to send photos. 🌴✈️
          </p>

          {/* Banking details card */}
          <div className="bg-sage-50 border border-sage-200 rounded-sm p-8 shadow-sm text-left max-w-md mx-auto">
            <h3 className="text-xl font-serif text-rustic-brown mb-5 text-center">Banking Details</h3>
            <dl className="space-y-3 text-sage-800">
              <div className="flex justify-between items-baseline">
                <dt className="text-sm font-bold uppercase tracking-wide text-sage-600">Bank</dt>
                <dd className="font-light">Standard Bank</dd>
              </div>
              <div className="border-t border-sage-200"></div>

              <div className="flex justify-between items-baseline">
                <dt className="text-sm font-bold uppercase tracking-wide text-sage-600">Branch</dt>
                <dd className="font-light">Graaff-Reinet</dd>
              </div>
              <div className="border-t border-sage-200"></div>

              <div className="flex justify-between items-baseline">
                <dt className="text-sm font-bold uppercase tracking-wide text-sage-600">Branch Code</dt>
                <dd className="font-light">116</dd>
              </div>
              <div className="border-t border-sage-200"></div>

              <div className="flex justify-between items-baseline">
                <dt className="text-sm font-bold uppercase tracking-wide text-sage-600">Account Holder</dt>
                <dd className="font-light">Miss Sara SA Kingwill</dd>
              </div>
              <div className="border-t border-sage-200"></div>

              <div className="flex justify-between items-baseline">
                <dt className="text-sm font-bold uppercase tracking-wide text-sage-600">Account No.</dt>
                <dd className="font-light tracking-wide">10 12 725 012 1</dd>
              </div>
              <div className="border-t border-sage-200"></div>

              <div className="flex justify-between items-baseline">
                <dt className="text-sm font-bold uppercase tracking-wide text-sage-600">Account Type</dt>
                <dd className="font-light">Current</dd>
              </div>
            </dl>
          </div>

          {/* Closing thank-you */}
          <p className="text-sage-500 font-light italic text-sm">
            Thank you for your generosity and kindness. We can't wait to celebrate with you!
          </p>


        </div>
      </div>
    </section>
  );
};
