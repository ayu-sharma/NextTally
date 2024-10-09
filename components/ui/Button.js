import React from 'react';
import Button from '@mui/material/Button';
export default function buttonComp({btnName, className}) {
    return (
        <div>
            <Button className={`bg-gradient-to-r from-[#185FF6] to-[#1B45A6] via-[#185FF6] bg-[18%_91%] ${className}`} style={{ textTransform: 'none' }}>{btnName}</Button>
        </div>
    );
}