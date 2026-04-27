const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); 

// Front Door
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitcoach_rebrand_ai_workouts.html'));
});

// Setup AI
const apiKey = process.env.API_KEY; 
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/api/generate', async (req, res) => {
    try {
        const clientData = req.body;
        
        // Use the basic model that's available on all tiers
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        
        const prompt = `You are a fitness coach. Design a workout plan for ${clientData.name} who wants to ${clientData.goal}. Details: ${clientData.details}`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        res.json({ plan: responseText });

    } catch (error) {
        // This will print the specific error in your VS Code Terminal
        console.error("DETAILED ERROR:", error);
        res.status(500).json({ error: "Check terminal for error details." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
