import React from 'react';
import { ReceiptSwissFranc } from 'lucide-react';
import { DiamondPercent } from 'lucide-react';
export default function TaxCalc() {
    return(
        <div className='mt-16 w-full'>
            <div className='flex justify-between'>
            <div className="flex flex-wrap gap-5 w-full mt-12">
            {[
            {
              title: "Total Revenue",
              value: 0,
              icon: <ReceiptSwissFranc />,
            },
            {
              title: "Total Payable Tax",
              value: 0,
              icon: <DiamondPercent />,
            },
          ].map((items) => (
            <div
              key={items.id}
              className="bg-[#f8f9f9] w-full max-w-xs mx-auto px-7 rounded-xl py-5 pb-3"
            >
              <p className="pb-5">{items.title}</p>
              <div className="flex gap-3 items-center">
                <div className="bg-[#EDF3F5] rounded-full p-2 border-[#8B8686] border-[.25px]">
                  {items.icon}
                </div>
                <p className="text-2xl font-bold">{items.value}</p>
              </div>
            </div>
          ))}
                </div>
            </div>
        </div>
    )
}