import React from 'react';
import Box from '@mui/material/Box';
import { CopyBlock, CodeBlock, pojoaque, dracula, monoBlue,zenburn,paraisoLight,shadesOfPurple, atomOneLight, googlecode, far } from "react-code-blocks";


export default function CodeBlockItem({codeText}) {

    return (
        <Box sx={{ fontSize: '14px', fontWeight: 400, color: '#353E47', fontFamily: 'monospace', margin: '10px' }} >
            <CopyBlock
                language="javascript"
                text={codeText}
                codeBlock
                theme={dracula}
                showLineNumbers={false}
            />
        </Box>
    );
}
