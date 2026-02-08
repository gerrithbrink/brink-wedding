import { GoogleGenAI, Chat } from "@google/genai";
import { WEDDING_DETAILS } from "../constants";

let chatSession: Chat | null = null;

// Initialize the Gemini Client
// In a production build, ensure process.env.API_KEY is available via Cloudflare Pages environment variables.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Wedding Assistant for ${WEDDING_DETAILS.coupleNames}'s wedding.
Your tone should be polite, warm, helpful, and slightly rustic/whimsical.

Key Information:
- Date: ${WEDDING_DETAILS.date}
- Venue: ${WEDDING_DETAILS.venue}
- Address: ${WEDDING_DETAILS.address}
- Dress Code: ${WEDDING_DETAILS.dressCode}
- Schedule: ${WEDDING_DETAILS.schedule.map(s => `${s.time}: ${s.event}`).join(', ')}

Rules:
1. Answer questions about the wedding details accurately based on the info above.
2. If asked about RSVP, direct them to the RSVP form on the website.
3. If asked about dietary restrictions, assure them the couple takes them seriously and to note them in the RSVP.
4. Keep answers concise (under 3 sentences preferably).
5. Do not hallucinate details not provided. If unsure, ask them to contact the couple directly.
`;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently sleeping (API Key missing). Please tell the developer to wake me up!";
  }

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result = await chatSession.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I didn't catch that. Could you whisper it again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to the forest network right now. Please try again later.";
  }
};