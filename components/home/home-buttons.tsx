"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const HomeButtonComp = () => {
    const router = useRouter();
    return (
        <div className='text-white flex justify-center items-center gap-2 text-[15px] tracking-tight'>
            <Button size={"sm"} className='bg-[#ff0066]/60 hover:bg-[#ff0066] transition-all duration-200 ease-in-out rounded-[6px] font-sans font-medium'>
                Document
            </Button>
            <Button onClick={() => router.push('/dashboard')} size={"sm"} className='bg-white text-black hover:bg-[#f3f3f3] rounded-[6px] transition-all duration-200 ease-in-out font-sans font-medium border border-[#e6e6e6]'>
                Get Started
            </Button>
        </div>
    )
}

export default HomeButtonComp;