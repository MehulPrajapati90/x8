import { ArrowRight } from 'lucide-react'
import React from 'react'

const TextTemplate = () => {
  return (
    <div className='flex justify-center items-center gap-2 bg-[#1a0209] border border-zinc-600 px-5 py-[5px] rounded-[15px]'>
      <div className='bg-red-500 animate-pulse size-[10px] rounded-full' />
      <p className='text-[13px] font-normal font-sans text-white tracking-[-0.3px]'>Make the shortest and smartest links possible for free with X8 !</p>
      <ArrowRight size={15} strokeWidth={2.5} className='text-yellow-400 animate-bounce' />
    </div>
  )
}

export default TextTemplate;