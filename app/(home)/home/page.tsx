"use client";

import { useOnBoardUser } from "@/hooks/ts-query/auth";
import { useEffect } from "react";

const HomePage = () => {
    const { mutateAsync, isPending, data } = useOnBoardUser();

    useEffect(() => {
        mutateAsync();
    }, [])

    if (isPending) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>HomePage</div>
    )
}

export default HomePage;