const llmParamters = {
    header: "Model Paramers and Sizes",
    text: `Weights and the biases of each neuron are an important part of the neural network, and they are sometimes called the parameters of an AI system. 
    When an AI system is described as having billions of parameters, that’s referring to those weights and biases.`,
    content: { 
        header: "Size of Language Models", items: [
            {
                header: `Small Models`,
                text: `Less than ~1B parameters. Some of Apple's OpenELM models, TinyLlama and tinydolphin are examples of small models.` 
            },
            {
                header: `Medium models`,
                text: `Roughly between 1B to 10B parameters. This is where Mistral 7B, Phi-3, Gemma from Google DeepMind, and wizardlm2 sit. Fun fact: GPT 2 was a medium sized model, much smaller than its latest versions.` 
            },
            {
                header: `Large models`,
                text: `Everything above 10B of parameters. This is where Llama 3, Llama 2, Mistral 8x22B, GPT 3, and most likely GPT 4 sit.` 
            }
        ] 
    },
    references: [
        { 
            href: "https://www.koyeb.com/blog/what-are-large-language-models#smaller-versus-larger-model-sizes", 
            text: "what-are-large-language-models" 
        },
        { 
            href: "https://www.nngroup.com/articles/how-ai-works/", 
            text: "how-ai-works" 
        }
    ] 
}

export default llmParamters;