const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

// 1. PREP: Middlewre
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); 

// 2. THE FRONT DOOR: Serve your website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitcoach_rebrand_ai_workouts.html'));
});

// 3. SET UP AI: Using the Environment Variable for security
const genAI = new GoogleGenerativeAI(process.env.API_KEY || "YOUR_LOCAL_KEY_HERE");

// 4. THE AI KITCHEN: Processing the fitness plans
app.post('/api/generate', async (req, res) => {
    try {
        const clientData = req.body;
        
        const systemInstruction = `You are a supportive, holistic fitness guide and former professional soccer player. 
        Your coaching philosophy is organic, natural, and built on real-world athletic experience. 
        A client has provided you with their fitness goals and background. 
        Design a highly structured, week-long training protocol that balances gym workouts, movement, and healthy habits. 
        Speak like a mentor who genuinely loves training and healthy living. 
        Focus on sustainable progress, listening to the body, mental well-being, and enjoying the process. 
        Do not use overly clinical jargon or aggressive "drill sergeant" language. Keep it encouraging, authentic, and grounded.`;

        const prompt = `${systemInstruction}\n\nHere is the client's information:\nName: ${clientData.name}\nGoal: ${clientData.goal}\nDetails: ${clientData.details}\n\nPlease generate their custom plan.`;

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        res.json({ plan: responseText });

    } catch (error) {
        console.error("Error generating plan:", error);
        res.status(500).json({ error: "Failed to generate plan." });
    }
});

// 5. THE ENGINE: Start the server (CRITICAL FOR RENDER)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is live on port ${PORT}`);
});