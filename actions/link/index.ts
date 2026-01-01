"use server";

import { client } from "@/lib/db";
import { getDBUser } from "../auth";
import { nanoid } from "nanoid"
import { currentUser } from "@clerk/nextjs/server";
import { CloudHail } from "lucide-react";

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
            shorturl: createUrl.shortLink,
            message: "Short-Link created successfully",
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to created Short-Link"
        }
    }
};

// Custom
export const createShortLinkWithCustom = async ({ longLink, custom }: createShortLinkWithCustom) => {
    try {
        const { user } = await getDBUser();

        // Check if custom is availaible...
        const isAvailaible = await checkCustom({ custom });

        if (!isAvailaible.success) {
            return {
                success: isAvailaible.success,
                message: isAvailaible.message,
                availaible: false
            };
        }

        const createUrl = await client.links.create({
            data: {
                longLink: longLink,
                shortLink: custom,
                userId: user?.id!,
                custom: true,
            }
        });

        return {
            success: true,
            shorturl: createUrl.shortLink,
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
            },
            select: {
                shortLink: true
            }
        })

        if (check?.shortLink) {
            return {
                success: false,
                error: "custom already exist"
            }
        }

        return {
            success: true,
            message: "custom url is Available",
            shorturl: check?.shortLink
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to check Custom's"
        }
    }
}

export const getAllUrlCreatedByUser = async () => {
    const { user } = await getDBUser();

    if (!user) {
        return {
            success: false,
            message: "User not authenticated"
        }
    };

    try {
        const data = await client.links.findMany({
            where: {
                userId: user?.id
            },
            select: {
                longLink: true,
                shortLink: true,
                custom: true,
                createAt: true,
                clickCount: true
            },
            orderBy: {
                createAt: "desc"
            }
        });

        const totalLinkCount = data.length;
        let totalClickCount = data.reduce((acc, obj) => (acc + obj.clickCount), 0);

        return {
            success: true,
            urls: data,
            analytics: { totalClickCount, totalLinkCount },
            message: "Url's fetched successfully"
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to check Custom's"
        }
    }
};

export const getLinkAnalytics = async () => {
    const { user } = await getDBUser();

    if (!user) {
        return {
            success: false,
            message: "User not authenticated"
        }
    };

    try {
        const analytics = await client.links.findMany({
            where: {
                userId: user?.id
            },
            select: {
                id: true,
                clickCount: true,
            }
        });

        const totalLinkCloud = analytics.length;
        let totalClickCount = analytics.reduce((acc, obj) => (acc + obj.clickCount), 0);

        return {
            success: true,
            analytics: { totalClickCount, totalLinkCloud },
            message: "Analytics fetched successfully",
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to fetch Analytics"
        }
    }
}

export const deleteShortLink = async (shortlink: string) => {
    const { user } = await getDBUser();

    if (!user) {
        return {
            success: false,
            message: "User not authenticated"
        };
    };
    try {
        const deleteOps = await client.links.delete({
            where: {
                shortLink: shortlink
            }
        });

        return {
            success: true,
            message: "Short-Link deleted successfully"
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            error: "failed to delete Short-Link"
        }
    }
}