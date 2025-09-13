import axios from 'axios';

const getAIMessage = async (message, sessionId) => {
    let payload;

    if (sessionId){
        payload = { 
            sessionId: sessionId,
            message: {content: message}
        }
    } else {
        payload = { 
            message: {content: message}
        }
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    const aiMessage = await axios.post('https://maitreyai.com/__apigw__/api/v1/chat', payload, 
    {
        headers: headers
    })

    return aiMessage;
}

export { getAIMessage };