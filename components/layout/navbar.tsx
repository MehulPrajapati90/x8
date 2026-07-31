"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Github, Link as LucideLinks, Twitter } from "lucide-react";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const user = useUser();
    return (
        <div className='sticky top-15 w-[600px] h-11 rounded-[8px] backdrop-blur-2xl backdrop-opacity-20 flex items-center justify-between px-3'>
            <div className='flex items-center gap-1.5'>
                <LucideLinks size={25} className='text-[#ff0066]' />
                <h2 className='text-2xl font-sans tracking-tight font-semibold'>X8</h2>
            </div>

            <div className='flex items-center gap-5'>
                <div className="flex gap-5">
                    <Link href='https://x.com/mehulxbuilds' target='_blank'>
                        <Twitter size={24} strokeWidth={1.5} className='transition-all duration-200 ease-in-out hover:text-[#ff0066]' />
                    </Link>
                    <Link href='https://github.com/mehulxbuilds/x8' target='_blank'>
                        <Github size={24} strokeWidth={1.5} className='transition-all duration-200 ease-in-out hover:text-[#ff0066]' />
                    </Link>
                </div>

                <div>
                    {user.isSignedIn ? (
                        <UserButton />
                    ) : (
                        <div onClick={() => router.push('/sign-in')} className="text-[16px] font-sans cursor-pointer px-3 py-1 bg-[#ff0066]/15 transition-all duration-200 ease-in-out hover:bg-[#ff0066]/60 rounded-[30px] tracking-tight font-medium">
                            <p>Sign In</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;