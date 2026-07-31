"use client";

import { ExternalLink } from "lucide-react";
import Hint from "../ui/hint";
import Link from "next/link";

interface ShareLinkProps {
    shortlink: string
}

const ShareLink = ({ shortlink }: ShareLinkProps) => {
    return (
        <Hint label="Redirect from here" side="bottom">
            <Link href={`${shortlink ? process.env.NEXT_PUBLIC_FRONTEND_URL + '/' + shortlink : ""}`} target="_blank" prefetch={false}>
                <ExternalLink size={16} className="text-yellow-300" /></Link>
        </Hint>
    )
}

export default ShareLink;