"use client";

import { Trash2 } from "lucide-react";
import Hint from "../ui/hint";
import { useDeleteShortLink } from "@/hooks/ts-query/links";
import { toast } from "sonner";

interface DeleteLinkProps {
    shortlink: string
}

const DeleteLink = ({ shortlink }: DeleteLinkProps) => {
    const { mutateAsync, isPending } = useDeleteShortLink();
    const handleDelete = async () => {
        const shortfragment = shortlink?.split('/')?.pop();

        if (!shortfragment) {
            return toast.error("failed to delete");
        }

        const response = await mutateAsync(shortfragment);

        if (response?.success) {
            return toast.success(response?.message);
        } else {
            return toast.success(response?.error);
        }
    }
    return (
        <Hint asChild label="Delete" side="bottom">
            <Trash2 onClick={handleDelete} size={16} className="text-red-300" />
        </Hint>
    )
}

export default DeleteLink;