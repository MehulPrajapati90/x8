import { CheckCheck } from "lucide-react"
import { Button } from "../ui/button"

interface Analytics {
    linkCount: number,
    clickCount: number
}

const AnalyticsBox = ({ clickCount, linkCount }: Analytics) => {
    return (
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 flex flex-col items-center gap-5 p-4">
            <div className="w-full flex flex-col gap-3">
                <p className="text-3xl font-sans font-medium tracking-[-1px]">Analytics</p>
                <p className="text-[13px] text-neutral-500 font-sans font-normal tracking-tight leading-4">X8 lets you manage, and share your links instantly in one workspace.</p>
            </div>

            <div className='flex flex-col text-[#f3f3f3] gap-2.5 items-start w-full'>
                <Button variant={"ghost"} className='rounded-[5px] font-sans text-[13px] tracking-[-0.3px] font-medium flex justify-between items-center gap-3 bg-transparent hover:bg-zinc-800 border border-zinc-800 bg-zinc-800 w-[70%]'>
                    <div className='size-6 bg-[#101114] rounded-full flex items-center justify-center'>
                        <p className='rounded-[6px] text-center text-[11px]'>{linkCount}</p>
                    </div>
                    <span className='text-white'>Total Links</span>
                </Button>
                <Button variant={"ghost"} className='rounded-[5px] font-sans text-[13px] tracking-[-0.3px] font-medium flex justify-between items-center gap-3 bg-transparent hover:bg-zinc-800 border border-zinc-800 bg-zinc-800 w-[70%]'>
                    <div className='size-6 bg-[#101114] rounded-full flex items-center justify-center'>
                        <p className='rounded-[6px] text-center text-[11px]'>{clickCount}</p>
                    </div>
                    <span className='text-white'>Total Clicks</span>
                </Button>
            </div>
        </div>
    )
}

export default AnalyticsBox