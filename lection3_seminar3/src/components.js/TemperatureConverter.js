import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TemperatureConverter() {
    const [inputValueF, setInputValueF] = useState('');
    const [inputValueC, setInputValueC] = useState('');


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"

        >
            <TextField
                id="outlined-basic"
                label="°F"
                variant="outlined"
                type="number"
                value={inputValueC ? inputValueC * 9 / 5 + 32 : inputValueF}
                onChange={(e) => setInputValueF(e.target.value)} />
            <TextField
                id="filled-basic"
                label="°C"
                variant="filled"
                type="number"
                value={inputValueF ? (inputValueF - 32) * 5 / 9 : inputValueC}
                onChange={(e) => setInputValueC(e.target.value)} />
        </Box>
    );
}