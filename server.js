const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); 

// THE FRONT DOOR: This MUST match your specific file name on GitHub
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitcoach_rebrand_ai_workouts.html'));
});

// Use the Environment Variable (for Render) or fallback to your key (for local testing)
const apiKey = process.env.API_KEY || "YOUR_KEY_HERE"; 
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/api/generate', async (req, res) => {
    try {
        const clientData = req.body;
        const systemInstruction = `You are a supportive, holistic fitness guide...`; // Your prompt here
        const prompt = `${systemInstruction}\n\nName: ${clientData.name}\nGoal: ${clientData.goal}\nDetails: ${clientData.details}`;

        // FIX: Changed model to 1.5-flash (2.5 doesn't exist yet)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        res.json({ plan: responseText });

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "Failed to generate plan." });
    }
});

// THE ENGINE: Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});