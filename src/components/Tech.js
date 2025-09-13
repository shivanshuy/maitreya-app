import React from 'react';
import Box from '@mui/material/Box';
import BlogItem from './BlogItem';
import devInPython from './contents/devInPython';



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
        </Box>
    );
}