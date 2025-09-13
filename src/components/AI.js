import React from 'react';
import Box from '@mui/material/Box';
import BlogItem from './BlogItem';
import llmThinkingModels from './contents/llmThinkingModels';
import promptTypes from './contents/promptTypes';
import stochasticParrots from './contents/stochasticParrots';
import ai from './contents/ai';
import aiTypes from './contents/aiTypes';
import agi from './contents/agi';
import promptEngineering from './contents/promptEngineering';
import functionCalling from './contents/functionCalling';
import ggufggml from './contents/ggufggml';
import devInLangChain from './contents/devInLangChain';
import llmTraining from './contents/llmTraining';
import smallLLMForFun from './contents/smallLLMForFun';
import baseVsInstruct from './contents/baseVsInstruct';
import llmInstructionTuning from './contents/llmInstructionTuning';
import peft from './contents/peft';
import dataSetsForFinetuning from './contents/dataSetsForFinetuning';
import llmParamters from './contents/llmParamters';
import modelQuantization from './contents/modelQuantization';
import aiAgents from './contents/aiAgents';


const item = {
    header: "Artificial Intelligence",
    contents: [
        {
            text: "Perceptron", href: "#/perceptron"
        },
        {
            text: "Neural Networks and Types", href: "#/neural-nets"
        },
        {
            text: "Transformers", href: "#/transformers"
        },
        {
            text: "What is an AI agent?", href: "#/ai-agent"
        },
        {
            text: "Training LLM Locally", href: "#/llm-training"
        },
        {
            text: "Parameter-Efficient Fine-Tuning", href: "#/peft"
        },
        {
            text: "What is Instruction Tuning in LLM?", href: "#/instruct-tuning"
        },
        {
            text: "Parameter-Efficient Fine-Tuning using unsloth", href: "#/peft-unsloth"
        },
        {
            text: "LLM Datasets for Fine-tuning", href: "#/data-sets"
        },
        {
            text: "Function/Tool callling", href: "#/function-call"
        },
        {
            text: "Intstalling llama.cpp Windows", href: "#/install-llamacpp"
        },
        {
            text: "Intstalling Unsloth on Windows", href: "#/install-unsloth"
        },
        {
            text: "Tuning microsoft/Phi-3.5-mini-instruct", href: "#/tune-phi3.5-mini"
        },
        {
            text: "AI Agents using Langchain", href: "#/ai-agent-langchain"
        },
        {
            text: "How to write effective Prompts", href: "#/prompt"
        },
        {
            text: "What is GGUF Format?", href: "#/gguf"
        },
        {
            text: "Model Context Protocol", href: "#/mcp"
        },
    ]
}



export default function AI() {
    return (
        <>
            {BlogItem(item)}
        </>
    );
}