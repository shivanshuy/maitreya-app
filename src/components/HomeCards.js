import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



const cardsDef = [
    {
        area: "LLM Training",
        header: 'PEFT using Unsloth',
        text: 'Unsloth is an open-source Python framework that speeds up the fine-tuning of large language models (LLMs). Its designed to help developers and researchers create custom models more quickly and efficiently.',
        moreLink: "#/peft-unsloth"
    },
    {
        area: "Prompt Enginnering",
        header: 'How to Write Better Prompts?',
        text: 'Prompt engineering is the process of writing prompts to maximize the quality and relevance of the response.',
        moreLink: "#/prompt"
    },
    {
        area: "Language Models",
        header: 'Creating Language Model from Scratch',
        text: 'Prompt engineering is the process of writing prompts to maximize the quality and relevance of the response.',
        moreLink: "#/create-lm"
    }
]


function HomeCard(cardItem) {
    return (<Card
        sx={{
            maxWidth: 343,
            borderRadius: "20px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            transition: "0.3s",
            margin: '10px',
            flex: 1,
            minWidth: '343px',
            bgcolor: '#f6f6f6'
        }}
    >
        <Box sx={{ minWidth: 256 }}>
            <Box
                sx={{
                    padding: `4px 24px 0`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Avatar
                    sx={(theme) => ({
                        bgcolor: '#ff6200', 
                        width: 48,
                        height: 48,
                        transform: "translateY(50%)",
                        "& > img": {
                            margin: 0,
                            backgroundColor: "common.white",
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: 60,
                            height: 60,
                        },
                    })}
                >AI</Avatar>
                <Typography
                    sx={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: "grey.500",
                        letterSpacing: "1px",
                    }}
                >
                    <CardActions>
                    <Link href={cardItem.moreLink} sx={{ textDecorationLine: 'none', fontFamily: 'monospace', marginLeft: '5px' }} variant="body2">
                        {"Learn More"}
                    </Link>
                    </CardActions>
                </Typography>
            </Box>
            <Box
                component="hr"
                sx={(theme) => ({
                    backgroundColor: "grey.200",
                    marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                    [theme.breakpoints.up("sm")]: {
                        marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                    },
                })}
            />
        </Box>
        <CardContent sx={{ p: 3 }}>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>{cardItem.area}</Typography>
            <Typography gutterBottom variant="h5" component="div">{cardItem.header}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {cardItem.text}
            </Typography>
        </CardContent>
    </Card>
    )
}

export default function HomeCards() {

    const cardItems = []

    cardsDef.forEach(item => {
        cardItems.push(HomeCard(item))
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: '10px', flexWrap: 'wrap' }}>
            {cardItems}
        </Box>
    );
}