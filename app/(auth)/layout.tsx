import { Trees } from 'lucide-react';
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[linear-gradient(107.4deg,rgba(255,242,239,1)_11.1%,rgba(255,219,182,1)_37.5%,rgba(247,165,165,1)_54.3%,rgba(26,42,79,1)_84.3%)] w-full min-h-screen flex flex-col items-center justify-center'>
            <div className='sticky top-0 h-18 flex justify-center items-center text-zinc-700 px-50'>
                <div className='flex items-center justify-center py-10'>
                    <div>
                        <Trees size={32} fill='pink' className='text-pink-800' />
                    </div>
                    <h1 className='text-3xl font-semibold font-sans tracking-tight text-pink-800'>Short Links</h1>
                </div>
            </div>
            {children}
        </div>
    )
}

export default AuthLayout;