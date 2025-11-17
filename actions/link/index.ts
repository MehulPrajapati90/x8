"use server";

import { client } from "@/lib/db";
import { getDBUser } from "../auth";
import { nanoid } from "nanoid"
import { currentUser } from "@clerk/nextjs/server";

// Non-Custom
export const createShortLink = async ({ longLink }: CreateShortLink) => {
    try {
        const { user } = await getDBUser();
        const id = nanoid(7);
        const createUrl = await client.links.create({
            data: {
                longLink: longLink,
                shortLink: id,
                userId: user?.id!
            }
        });

        return {
            success: true,
            message: "Short-Link created successfully",
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to created Short-Link"
        }
    }
}

// Custom
export const createShortLinkWithCustom = async ({ longLink, custom }: createShortLinkWithCustom) => {
    try {
        const { user } = await getDBUser();
        const createUrl = await client.links.create({
            data: {
                longLink: longLink,
                shortLink: custom,
                userId: user?.id!
            }
        });

        return {
            success: true,
            message: "Short-Link created successfully",
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to created Short-Link"
        }
    }
}

export const checkCustom = async ({ custom }: checkCustomProps) => {
    const user = await currentUser();

    if (!user) {
        return {
            success: false,
            message: "User not authenticated"
        }
    }
    try {
        const check = await client.links.findFirst({
            where: {
                shortLink: custom
            }
        })

        if (check) {
            return {
                success: false,
                message: "custom already exist"
            }
        }

        return {
            success: true,
            message: "custom url is Available"
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to check Custom's"
        }
    }
}