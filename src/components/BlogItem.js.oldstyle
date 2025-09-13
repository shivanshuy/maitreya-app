import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function BlogItem(item) {
    let contentItems = null
    if (item.content) {
        contentItems = []
        item.content.items.forEach(element => {
            contentItems.push(
                <>
                    <Typography variant="h7" gutterBottom sx={{ fontFamily: 'broadway', color: '#353E47' }}>{element.header}</Typography>
                    <Box
                        sx={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#353E47',
                            fontFamily: 'monospace',
                            marginBottom: '10px'
                        }}
                    >{element.text}
                    </Box>
                </>
            )
        });
    }

    let references = null
    if (item.references) {
        references = []
        item.references.forEach(reference => {
            references.push(
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
                        fontFamily: 'broadway', color: '#353E47', paddingTop: '2px'
                    }}>External Reference - </Typography>
                    <Link href={reference.href} sx={{ textDecorationLine: 'none', fontFamily: 'monospace', marginLeft: '5px' }} variant="body2">
                        {reference.text}
                    </Link>
                </Box>
            )
        })
    }

    let innerLinks = null
    if (item.innerLinks) {
        innerLinks = []
        item.innerLinks.forEach(innerLink => {
            innerLinks.push(
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
                        fontFamily: 'broadway', color: '#353E47', paddingTop: '2px'
                    }}>Go to - </Typography>
                    <Link href={innerLink.href} sx={{ textDecorationLine: 'none', fontFamily: 'monospace', marginLeft: '5px' }} variant="body2">
                        {innerLink.text}
                    </Link>
                </Box>
            )
        })
    }

    return (
        <Box
            sx={{
                width: '98%',
                display: 'flex',
                flexGrow: 1,
                boxShadow: '3px 3px 3px #e4e8ec',
                borderRadius: 3,
                bgcolor: '#e4e8ec',
                marginTop: '10px',
                padding: '10px',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'broadway', color: '#353E47' }}>{item.header}</Typography>
            <Box
                sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#353E47',
                    fontFamily: 'monospace',
                }}
            >{item.text}
                {item.content ?
                    <Accordion sx={{
                        bgcolor: '#edf1f6',
                        marginTop: '10px',
                    }}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography variant="h6" sx={{ fontFamily: 'broadway', color: '#353E47' }} component="span">{item.content.header}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {contentItems}
                        </AccordionDetails>
                    </Accordion> : null}
                {item.references ? references : null}
                {item.innerLinks ? innerLinks : null}
            </Box>
        </Box>
    );
}
