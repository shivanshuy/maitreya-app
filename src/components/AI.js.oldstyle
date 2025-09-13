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

export default function AI() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '90%',
                overflow: "scroll",
                padding: '10px'
            }}
        >
            {BlogItem(ai)}
            {BlogItem(aiTypes)}
            {BlogItem(agi)}
            {BlogItem(ggufggml)}
            {BlogItem(modelQuantization)}
            {BlogItem(llmParamters)}
            {BlogItem(smallLLMForFun)}
            {BlogItem(dataSetsForFinetuning)}
            {BlogItem(peft)}            
            {BlogItem(llmInstructionTuning)}
            {BlogItem(llmTraining)}
            {BlogItem(baseVsInstruct)}           
            {BlogItem(promptTypes)}
            {BlogItem(promptEngineering)}
            {BlogItem(aiAgents)}
            {BlogItem(stochasticParrots)}
            {BlogItem(llmThinkingModels)}
            {BlogItem(functionCalling)}            
            {BlogItem(devInLangChain)}
        </Box>
    );
}