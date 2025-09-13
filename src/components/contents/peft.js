const sft = {
    header: "What is Parameter-Efficient Fine-Tuning (PEFT)?",
    text: `Customizing and fine-tuning large pretrained models is often prohibitively costly due to their scale. Parameter-Efficient Fine-Tuning (PEFT) methods enable efficient adaptation of large pretrained models to various downstream applications by only fine-tuning a small number of (extra) model parameters instead of all the model's parameters. This significantly decreases the computational and storage costs.`,
    content: { 
        header: "PEFT Techniques", items: [
            {
                text: `Low-Rank Adaptation (LoRA)` 
            },
            {
                text: `QLoRA (Quantization-aware Low-Rank Adaptation)` 
            }
        ] 
    },
    references: [
        { 
            href: "https://www.mercity.ai/blog-post/guide-to-fine-tuning-llms-with-lora-and-qlora", 
            text: "guide-to-fine-tuning-llms-with-lora-and-qlora" 
        },
        { 
            href: "https://huggingface.co/blog/mlabonne/sft-llama3", 
            text: "Supervised fine-tuning" 
        }
    ],
    innerLinks: [
        {
            href: "#/peft", text: "Parameter-Efficient Fine-Tuning"
        },
        {
            href: "#/peft-unsloth", text: "Parameter-Efficient Fine-Tuning using Unsloth"
        }
    ]
}
export default sft;