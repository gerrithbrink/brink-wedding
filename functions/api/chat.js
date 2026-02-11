import { GoogleGenAI } from "@google/genai";
import { WEDDING_DETAILS } from "../../constants";

const SYSTEM_INSTRUCTION = `
You are the AI Wedding Assistant for ${WEDDING_DETAILS.coupleNames}'s wedding.
Your tone should be polite, warm, helpful, and slightly rustic/whimsical.

Key Information:
- Date: ${WEDDING_DETAILS.date}
- Venue: ${WEDDING_DETAILS.venue}
- Address: ${WEDDING_DETAILS.address}
- Dress Code: ${WEDDING_DETAILS.dressCode}
- Schedule: ${Array.isArray(WEDDING_DETAILS.schedule) ? WEDDING_DETAILS.schedule.map(s => `${s.time}: ${s.event}`).join(', ') : WEDDING_DETAILS.schedule}

Rules:
1. Answer questions about the wedding details accurately based on the info above.
2. If asked about RSVP, direct them to the RSVP form on the website.
3. If asked about dietary restrictions, assure them the couple takes them seriously and to note them in the RSVP.
4. Keep answers concise (under 3 sentences preferably).
5. Do not hallucinate details not provided. If unsure, ask them to contact the couple directly.
`;

export async function onRequestPost(context) {
  try {
    const { message } = await context.request.json();

    // In Cloudflare Pages Functions, environment variables are available on context.env
    // Ensure you have set this using 'npx wrangler pages secret put GEMINI_API_KEY'
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY.");
      return new Response(JSON.stringify({ text: "I'm currently sleeping (Server Configuration Error). Please tell the developer to check the API Key!" }), {
        headers: { "Content-Type": "application/json" },
        status: 500
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Using gemini-3-flash-preview as recommended for basic text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return new Response(JSON.stringify({ text: response.text }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (e) {
    console.error("Gemini API Error:", e);
    return new Response(JSON.stringify({ text: "I'm having a bit of trouble connecting to the forest network right now. Please try again later." }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}