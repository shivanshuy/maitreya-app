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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f0f2f6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Home() {
    const [userMessage, setUserMessage] = React.useState("");
    const [prevUserMessage, setPrevUserMessage] = React.useState("");
    const [prevAIMessage, setPrevAIMessage] = React.useState("");
    const [sessionId, setSessionId] = React.useState(null);

    const handleSend = (event) => {
        console.log(userMessage);
        let userMes = {
            "message": userMessage,
            "messageType": "STRING"
        }

        getAIMessage(userMes, sessionId).
            then(function (response) {
                console.log(response);
                setSessionId(response.data.sessionId);
                setPrevAIMessage(response.data.message.message);
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
        >
            <SendIcon />
        </IconButton>
    )


    return (
        <Box sx={{ mt: '2px', flexGrow: 1, height: '90%' }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={3} sx={{ height: '100%' }}>
                    <Item sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                        <Typography align='left' variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Settings
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 4 }}>
                            <Typography align='left' fontSize={14} gutterBottom sx={{ fontWeight: 'bold' }}>Tokens</Typography>
                            <TokenLengthSlider></TokenLengthSlider>
                            <Typography align='left' fontSize={14} gutterBottom sx={{ fontWeight: 'bold' }}>Temperature</Typography>
                            <TemperatureSlider></TemperatureSlider>

                        </Box>
                        <Box sx={{ flexGrow: 8 }}>
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
                            <Accordion
                                sx={{ mt: '10px' }}
                            >
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography>Login</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TextField sx={{ mb: '5px' }} id="outlined-search" label="User Name" type="text" fullWidth />
                                    <TextField sx={{ mb: '5px' }} id="outlined-search" label="Password" type="password" fullWidth />
                                    <Button variant="contained" size="small" fullWidth onClick={handleLogin}>
                                        Small
                                    </Button>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={9} sx={{ height: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                        <Box sx={{ display: 'flex', flexGrow: 2 }}>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 8, justifyContent: 'center' }}>
                            <Box sx={{ p: '10px', mb: '10px' }}>
                                <InputLabel sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', fontSize: '12px' }} htmlFor="component-helper">Previous Human Message</InputLabel>
                                <TextField
                                    disabled
                                    sx={{ backgroundColor: '#f0f2f6' }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rows={1}
                                    value={prevUserMessage}
                                />
                                <InputLabel sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', fontSize: '10px' }} htmlFor="component-helper">Previous AI Message</InputLabel>
                                <TextField
                                    disabled
                                    sx={{ backgroundColor: '#f0f2f6', fontSize: '10px', lineHeight: '1' }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rows={8}
                                    value={prevAIMessage}
                                />
                            </Box>
                            <Box sx={{ p: '10px' }}>
                                <InputLabel sx={{ fontSize: '12px' }} htmlFor="component-helper">Type your message here and press enter</InputLabel>
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rows={2}
                                    value={userMessage}
                                    onChange={e => setUserMessage(e.target.value)}
                                    InputProps={{ endAdornment: <SendButton /> }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexGrow: 2 }}>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}