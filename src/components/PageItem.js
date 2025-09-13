import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CodeBlockItem from './CodeBlockItem';
import { Image } from 'mui-image';


export default function PageItem(item) {
    let contentItems = []
    if (item.header) {
        contentItems.push(
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'monospace', color: '#353E47', marginTop: '10px' }}>{item.header}</Typography>
        )
    }
    if (item.text) {
        contentItems.push(
            <Box sx={{ fontSize: '15px', fontWeight: 400, color: '#353E47', fontFamily: 'monospace' }} >
                {item.text}
            </Box>
        )
    }

    if (item.contents) {
        item.contents.forEach(element => {
            if (element.type === 'header') {
                contentItems.push(
                    <Typography variant="h6" gutterBottom sx={{color: '#353E47', marginTop: '10px' }}>{element.text}</Typography>
                )
            } else if (element.type === 'subHeader') {
                contentItems.push(
                    <Typography variant="h8" gutterBottom sx={{color: '#353E47', marginTop: '10px' }}>{element.text}</Typography>
                )
            } else if (element.type === 'text') {
                contentItems.push(
                    <Box sx={{ fontSize: '15px', fontWeight: 400, color: '#353E47', fontFamily: 'monospace' }} >
                        {element.text}
                    </Box>
                )
            } else if (element.type === 'code') {
                contentItems.push(
                    <CodeBlockItem codeText={element.code} />
                )
            } else if (element.type === 'image') {
                contentItems.push(
                    <Box sx={{ fontSize: '15px', fontWeight: 400, color: '#353E47', fontFamily: 'monospace', }} >
                        <Image src={element.src} width='70%' />
                    </Box>
                )
            } else if (element.type === 'link') {
                contentItems.push(
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '10px',
                            fontSize: '15px',
                            fontWeight: 400,
                            color: '#353E47',
                            fontFamily: 'monospace',
                        }}>
                        <Typography variant="h7" gutterBottom sx={{
                            fontFamily: 'monospace', color: '#353E47', paddingTop: '2px'
                        }}>Go to - </Typography>
                        <Link href={element.href} sx={{ textDecorationLine: 'none', fontFamily: 'monospace', marginLeft: '5px' }} variant="body2">
                            {element.text}
                        </Link>
                    </Box>
                )
            } else if (element.type === 'reference') {
                contentItems.push(
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '10px',
                            fontSize: '15px',
                            fontWeight: 400,
                            color: '#353E47',
                            fontFamily: 'monospace',
                        }}>
                        <Typography variant="h7" gutterBottom sx={{
                            fontFamily: 'monospace', color: '#353E47', paddingTop: '2px'
                        }}>External Reference - </Typography>
                        <Link href={element.href} sx={{ textDecorationLine: 'none', fontFamily: 'monospace', marginLeft: '5px'}} variant="body2">
                            {element.text}
                        </Link>
                    </Box>
                )
            }
        })
    }

    return (
        <Box sx={{ width: '85%', display: 'flex', flexDirection: 'column', height: '90%', overflow: "hidden", padding: '25px',backgroundColor: 'white' }}>
            {contentItems}
        </Box>
    );

}
