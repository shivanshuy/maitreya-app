const promptTypes = { 
    header: "Prompt is the way you talk to LLM", 
    text: "Prompt is the texual input provide by user to AI model to generate some respons or complete a task.", 
    content: { 
        header: "Types of Prompts", items: [
            { 
                header: "Completion Prompt", 
                text: 'This is often used to produce coherent and contextually relevant text that continues or completes the initial input like "Long long time ago there was".' 
            }, 
            { 
                header: "Instruction Prompt", 
                text: 'This is used instruct AI to perform some task like "Summarize following text".' 
            }, 
            { 
                header: "Zero-Shot Prompt", 
                text: 'Zero shot means zero examples. Here user intructs AI to perform some task without giving any example of final response of example to achive the goal for example "Classify the sentiment of this sentence".' 
            }, 
            { 
                header: "Few-Shot Prompt", 
                text: 'Here user intructs AI to perform some task with some example of the conversation. This helps AI to generate the response in desired format.' 
            }, 
            { 
                header: "In-Context Learning Prompt", 
                text: 'In-Context Learning refers to the ability of language models to learn and adapt to new tasks based on the context provided within a given input, without the need for explicit retraining. This means that the model can understand and generate relevant responses by simply being exposed to examples or instructions within the input text.' 
            }
        ] 
    }, 
    references: [
        { 
            href: "https://www.linkedin.com/pulse/ai-prompt-engineering-react-framework-rany-elhousieny-phd%E1%B4%AC%E1%B4%AE%E1%B4%B0-ofhlc/", 
            text: "AI Prompt Engineering" 
        }
    ] 
}

export default promptTypes;