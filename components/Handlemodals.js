import SigninAdmin from './ui/Signin_admin';
import SigninUser from './ui/Signin_user';
import SignupAdmin from './ui/Signup_admin';
import React from 'react';

export default function HandleModals({ isOpen, toggleComponent, selectedMenu }) {
    console.log("Current selected menu:", selectedMenu);
    console.log("this is opened", )

    return (
        <>
            {isOpen && (
                <div className='block transition-opacity ease-linear overflow-y-hidden w-full h-full inset-0 fixed z-40 bg-neutral-900 bg-opacity-90' onClick={toggleComponent}>
                    <div className='h-[100vh] md:h-[calc(100% - 4rem)] max-w-5xl mx-auto transition-transform relative z-50 w-auto flex items-center' onClick={(e) => e.stopPropagation()}>
                        <div className='relative h-fit max-h-[90%] bg-white overflow-hidden bg-clip-padding shadow-lg rounded-lg w-full flex flex-col justify-start items-center'>
                            {selectedMenu === 'Admin' && <SigninAdmin onClose={toggleComponent} />}
                            {selectedMenu === 'User' && <SigninUser onClose={toggleComponent} />}
                            {selectedMenu === 'Signup' && <SignupAdmin onClose={toggleComponent} />}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}