import { GoogleGenAI } from "@google/genai";

export const getMangaRecommendations = async (userQuery: string, apiKey: string) => {
  try {
    // Initialize the client with the provided API key
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      You are an expert "Manga Sommelier" for a premium manga website called Komorebi.
      Recommend 3 manga titles based on this user request: "${userQuery}".
      
      If the request is vague, recommend trending high-quality seinen or psychological series.
      For each recommendation, provide a title, a short 1-sentence description, and a matching genre.
      
      Return the response in valid JSON format as an array of objects with keys: "title", "description", "genre".
      Do not wrap in markdown code blocks. Just raw JSON.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) return [];

    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [
      { title: "Berserk", description: "A dark fantasy masterpiece about fate and resilience.", genre: "Dark Fantasy" },
      { title: "Vagabond", description: "The journey of Miyamoto Musashi seeking enlightenment through the sword.", genre: "Historical" },
      { title: "Oyasumi Punpun", description: "A surreal, psychological coming-of-age story.", genre: "Psychological" }
    ];
  }
};