import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { getAIMessage } from '../ApiImpl';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';


function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default function TuneYourModel() {
    const [userMessage, setUserMessage] = React.useState("");
    const [prevUserMessage, setPrevUserMessage] = React.useState("");
    const [prevAIMessage, setPrevAIMessage] = React.useState("");
    const [sessionId, setSessionId] = React.useState(null);
    const [age, setAge] = React.useState('');

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            /*setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));*/
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
            sx={{ marginRight: '-10px', padding: '0' }}
        >
            <SendIcon />
        </IconButton>
    )


    const CustomPaper = styled(Paper)(({ theme }) => ({
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


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFile(files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            const file = selectedFile;
            formData.append(`file`, file);
            console.log('Uploading file...', formData);
        } else {
            console.error('No file selected');
        }
    };

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
            <Box container sx={{ marginLeft: 0, marginTop: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '95%' }}>
                <CustomPaper sx={{ width: '100%', display: 'flex', flexDirection: 'row' }} elevation={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 8, justifyContent: 'center', flex: 1 }}>
                        <Typography align='left' gutterBottom sx={{ fontFamily: 'monospace', fontSize: '1.5em', fontWeight: 'bold' }}>
                            Select Model
                        </Typography>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Typography align='left' mt={2} gutterBottom sx={{ fontFamily: 'monospace', fontSize: '1.5em', fontWeight: 'bold' }}>
                            Upload Training Data
                        </Typography>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            id="multiple-file-input"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                            <label htmlFor="multiple-file-input">
                                <Button size="small" variant="outlined" component="span">
                                    File
                                </Button>
                            </label>
                            {selectedFile && <Typography sx={{ fontSize: '12px' }} ml={2} align="left">
                                {selectedFile.name}
                            </Typography>
                            }
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }} mt={2}>
                            <Button size="small" variant="contained" color="primary" onClick={handleUpload} mt={2}>
                                Upload
                            </Button>
                            <Box sx={{ width: '100%', height: '100%' }} ml={2}>
                                <LinearProgressWithLabel value={progress} />
                            </Box>
                        </Box>
                        <Typography align='left' mt={2} gutterBottom sx={{ fontFamily: 'monospace', fontSize: '1.5em', fontWeight: 'bold' }}>
                            Test Model with Message
                        </Typography>
                        <TextField
                            fullWidth
                            id="outlined-multiline-flexible"
                            multiline
                            rows={2}
                            value={userMessage}
                            onChange={e => setUserMessage(e.target.value)}
                            InputProps={{ endAdornment: <SendButton /> }}
                            sx={{ overflowY: 'hidden' }}
                        />
                    </Box>
                    <Box sx={{ marginLeft: '15px', backgroundColor: '#1c1c25', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 3 }}>

                    </Box>
                </CustomPaper>
            </Box>
        </Box>
    );
}