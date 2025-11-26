"use state";

import { CheckCheck, Copy } from "lucide-react";
import Hint from "../ui/hint";
import { toast } from "sonner";
import { useState } from "react";

interface CopyLinkProps {
    shortlink: string
}

const CopyLink = ({ shortlink }: CopyLinkProps) => {
    const [copy, setCopy] = useState<boolean>(false);
    const handleCopy = () => {
        if (!shortlink) {
            return toast.error("Nothing to Copy");
        }
        setCopy(true);
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_FRONTEND_URL + '/' + shortlink);

        toast.success("Copied Successfully");

        const timer = setTimeout(() => {
            setCopy(false);
        }, 2000);

        return () => clearTimeout(timer);
    }
    return (
        <Hint asChild label="Copy" side="bottom">
            {copy ? (
                <CheckCheck onClick={handleCopy} size={16} className="text-green-300" />
            ) : (
                <Copy onClick={handleCopy} size={16} className="text-green-300" />
            )}
        </Hint>
    )
}

export default CopyLink;