const llmInstructionTuning = {
    header: "What is Instruction Tuning in LLM?",
    text: `Instruction fine-tuning is a process where a pre-trained language model is further trained on a dataset consisting of instructions and their corresponding outputs. This additional training helps the model to better understand and follow specific instructions, making it more reliable and consistent in generating responses that adhere to the given directives.`,
    content: { 
        header: "Instruction Tuning Vs Fine-Tuning of LLMs", items: [
            {
                text: `While both "instruction tuning" and "fine-tuning" are methods to improve the performance of Large Language Models (LLMs), the key difference is that instruction tuning specifically focuses on training an LLM to follow explicit instructions given in natural language, whereas fine-tuning generally adapts an LLM to perform well on a specific task using a targeted dataset; essentially, instruction tuning provides more granular control over the model's behavior by explicitly telling it what to do through instructions, while fine-tuning might just expose it to relevant data to learn the task implicitly.` 
            }
        ] 
    },
    innerLinks: [
        {
            href: "#/instruct-tuning", text: "Instruction Tuning"
        }
    ]
}
export default llmInstructionTuning;