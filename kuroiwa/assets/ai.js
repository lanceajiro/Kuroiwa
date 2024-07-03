const axios = require('axios');

async function getAIResponse(input, chatType) {
    try {
        // If it's a group chat, check for specific keywords
        if (chatType !== 'private') {
            const containsQuestion = /(\b(what|how|did|where|who)\b|ai|wataru|lance)/i.test(input);
            if (!containsQuestion) {
                return null;
            }
        }

        // Fetch AI response
        const response = await axios.get(`https://joshweb.click/gpt4?prompt=${encodeURIComponent(input)}&uid=100`);
        return response.data.gpt4;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return 'Sorry, I couldn\'t fetch a response at the moment.';
    }
}

module.exports = { getAIResponse };
