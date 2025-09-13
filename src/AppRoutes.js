import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import Programming from './components/Programming';
import ChatterBug from './components/ChatterBug';
import AI from './components/AI';
import PromptEngineeringPage from './components/pages/PromptEngineeringPage';
import FunctionCallingPage from './components/pages/FunctionCallingPage';
import DevelopmentInPython from './components/pages/DevelopmentInPython';
import DevelopmentInLangChain from './components/pages/DevelopmentInLangChain';
import LLMTraining from './components/pages/LLMTraining'; 
import InstructionTuning from './components/pages/InstructionTuning'; 
import PEFT from './components/pages/PEFT'; 
import InstallUnsloth from './components/pages/InstallUnsloth';
import PEFTUsingUnsloth from './components/pages/PEFTUsingUnsloth';
import Datasets from './components/pages/Datasets';
import LlamaCpp from './components/pages/LlamaCpp';
import AIAgent from './components/pages/AIAgent';
import LangChainLangGraphAIAgent from './components/pages/LangChainLangGraphAIAgent';
import PEFTPhiMini from './components/pages/PEFTPhiMini';
import GGUFFormat from './components/pages/GGUFFormat';
import LMFromScratch from './components/pages/LMFromScratch';
import NeuralNets from './components/pages/NeuralNets';
import Transformers from './components/pages/Transformers';
import WebServer from './components/pages/WebServer';
import MCP from './components/pages/MCP';
import Elastic from './components/pages/Elastic';
import CAP from './components/pages/CAP';
import Pragya from './components/Pragya';
import CUDA from './components/pages/CUDA';
import TuneYourModel from './components/TuneYourModel';


const AppRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/index.html" element={<Home />} />
        <Route exact path="/chatterbug" element={<Pragya />} />
        <Route exact path="/ai" element={<AI />} />
        <Route exact path="/programming" element={<Programming />} />
        <Route exact path="/tech" element={<Tech />} />
        <Route exact path="/maths" element={<About />} />
        <Route exact path="/science" element={<About />} />
        <Route exact path="/philosophy" element={<About />} />
        <Route exact path="/history" element={<About />} />
        <Route exact path="/watches" element={<About />} />
        <Route exact path="/books" element={<About />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/prompt" element={<PromptEngineeringPage />} />
        <Route exact path="/function-call" element={<FunctionCallingPage />} />
        <Route exact path="/dev-python" element={<DevelopmentInPython />} />
        <Route exact path="/dev-langchain" element={<DevelopmentInLangChain />} />
        <Route exact path="/llm-training" element={<LLMTraining />} />
        <Route exact path="/instruct-tuning" element={<InstructionTuning />} />
        <Route exact path="/peft" element={<PEFT />} />
        <Route exact path="/install-unsloth" element={<InstallUnsloth />} />
        <Route exact path="/peft-unsloth" element={<PEFTUsingUnsloth />} />
        <Route exact path="/data-sets" element={<Datasets />} />
        <Route exact path="/install-llamacpp" element={<LlamaCpp />} />
        <Route exact path="/ai-agent" element={<AIAgent />} />
        <Route exact path="/ai-agent-langchain" element={<LangChainLangGraphAIAgent />} />
        <Route exact path="/tune-phi3.5-mini" element={<PEFTPhiMini />} />
        <Route exact path="/gguf" element={<GGUFFormat />} />
        <Route exact path="/create-lm" element={<LMFromScratch />} />
        <Route exact path="/neural-nets" element={<NeuralNets />} />
        <Route exact path="/transformers" element={<Transformers />} />
        <Route exact path="/web-server" element={<WebServer />} />
        <Route exact path="/mcp" element={<MCP />} />
        <Route exact path="/elastic" element={<Elastic />} />
        <Route exact path="/cap" element={<CAP />} />
        <Route exact path="/cuda" element={<CUDA />} />
        <Route exact path="/tuneurmodel" element={<TuneYourModel />} />
    </Routes>
);
export default AppRoutes;