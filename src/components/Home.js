import React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import HomeCards from './HomeCards';
import Typewriter from 'typewriter-effect';


const userMessageBox = (
    <Box
        sx={{
            width: '80%',
            borderRadius: 2,
            bgcolor: '#e4e8ec',
            marginTop: '20px',
            marginBottom: '20px',
            marginLeft: '5px',
            borderRight: '5px solid #1790A6',
            fontSize: '2em',
            padding: '20px',
            color: '#353E47',
            fontFamily: 'monospace',
            boxShadow: '3px 3px 3px #e4e8ec'
        }}
    ><Typewriter
            options={{
                strings: ['Answer to the Ultimate Question of Life, The Universe, and Everything.'],
                autoStart: true,
                loop: true,
                pauseFor: 3000
            }}
        />
    </Box>
);

const aiMessageBox = (
    <Box
        sx={{
            width: '80%',
            borderRadius: 2,
            bgcolor: '#e4e8ec',
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '5px',
            borderLeft: '5px solid #F3AC2B',
            fontSize: '2.5em',
            padding: '20px',
            fontFamily: 'monospace',
            color: '#353E47',
            boxShadow: '3px 3px 3px #e4e8ec'
        }}
    >
        <Typewriter
            options={{
                strings: ['','','42'],
                autoStart: true,
                loop: true,
                pauseFor: 5000
            }}
        />
    </Box>
);

export default function Home() {
    const containerRefUser = React.useRef(null);
    const containerRefAI = React.useRef(null);
    return (
        <Box
            sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '650px'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'left',
                        flex: 1
                    }}
                    ref={containerRefUser}
                >
                    <Slide in={true} appear={true} direction="right" timeout={500} container={containerRefUser.current}>
                        {userMessageBox}
                    </Slide>
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'right',
                        flex: 1
                    }}
                    ref={containerRefAI}
                >
                    <Slide in={true} appear={true} direction="left" timeout={500} container={containerRefAI.current}>
                        {aiMessageBox}
                    </Slide>
                </Box>

            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '650px',
                    backgroundColor: '#2b2c2b',
                    backgroundImage: `url(${"./home_pic.png"})`
                }}
            >
                <HomeCards></HomeCards>
            </Box>
        </Box>
    );
}
