"use server"

import { client } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onBoardUser = async () => {
    try {
        const user = await currentUser();

        if (!user) {
            return {
                succes: false,
                error: "No Authenticated user found"
            }
        }

        const { id, firstName, lastName, imageUrl, emailAddresses } = user;

        const Currentuser = await client.user.upsert({
            where: {
                clerkId: id
            },
            update: {
                firstName: firstName!,
                lastName: lastName!,
                imageUrl: imageUrl!,
                email: emailAddresses[0]?.emailAddress || "",
            },
            create: {
                clerkId: id,
                firstName: firstName!,
                lastName: lastName!,
                imageUrl: imageUrl!,
                email: emailAddresses[0]?.emailAddress || "",
            }
        })

        return {
            success: true,
            user: Currentuser,
            message: "User onBoarded successfully"
        }
    } catch (e) {
        console.error("Error Onboarding User!", e);
        return {
            success: false,
            error: "Failed to onboard user!"
        }
    }
}

export const getDBUser = async () => {
    const user = await currentUser();

    if (!user) {
        return {
            success: false,
            message: "User not authenticated"
        }
    }
    try {
        const dbUser = await client.user.findUnique({
            where: {
                clerkId: user?.id
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                imageUrl: true,
                email: true,
                createAt: true,
            }
        });

        return {
            success: true,
            user: dbUser,
            message: "user fetched successfully"
        }
    } catch (e) {
        console.error("Error fetch User!", e);
        return {
            success: false,
            error: "Failed to fetch user!"
        }
    }
}