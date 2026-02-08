import { GuestRSVP } from '../types';

export const submitRSVP = async (data: GuestRSVP): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/guests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit RSVP');
    }
    
    return {
      success: true,
      message: "Thank you! Your RSVP has been saved to our guest list."
    };
  } catch (e) {
    console.error("API Error:", e);
    throw e;
  }
};