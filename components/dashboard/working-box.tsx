import React from 'react'
import { Button } from '../ui/button';
import { CheckCheck } from 'lucide-react';

const WorkingBox = () => {
    return (
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 flex flex-col items-center p-4 gap-8">
            <div className="w-full flex flex-col gap-3">
                <p className="text-3xl font-sans font-medium tracking-[-1px]">Working</p>
                <p className="text-[13px] text-neutral-500 font-sans font-normal tracking-tight leading-4">Here's how X8 — works for you efficiently for years</p>
            </div>

            <div className='flex flex-col text-[#f3f3f3] gap-2.5 items-start w-full'>
                <Button variant={"ghost"} className='rounded-[5px] font-sans text-[13px] tracking-[-0.3px] font-medium flex justify-between items-center gap-3 bg-transparent hover:bg-zinc-800 border border-zinc-800 bg-zinc-800 w-[70%]'>
                    <div className='p-[4px] bg-[#101114] rounded-full'>
                        <CheckCheck className='text-zinc-200 size-3' />
                    </div>
                    <span className='text-white'>Add main link</span>
                </Button>

                <Button variant={"ghost"} className='rounded-[5px] font-sans text-[13px] tracking-[-0.3px] font-medium flex justify-between items-center gap-3 bg-transparent hover:bg-zinc-800 border border-zinc-800 bg-zinc-800 w-[70%]'>
                    <div className='p-[4px] bg-[#101114] rounded-full'>
                        <CheckCheck className='text-zinc-200 size-3' />
                    </div>
                    <span className='text-white'>Add custom if want</span>
                </Button>
                <Button variant={"ghost"} className='rounded-[5px] font-sans text-[13px] tracking-[-0.3px] font-medium flex justify-between items-center gap-3 bg-transparent hover:bg-zinc-800 border border-zinc-800 bg-zinc-800 w-[70%]'>
                    <div className='p-[4px] bg-[#101114] rounded-full'>
                        <CheckCheck className='text-zinc-200 size-3' />
                    </div>
                    <span className='text-white'>Click to Generate</span>
                </Button>
                <Button className='rounded-[5px] font-sans text-[13px] tracking-[-0.3px] font-medium flex justify-between items-center gap-3 bg-transparent hover:bg-zinc-800 border border-zinc-800 bg-zinc-800 w-[70%]'>
                    <div className='p-[4px] bg-[#101114] rounded-full'>
                        <CheckCheck className='text-[#f3f3f3] size-3' />
                    </div>
                    <span>Click to Rediect</span>
                </Button>
            </div>
        </div>
    )
}

export default WorkingBox;