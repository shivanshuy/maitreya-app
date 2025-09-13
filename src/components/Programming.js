import React from 'react';
import Box from '@mui/material/Box';
import BlogItem from './BlogItem';
import devInPython from './contents/devInPython';
import installCUDA from './contents/installCUDA';
import installUnsloth from './contents/installUnsloth';
import installLlamaCpp from './contents/installLlamaCpp';


const items = {
    header: "Programming Titbits",
    contents: [
        {
            text: "Introduction to Web Server", href: "#/web-server"
        },
        {
            text: "Elastic Search", href: "#/elastic"
        },
        {
            text: "CAP Theorem: Why You Can't Have It All", href: "#/cap"
        },
        {
            text: "CUDA", href: "#/cuda"
        }
    ]
}


export default function Programming() {
    return (
        <>
            {BlogItem(items)}
        </>
    );
}