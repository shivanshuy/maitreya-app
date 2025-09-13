const devInPython = {
    header: "Downloading and Installing CUDA Toolkit on Windows",
    text: 'The NVIDIA® CUDA® Toolkit provides a development environment for creating high-performance, GPU-accelerated applications. With it, you can develop, optimize, and deploy your applications on GPU-accelerated embedded systems, desktop workstations, enterprise data centers, cloud-based platforms, and supercomputers.',
    content: { 
        header: "Instructions", items: [
            {
                header: "Prerequisites",
                text: `1- NVIDIA GPU: Ensure your system has a compatible NVIDIA GPU, 
                2- Visual Studio: Download and install Visual Studio Community with C++ build tools selected during installation, 
                3- Python: Install Python from the official site.
            ` 
            }
        ] 
    },
    references: [
        {
            href: "https://developer.nvidia.com/cuda-toolkit",
            text: "cuda-toolkit-download"
        }
    ]
}
export default devInPython;