import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import SubdirectoryArrowRightRoundedIcon from '@mui/icons-material/SubdirectoryArrowRightRounded';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';

export default function BlogItem(item) {
    let contentItems = null
    if (item.contents) {
        contentItems = []
        item.contents.forEach(element => {
            contentItems.push(
                <>
                    <ListItemButton>
                        <ListItemIcon>
                            <FolderOpenTwoToneIcon sx={{ fill: 'rgba(0, 0, 0, 0.87)' }} />
                        </ListItemIcon>
                        <Link href={element.href} sx={{
                            fontSize: 'large',
                            fontWeight: 500,
                            color: '#353E47',
                            fontFamily: 'monospace',
                            textDecorationLine: 'none'
                        }} variant="body2">
                            {element.text}
                        </Link>
                    </ListItemButton>
                </>
            )
        });
    }

    return (
        <Box
            sx={{
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '10px'
            }}
        >
            <List
                sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ position: 'unset' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'monospace', color: '#353E47', marginTop: '10px' }}>{item.header}</Typography>
                    </ListSubheader>
                }
            >
                {contentItems}
            </List>
        </Box>
    );
}
