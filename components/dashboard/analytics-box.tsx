interface Analytics {
    linkCount: number,
    clickCount: number
}

const AnalyticsBox = ({ clickCount, linkCount }: Analytics) => {
    return (
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 flex flex-col items-center p-4">
            <div className="w-full flex flex-col gap-3">
                <p className="text-3xl font-sans font-medium tracking-[-1px]">Analytics</p>
                <p className="text-[13px] text-neutral-500 font-sans font-normal tracking-tight leading-4">X8 lets you manage, and share your links instantly in one workspace.</p>
            </div>

            <div className="w-full flex flex-col gap-3">
                <div className='w-full text-neutral-300/90 py-5 flex flex-col gap-2'>
                    <div className='flex gap-2 bg-[#101114] p-2 rounded-[10px]'>
                        <p className='w-[30%] py-2 bg-neutral-800 rounded-[6px] text-center'>{clickCount}</p>
                        <p className='px-5 py-2 bg-neutral-800 rounded-[6px] w-full text-[14px] font-sans font-medium tracking-tight'>Total Clicks</p>
                    </div>
                    <div className='flex gap-2 bg-[#101114] p-2 rounded-[10px]'>
                            <p className='w-[30%] py-2 bg-neutral-800 rounded-[6px] text-center'>{linkCount}</p>
                        <p className='px-5 py-2 bg-neutral-800 rounded-[6px] w-full text-[14px] font-sans font-medium tracking-tight'>Total Links</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsBox