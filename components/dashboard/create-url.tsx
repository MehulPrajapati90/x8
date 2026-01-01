"use client";

import { useCheckCustom, useCreateShortLink, useCreateShortLinkWithCustom } from "@/hooks/ts-query/links";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { BatteryCharging, CheckCheck, Copy, MoveUpRight, Share, Timer, X } from "lucide-react";
import { Separator } from "../ui/separator";
import Hint from "../ui/hint";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";

const CreateUrl = () => {
    const router = useRouter();
    const [link, setLink] = useState<string>("");
    const [custom, setCustom] = useState<string>("");
    const [customAvailaible, setCustomAvailailble] = useState<boolean | null>(null);
    const [shortLink, setShortLink] = useState<string>("");
    const [copy, setCopy] = useState<boolean>(false);

    const { mutateAsync, isPending } = useCreateShortLink();
    const { mutateAsync: mutateAsynCustoms, isPending: isPendingCustoms } = useCreateShortLinkWithCustom();
    const { mutateAsync: checkCustomAsync, isPending: checkCustomPending } = useCheckCustom();

    const handleClear = () => {
        if (link || custom || shortLink) {
            toast.success("Cleared!");
        }
        setLink("");
        setCustom("");
        setShortLink("");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (custom && customAvailaible) {
            const res = await mutateAsynCustoms({ longLink: link.trim(), custom: custom.trim() })

            if (res.success) {
                toast.success(res.message);
                setCustom("");
                setShortLink(res.shorturl ?? "");
            } else {
                toast.error(res.error)
            }
        } else {
            const res = await mutateAsync({ longLink: link.trim() });

            if (res.success) {
                toast.success(res.message);

                setShortLink(res.shorturl ?? "");
            } else {
                toast.error(res.error)
            }
        }
    }

    const handleCopy = () => {
        if (!shortLink) {
            return toast.error("Nothing to Copy");
        }
        setCopy(true);
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_FRONTEND_URL + '/' + shortLink);

        toast.success("Copied Successfully");

        const timer = setTimeout(() => {
            setCopy(false);
        }, 2000);

        return () => clearTimeout(timer);
    }

    const handleRedirect = () => {
        if (!shortLink) {
            return toast.error("Nothing to Redirect");
        }
        toast.success("Successfully Redirect");
        router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL + '/' + shortLink}`);
    }

    const handleCustoms = async () => {
        const res = await checkCustomAsync(custom.trim());

        if (res.success) {
            setCustomAvailailble(true);
        } else {
            setCustomAvailailble(false)
        }
    }

    useEffect(() => {
        if (!custom) return;

        const timer = setTimeout(() => {
            handleCustoms();
        }, 500)

        return () => clearTimeout(timer);
    }, [custom]);

    return (
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 flex flex-col items-center p-4">
            <div className="w-full">
                <p className="text-3xl font-sans font-medium tracking-[-1px]">Generate Links</p>
                <p className="text-[13px] text-neutral-500 font-sans font-normal tracking-tight">X8 lets you shorten, manage, and share your links instantly with clean, smart simplicity.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full pt-12 flex flex-col gap-5">
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center w-full gap-2">
                        <div className="w-[50%] bg-neutral-300 h-9 rounded-full text-neutral-900 flex items-center px-5 justify-start gap-4">
                            <div className="flex items-center h-full gap-2">
                                <BatteryCharging />
                                <Separator orientation="vertical" className="bg-black" />
                            </div>
                            <div className="flex items-center">
                                {shortLink ? (
                                    <p className="text-[14px] font-sans tracking-[-0.3px] font-medium">{process.env.NEXT_PUBLIC_FRONTEND_URL}/{shortLink}</p>
                                ) : (
                                    <i className="text-[15px] font-sans font-normal tracking-tight text-neutral-500">{'your generated link'}</i>
                                )}
                            </div>
                        </div>

                        <Hint label="Copy" asChild>
                            <div onClick={handleCopy} className="bg-green-900 p-2 rounded-full border-[0.5px] border-green-300 hover:bg-green-800 transition-all ease-in-out duration-300">
                                {copy ? (
                                    <CheckCheck size={16} className="text-green-300" />
                                ) : (
                                    <Copy size={16} className="text-green-300" />
                                )}
                            </div>
                        </Hint>

                        <Hint label="Redirect" align="center" asChild>
                            <div onClick={handleRedirect} className="bg-blue-900 p-2 rounded-full border-[0.5px] border-blue-300 hover:bg-blue-800 transition-all ease-in-out duration-300">
                                <MoveUpRight size={16} className="text-blue-300" />
                            </div>
                        </Hint>
                    </div>
                    <Input type="url" value={link} onChange={(e) => setLink(e.target.value)} placeholder="add your link" className="w-[60%] font-sans font-medium tracking-[-0.3px] px-3 focus-visible:border-[#f3f3f322] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none bg-transparent rounded-[30px] border border-[#f3f3f322]" />

                    <div className="relative">
                        <Input type="text" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="add your customs" className="w-[60%] font-sans tracking-[-0.2px] px-3 focus-visible:border-[#f3f3f322] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none bg-transparent rounded-[30px] border border-[#f3f3f322]" />

                        {/* New logic */}
                        {checkCustomPending && custom && (
                            <div className="size-5 flex items-center justify-center absolute top-2 left-[56%]">
                                <Spinner />
                            </div>
                        )}

                        {!checkCustomPending && custom && customAvailaible === true && (
                            <div className="size-5 flex items-center justify-center bg-green-400/40 rounded-full absolute top-2 left-[56%]">
                                <CheckCheck size={13} className="text-white" />
                            </div>
                        )}

                        {!checkCustomPending && custom && customAvailaible === false && (
                            <div className="size-5 flex items-center justify-center bg-red-400/40 rounded-full absolute top-2 left-[56%]">
                                <X size={13} className="text-white" />
                            </div>
                        )}

                    </div>
                </div>

                <div className="flex gap-2 font-sans tracking-tight">
                    <Button type="submit" disabled={isPending || checkCustomPending || isPendingCustoms || !link || customAvailaible === false} className="bg-neutral-300 text-black rounded-full transition-all ease-in-out duration-200 hover:bg-neutral-400">Generate</Button>
                    <Button type="button" onClick={handleClear} disabled={isPending || checkCustomPending} className="bg-red-500/40 text-red-200 rounded-full px-7 transition-all ease-in-out duration-200 hover:bg-red-500/30">Clear</Button>
                </div>
            </form>
        </div>
    )
};

export default CreateUrl;