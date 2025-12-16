import { onBoardUser } from '@/actions/auth';
import Navbar from '@/components/layout/navbar';
import { Trees } from 'lucide-react';
import React from 'react'

const HomeLayout = async({ children }: { children: React.ReactNode }) => {
    const user = await onBoardUser();
    
    return (
        <div className='w-full min-h-screen flex flex-col justify-between items-center lg:flex-row auth-gradient'>
            <div className='w-full flex flex-col items-center min-h-screen'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default HomeLayout;