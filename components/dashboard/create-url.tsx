"use client";

import { useCreateShortLink, useCreateShortLinkWithCustom } from "@/hooks/ts-query/links";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { BatteryCharging, CheckCheck, Copy, Share } from "lucide-react";
import { Separator } from "../ui/separator";
import Hint from "../ui/hint";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateUrl = () => {
    const router = useRouter();
    const [link, setLink] = useState<string>("");
    const [custom, setCustom] = useState<string>("");
    const [shortLink, setShortLink] = useState<string>("");
    const [copy, setCopy] = useState<boolean>(false);

    const { mutateAsync, isPending } = useCreateShortLink();
    const { mutateAsync: mutateAsynCustoms, isPending: isPendingCustoms } = useCreateShortLinkWithCustom();

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
        let response;

        if (custom) {
            response = await mutateAsynCustoms({ custom, longLink: link });
        } else {
            response = await mutateAsync({ longLink: link });
        }

        if (response?.success) {
            setShortLink(response?.shorturl!)
            toast.success(response.message);
        } else {
            toast.error(response.error)
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
                                    <p className="text-[15px] font-sans tracking-tight font-medium">{process.env.NEXT_PUBLIC_FRONTEND_URL}/{shortLink}</p>
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

                        <Hint label="Share" align="center" asChild>
                            <Link href={`${shortLink ? process.env.NEXT_PUBLIC_FRONTEND_URL + '/' + shortLink : ""}`} target="_blank" className="bg-blue-900 p-2 rounded-full border-[0.5px] border-blue-300 hover:bg-blue-800 transition-all ease-in-out duration-300">
                                <Share size={16} className="text-blue-300" />
                            </Link>
                        </Hint>
                    </div>
                    <Input type="url" value={link} onChange={(e) => setLink(e.target.value)} placeholder="add your link" className="w-[60%] font-sans tracking-[-0.2px] px-3 focus-visible:border-[#f3f3f322] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none bg-transparent rounded-[30px] border border-[#f3f3f322]" />
                    <Input type="text" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="add your customs" className="w-[60%] font-sans tracking-[-0.2px] px-3 focus-visible:border-[#f3f3f322] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none bg-transparent rounded-[30px] border border-[#f3f3f322]" />
                </div>

                <div className="flex gap-2 font-sans tracking-tight">
                    <Button type="submit" disabled={isPending || isPendingCustoms || !link} className="bg-neutral-300 text-black rounded-full transition-all ease-in-out duration-200 hover:bg-neutral-400">Generate</Button>
                    <Button type="button" onClick={handleClear} disabled={isPending || isPendingCustoms} className="bg-red-500/40 text-red-200 rounded-full px-7 transition-all ease-in-out duration-200 hover:bg-red-500/30">Clear</Button>
                </div>
            </form>
        </div>
    )
};

export default CreateUrl