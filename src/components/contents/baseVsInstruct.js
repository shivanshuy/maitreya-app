const baseVsInstruct =
{
    header: "Base Models vs Instruct Models",
    text: `Base Models have broad language understanding and prediction capabilities. But they are not reliable to follow specific instructions.
    Instruct models are created from Base Models by additional fine-tuning on datasets of instructions and their corresponding outputs. This makes them reliable to follow instructions and consistant output in specific area.`,
    content: { 
        header: "Base or Instruct version of LLM for fine tuning?", items: [
            {
                text: `Training on a base model usually yields results that closely reflect your own data and style. However, training on an instruct-tuned model can dilute the influence of your dataset. On the other hand, if your dataset is small and might not effectively refine a base model, using an already fine-tuned model can be beneficial.
                If you only need to add specific information or style while maintaining the overall instruct behavior, you can fine-tune an instruct model without any issues.` 
            }
        ] 
    },
}
export default baseVsInstruct;