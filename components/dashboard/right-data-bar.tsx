import { MountainSnow } from "lucide-react";
import CopyLink from "./copy-link";
import ShareLink from "./share-link";
import DeleteLink from "./delete-link";
import { Skeleton } from "../ui/skeleton";

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
            <RightDataBarSkeleton />
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
                <div className="w-full h-full rounded-[20px] p-1 flex flex-col gap-2 text-white">
                    {data?.map((items, idx: number) => (
                        <div key={idx} className="bg-neutral-950 rounded-[10px] px-4 py-4 flex flex-col gap-2">
                            <div className="w-full px-3 py-1 rounded-[5px] bg-neutral-800 text-[13px] font-mono font-medium tracking-[-0.3px] line-clamp-1">{items?.longLink}</div>
                            <div className="w-full px-3 py-1 rounded-[5px] bg-neutral-800 text-[13px] font-mono font-medium tracking-[-0.3px] line-clamp-1">{process.env.NEXT_PUBLIC_FRONTEND_URL}/{items?.shortLink}</div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="size-7 rounded-[5px] flex items-center justify-center bg-red-800/60 hover:bg-red-800/50">
                                        <DeleteLink shortlink={items?.shortLink} />
                                    </div>
                                    <div className="size-7 rounded-[5px] flex items-center justify-center bg-yellow-800/60">
                                        <ShareLink shortlink={items?.shortLink} />
                                    </div>
                                    <div className="size-7 rounded-[5px] flex items-center justify-center bg-green-800/60">
                                        <CopyLink shortlink={items?.shortLink} />
                                    </div>
                                </div>
                                <div className="size-7 text-[14px] rounded-[5px] flex items-center justify-center bg-white/30 text-white font-semibold">{items.clickCount}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const RightDataBarSkeleton = () => {
    return (
        <div className="bg-neutral-900 w-full min-h-full rounded-xl border border-neutral-800 flex items-center flex-col gap-3 p-2">
            <Skeleton className="h-35 w-full bg-neutral-800 p-3.5 flex gap-2 flex-col items-center">
                <div className="w-full flex flex-col items-center gap-2">
                    <Skeleton className="w-full px-3 py-3.5 rounded-[5px] bg-neutral-600 text-[13px] " />
                    <Skeleton className="w-full px-3 py-3.5 rounded-[5px] bg-neutral-600 text-[13px] " />
                </div>
                <div className="flex gap-2 justify-between w-full">
                    <div className="flex gap-2 items-center">
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                    </div>
                    <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                </div>
            </Skeleton>
            <Skeleton className="h-35 w-full bg-neutral-800 p-3.5 flex gap-2 flex-col items-center">
                <div className="w-full flex flex-col items-center gap-2">
                    <Skeleton className="w-full px-3 py-3.5 rounded-[5px] bg-neutral-600 text-[13px] " />
                    <Skeleton className="w-full px-3 py-3.5 rounded-[5px] bg-neutral-600 text-[13px] " />
                </div>
                <div className="flex gap-2 justify-between w-full">
                    <div className="flex gap-2 items-center">
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                    </div>
                    <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                </div>
            </Skeleton>
            <Skeleton className="h-35 w-full bg-neutral-800 p-3.5 flex gap-2 flex-col items-center">
                <div className="w-full flex flex-col items-center gap-2">
                    <Skeleton className="w-full px-3 py-3.5 rounded-[5px] bg-neutral-600 text-[13px] " />
                    <Skeleton className="w-full px-3 py-3.5 rounded-[5px] bg-neutral-600 text-[13px] " />
                </div>
                <div className="flex gap-2 justify-between w-full">
                    <div className="flex gap-2 items-center">
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                        <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                    </div>
                    <Skeleton className="size-7 rounded-[5px] flex items-center justify-center bg-neutral-600/60" />
                </div>
            </Skeleton>
        </div>
    )
}

export default RightDataBar;