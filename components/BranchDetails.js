import React from 'react';
import { Plus } from 'lucide-react';
export default function BranchDetails() {
    return (
        <div>
            <h1>Branch Details</h1>
            <div className='flex flex-col items-center'>
                <button className='absolute bottom-4 rounded-full website-color-scheme p-2 text-white hover:bg-transparent'><Plus size={40} strokeWidth={2.5} /></button>
            </div>
        </div>
    )
}