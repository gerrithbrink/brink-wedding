import React, { useState } from 'react';
import { SectionId, GuestRSVP } from '../types';
import { submitRSVP } from '../services/api';

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<GuestRSVP>({
    firstName: '',
    lastName: '',
    email: '',
    attending: 'yes',
    dietaryRestrictions: '',
    songRequest: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitRSVP(formData);
      setStatus('success');
      // Reset form optionally, or just leave success message
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage("Something went wrong saving your RSVP. Please try again.");
    }
  };

  if (status === 'success') {
    return (
      <section id={SectionId.RSVP} className="py-24 bg-sage-500 text-rustic-cream px-6 scroll-mt-28">
        <div className="max-w-xl mx-auto text-center space-y-6 animate-fade-in-up">
          <div className="w-20 h-20 bg-rustic-cream text-sage-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-4xl font-serif">Thank You!</h2>
          <p className="text-xl font-light">
            We have received your RSVP. We can't wait to celebrate with you!
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-8 px-6 py-2 border border-rustic-cream hover:bg-rustic-cream hover:text-sage-600 transition-colors"
          >
            Submit Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id={SectionId.RSVP} className="py-24 bg-sage-500 relative scroll-mt-28">
      <div className="absolute inset-0 bg-forest-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-rustic-cream shadow-2xl rounded-sm overflow-hidden">
          <div className="bg-rustic-pink/30 p-8 text-center border-b border-sage-200">
            <h2 className="text-3xl md:text-4xl font-serif text-sage-800">R.S.V.P.</h2>
            <p className="text-sage-600 mt-2 font-light">Kindly respond by April 1st</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-sage-700 uppercase tracking-wide">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-sage-50 border border-sage-200 p-3 focus:outline-none focus:border-sage-500 text-sage-900 placeholder-sage-300"
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-sage-700 uppercase tracking-wide">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-sage-50 border border-sage-200 p-3 focus:outline-none focus:border-sage-500 text-sage-900 placeholder-sage-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-sage-700 uppercase tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-sage-50 border border-sage-200 p-3 focus:outline-none focus:border-sage-500 text-sage-900 placeholder-sage-300"
                placeholder="jane.doe@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-sage-700 uppercase tracking-wide">Will you be attending?</label>
              <select
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                className="w-full bg-sage-50 border border-sage-200 p-3 focus:outline-none focus:border-sage-500 text-sage-900"
              >
                <option value="yes">Joyfully Accepts</option>
                <option value="no">Regretfully Declines</option>
              </select>
            </div>

            {formData.attending !== 'no' && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-sage-700 uppercase tracking-wide">Dietary Restrictions</label>
                  <textarea
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows={2}
                    className="w-full bg-sage-50 border border-sage-200 p-3 focus:outline-none focus:border-sage-500 text-sage-900 placeholder-sage-300"
                    placeholder="Gluten-free, Vegan, Nut allergy, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-sage-700 uppercase tracking-wide">Song Requests</label>
                  <p className="text-xs text-sage-500">I promise to dance if you play...</p>
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    className="w-full bg-sage-50 border border-sage-200 p-3 focus:outline-none focus:border-sage-500 text-sage-900 placeholder-sage-300"
                    placeholder="Artist - Song Name"
                  />
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 text-sm border border-red-100 rounded">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 bg-sage-600 hover:bg-sage-700 text-rustic-cream font-serif text-xl uppercase tracking-widest transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
            </button>
          </form>
        </div >
      </div >
    </section >
  );
};