import react from 'react';

export default function Signin_admin() {
    return (
        <div className='grid grid-cols-2 gap-16'>
            <div className='bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-[100vh] my-[6px] mx-[9px] rounded-3xl pt-16 px-12 pb-2'>
                <div className='text-white font-bold text-3xl'>
                    The Simplest way to manage <br /> your revenue
                </div>
                <div className='text-white text-md pt-1'>
                    Enter you credentials to access your account
                </div>
            </div>
            <div className='flex flex-col pt-28 items-start'>
                <div className='text-3xl font-bold'>
                    Access Your Dashboard
                </div>
                <div className='text-black text-sm'>
                    Enter you credentials to access your account
                </div>
                <div className='pt-20 w-full pr-20'>

                    <div className=''>
                        Email Address
                    </div>
                    <input type='email' className='border-2 border-gray-300 rounded-md py-2 px-1 w-full mt-1' />
                    
                    <div className='mt-4'>
                        Password
                    </div>
                    <input type='password' className='border-2 border-gray-300 rounded-md py-2 px-1 w-full mt-1' />

                </div>
            </div>
        </div>
    )
}