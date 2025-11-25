import { Copy, ExternalLink, LoaderCircle, MountainSnow, Trash2 } from "lucide-react";

interface DataItem {
    createAt: Date;
    shortLink: string;
    longLink: string;
    custom: boolean;
    clickCount: number;
}

interface RightDataBarProps {
    isPending: boolean;
    data: DataItem[];
}

const RightDataBar = ({ isPending, data }: RightDataBarProps) => {
    if (isPending) {
        return (
            <div className="bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-center">
                <LoaderCircle size={16} className="animate-spin text-neutral-300" />
            </div>
        )
    }
    return (
        <div className="bg-neutral-900 h-full rounded-xl border border-neutral-800 flex items-center justify-center hidden-scrollbar overflow-y-auto">
            {data?.length === 0 ? (
                <div className="flex gap-2 text-neutral-500">
                    <p className="text-[14px] font-sans font-medium tracking-tight">No Generations</p>
                    <MountainSnow size={17} />
                </div>
            ) : (
                <div className="w-full h-full rounded-[20px] p-1 flex flex-col gap-2">
                    {data?.map((items, idx: number) => (
                        <div key={idx} className="bg-neutral-950 rounded-[10px] px-4 py-4 flex flex-col gap-2">
                            <div className="w-full px-3 py-1 rounded-[5px] bg-neutral-800 text-[13.5px] font-sans">{items?.longLink}</div>
                            <div className="w-full px-3 py-1 rounded-[5px] bg-neutral-800 text-[13.5px] font-sans">{process.env.NEXT_PUBLIC_FRONTEND_URL}/{items?.shortLink}</div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-800">
                                        <Trash2 size={16} />
                                    </div>
                                    <div className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-800">
                                        <ExternalLink size={16} />
                                    </div>
                                    <div className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-800">
                                        <Copy size={16} />
                                    </div>
                                </div>
                                <div className="size-7 text-[14px] rounded-[5px] flex items-center justify-center bg-neutral-800">{items.clickCount}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default RightDataBar;