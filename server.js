const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

// 1. PREP: Tell the server how to handle data (Middleware)
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Tells server to look for index.html here

// 2. THE FRONT DOOR: Serve your website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. THE AI KITCHEN: Your existing app.post('/api/generate'...) goes here
// ... (the rest of your code)

// Set up the Google AI 
const genAI = new GoogleGenerativeAI("AIzaSyA93S-kbm2HxoRqJNt9I3KxWCOINYG3Oxw");

app.post('/api/generate', async (req, res) => {
    try {
        const clientData = req.body;
        
        // The AI's Brain (The System Prompt)
        const systemInstruction = `You are a supportive, holistic fitness guide and former professional soccer player. 
        Your coaching philosophy is organic, natural, and built on real-world athletic experience. 
        A client has provided you with their fitness goals and background. 
        Design a highly structured, week-long training protocol that balances gym workouts, movement, and healthy habits. 
        Speak like a mentor who genuinely loves training and healthy living. 
        Focus on sustainable progress, listening to the body, mental well-being, and enjoying the process. 
        Do not use overly clinical jargon or aggressive "drill sergeant" language. Keep it encouraging, authentic, and grounded.`;

        const prompt = `${systemInstruction}\n\nHere is the client's information:\nName: ${clientData.name}\nGoal: ${clientData.goal}\nDetails: ${clientData.details}\n\nPlease generate their custom plan.`;

        // Using the active Gemini 2.5 Flash model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Send the plan back to the website
        res.json({ plan: responseText });

    } catch (error) {
        console.error("Error generating plan:", error);
        res.status(500).json({ error: "Failed to generate plan." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is live on port ${PORT}`);
});