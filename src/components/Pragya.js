import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TokenLengthSlider from './TokenLengthSlider';
import TemperatureSlider from './TemperatureSlider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import SaveIcon from "@mui/icons-material/Save";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getAIMessage } from '../ApiImpl';

const ItemLeft = styled(Paper)(({ theme }) => ({
    //backgroundColor: '#f0f2f6',
    //...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    
    //color: theme.palette.text.secondary,
}));

const ItemTopLeft = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    paddingTop: '8px',
    paddingBottom: '6px',
    paddingLeft: '8px',
    paddingRight: '8px',
    marginRight: '2px', // Add margin to the right to separate from the next item
    flex:1
    //color: theme.palette.text.secondary,
}));

const ItemTopRight = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    paddingTop: '8px',
    paddingBottom: '6px',
    paddingLeft: '8px',
    paddingRight: '8px',
    marginLeft: '2px', // Add margin to the right to separate from the next item
    flex:1
    //color: theme.palette.text.secondary,
}));

const ItemRightBottom = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    marginTop: '10px',
    paddingTop: '8px',
    paddingBottom: '6px',
    paddingLeft: '8px',
    paddingRight: '8px',
    //color: theme.palette.text.secondary,
}));


export default function Pragya() {
    const [userMessage, setUserMessage] = React.useState("");
    const [prevUserMessage, setPrevUserMessage] = React.useState("");
    const [prevAIMessage, setPrevAIMessage] = React.useState("");
    const [sessionId, setSessionId] = React.useState(null);

    const handleSend = (event) => {
        console.log(userMessage);

        getAIMessage(userMessage, sessionId).
            then(function (response) {
                console.log(response);
                setSessionId(response.data.sessionId);
                setPrevAIMessage(response.data.message.content);
                setPrevUserMessage(userMessage)
                setUserMessage("")
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleLogin = (event) => {
        alert("Login")
    };

    const SendButton = () => (
        <IconButton
            onClick={handleSend}
            sx={{marginRight: '-10px', padding: '0'}}
        >
            <SendIcon />
        </IconButton>
    )


    return (
        <Box
            sx={{
                width: '80%',
                display: 'flex',
                height: '100%',
                padding: '10px',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box container  sx={{marginLeft: 0, marginTop: 0, display: 'flex',flexDirection: 'column', justifyContent: 'center',  width: '95%'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',width: '100%' }}>
                        <ItemTopLeft>
                            <Typography align='left' gutterBottom sx={{ fontFamily: 'monospace', fontSize: '1.5em', fontWeight: 'bold' }}>
                                Settings
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 4 }}>
                                <Typography align='left' fontSize={14} gutterBottom sx={{ fontWeight: 'bold' }}>Temperature</Typography>
                                <TemperatureSlider></TemperatureSlider>
                            </Box>
                            <Button
                                    fullWidth
                                    sx={{ borderRadius: '10px', backgroundColor: '#ff4b4b' }}
                                    variant="contained"
                                    startIcon={<ChatBubbleOutlineIcon />}
                                    onClick={() => {
                                        setSessionId(null);
                                        setPrevAIMessage("");
                                        setPrevUserMessage("")
                                        setUserMessage("")
                                    }}
                                >
                                    New Chat
                            </Button>
                        </ItemTopLeft>
                        <ItemTopRight>
                            <Typography align='left'gutterBottom sx={{ fontFamily: 'monospace', fontSize: '1.5em', fontWeight: 'bold' }}>
                                Execution Info
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 4 }}>
                                <Typography align='left' fontSize={14} gutterBottom sx={{}}>Model - Mistral-7B-v0.3</Typography>
                            </Box>
                        </ItemTopRight>
                    </Box>
                    <ItemRightBottom>
                        <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 8, justifyContent: 'center' }}>
                                <InputLabel sx={{ fontFamily: 'monospace', display: 'flex', alignItems: 'left', justifyContent: 'left', fontSize: '10px' }} htmlFor="component-helper">Previous Human Message</InputLabel>
                                <TextField
                                    sx={{ backgroundColor: '#f0f2f6' }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rows={1}
                                    value={prevUserMessage}
                                />
                                <InputLabel sx={{ fontFamily: 'monospace', display: 'flex', alignItems: 'left', justifyContent: 'left', fontSize: '10px' }} htmlFor="component-helper">Previous AI Message</InputLabel>
                                <TextField
                                    sx={{ backgroundColor: '#f0f2f6', fontSize: '10px', lineHeight: '1' }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rows={8}
                                    value={prevAIMessage}
                                />                            
                        </Box>
                    </ItemRightBottom>
                    <ItemRightBottom>
                        <Box sx={{display: 'flex' ,flexDirection: 'column', flexGrow: 8, justifyContent: 'center' }}>                                
                            <InputLabel sx={{ fontFamily: 'monospace', fontSize: '12px', fontFamily: 'monospace' }} htmlFor="component-helper">Type your message here and press enter</InputLabel>
                            <TextField
                                fullWidth
                                id="outlined-multiline-flexible"
                                multiline
                                rows={2}
                                value={userMessage}
                                onChange={e => setUserMessage(e.target.value)}
                                InputProps={{ endAdornment: <SendButton /> }}
                                sx={{overflowY: 'hidden'}}
                            />                            
                        </Box>
                    </ItemRightBottom>   
            </Box>
        </Box>
    );
}