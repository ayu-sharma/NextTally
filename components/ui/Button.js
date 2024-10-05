import React from 'react';
import Button from '@mui/material/Button';
export default function buttonComp({btnName, className}) {
    return (
        <div>
            <Button className={`bg-[#4353F0] ${className}`} style={{ textTransform: 'none' }}>{btnName}</Button>
        </div>
    );
}