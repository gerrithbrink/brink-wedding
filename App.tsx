import React from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { InfoSection } from './components/InfoSection';
import { Timeline } from './components/Timeline';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { GiftRegistry } from './components/GiftRegistry';
import { WeddingAI } from './components/WeddingAI';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-rustic-cream selection:bg-rustic-pink selection:text-sage-900">
      <Navigation />

      <main>
        <Hero />
        <InfoSection />
        <Timeline />
        <RSVPForm />
        <GiftRegistry />
      </main>

      <Footer />
      <WeddingAI />
    </div>
  );
};

export default App;