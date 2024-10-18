import react from 'react';
import Button from '../../components/ui/ButtonCmp';
import Image from 'next/image';
import googlelogo from '../../public/images/googlelogo.svg';
import close from '../../public/images/modalclose.svg'
import logol from '../../public/images/logol.svg';
// import { Image } from 'next/image';
export default function Signin_admin({onClose}) {
    return (
        <>
            <div className='w-full overflow-y-auto'>
            
                        <div className='flex flex-col items-center md:hidden pt-4'>
            <Image src={logol} alt='NextTally Logo' height={36} />
          </div>
                <div className='flex flex-col w-full'>
                    <div className='flex-1 items-start flex flex-row w-full'>
                        <div className='hidden md:flex bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-[46rem] max-w-xl w-full flex-col pt-20 pl-10'>
                            <div className='text-white font-bold text-2xl'>
                                The Simplest way to manage <br /> your revenue
                            </div>
                        </div>
                        <div className='flex flex-col justify-center w-full md:pt-24 pt-16 md:pb-10 md:px-4 px-4 max-w-md mx-auto'>
                            <div className='text-2xl font-bold'>
                                Access Your Dashboard
                            </div>
                            <div className='text-black text-xs'>
                                Enter you credentials to access your account
                            </div>
                            <div className='pt-6 w-full flex flex-col'>
                                <input type='email' placeholder='Email Address..' className='border-2 border-gray-300 rounded-md py-2.5 px-6 w-full mt-1 text-xs' />

                                <input type='password' placeholder='Password' className='border-2 border-gray-300 rounded-md py-2.5 px-6 w-full text-xs mt-4' />

                            </div>
                            <div className='w-full'>
                                <Button className='rounded-md text-sm py-2.5 px-4 text-white mt-5 font-bold hover:opacity-90 max-w-md mx-auto w-full' btnName="Login" />
                            </div>
                            <div className='text-black font-bold text-xs mt-1'>
                                Don&apos;t have an account yet? No problem! <a className='text-blue-700' href='#'>Create one now</a>.
                            </div>
                            <div className=" relative w-full h-0 border border-gray-300 border-opacity-60 transform -rotate-0.5 mt-14">
                                <div className="relative flex justify-center">
                                    <div className="absolute bg-[#E1E9EF] p-2 -top-5">Or</div>
                                </div>
                            </div>
                            <div className='flex justify-center cursor-pointer hover:bg-neutral-100 items-center px-6 md-px-8 py-2.5 md:py-3 border rounded-xl w-full mx-auto mt-9 gap-2'>
                                <div>
                                    <Image src={googlelogo} alt="Google Logo Image" />
                                </div>
                                <div className='text-md'>
                                    Log in with Google
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}