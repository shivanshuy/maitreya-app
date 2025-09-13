const modelQuantization = {
    header: "Model Quantization",
    text: `Quantization is the process of reducing the precision of a digital signal, typically from a higher-precision format to a lower-precision format. This technique is widely used in various fields, including signal processing, data compression and machine learning.
        As their name suggests, Large Language Models (LLMs) are often too large to run on consumer hardware. These models may exceed billions of parameters and generally need GPUs with large amounts of VRAM to speed up inference.
        Model quantization can reduce the memory footprint and computation requirements of deep neural network models. Weight quantization is a common quantization technique that converts a model’s weights from the standard floating-point data type (e.g., 32-bit floats) to a lower precision data type (e.g., 8-bit integers), thus saving memory and resulting in faster inference (through reduced computational complexity). Model quantization can make large models, such as LLMs, more practical for real-world applications at edge devices.`,
        references: [
            { 
                href: "https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization", 
                text: "a-visual-guide-to-quantization" 
            },
            { 
                href: "https://newsletter.maartengrootendorst.com/p/which-quantization-method-is-right", 
                text: "which-quantization-method-is-right" 
            }
        ]
}

export default modelQuantization;