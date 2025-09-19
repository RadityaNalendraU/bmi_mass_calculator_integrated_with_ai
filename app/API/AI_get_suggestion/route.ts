import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

// Initialize the Replicate client with your API token
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN as string,
});

// API route handler for POST requests
export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body to get the user's health metrics
    const { bmi, category, height, weight } = await req.json();

    // Validate that all required data is present
    if (!bmi || !category || !height || !weight) {
      return NextResponse.json(
        { detail: "Missing required fields: bmi, category, height, weight" },
        { status: 400 }
      );
    }

    // Construct the detailed prompt for the AI model
    const prompt = `
      Generate a concise response in under 600 characters.
      You are a helpful and encouraging fitness and nutrition assistant.
      A user has provided their health metrics. Based on their BMI of ${bmi} (which is categorized as ${category}), height of ${height} cm, and weight of ${weight} kg, provide a concise and actionable set of suggestions.
      Organize your response into two sections using Markdown headings: '### **-Workout Suggestions' and '### **-Meal Plan'.
      The advice should be practical for a beginner.
    `;

    // Call the Replicate API to run the IBM Granite model
    const output = await replicate.run("ibm-granite/granite-3.3-8b-instruct", {
      input: {
        prompt: prompt,
        max_new_tokens: 600, // Increased token limit for more detailed advice
      },
    });

    // Return the model's output as a JSON response
    return NextResponse.json({ output }, { status: 200 });

  } catch (error) {
    // Log any errors and return a 500 Internal Server Error
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ detail: errorMessage }, { status: 500 });
  }
}