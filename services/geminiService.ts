export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data.text || "I didn't quite catch that.";
  } catch (error) {
    console.error("Chat Service Error:", error);
    return "I'm having a bit of trouble connecting to the forest network right now. Please try again later.";
  }
};