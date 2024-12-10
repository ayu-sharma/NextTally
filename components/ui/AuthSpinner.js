import React from 'react';

export default function AuthSpinner() {
    return (
        <div className="flex items-center justify-center w-full bg-black/50 h-screen overflow-hidden">
            <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
        </div>
    )
}