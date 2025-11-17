import { client } from "@/lib/db";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

interface ParamsInterface {
    params: Promise<{ id: string }>
}

export async function GET(req: NextRequest, { params }: ParamsInterface) {
    const { id } = await params;
    try {
        const getMetaData = await client.links.findFirst({
            where: {
                shortLink: id
            }
        })

        if (!getMetaData) {
            return NextResponse.json({
                success: false,
                error: "Invalid Link or Link is Broken"
            })
        }

        const updateCountOfUrl = await client.links.update({
            where: {
                shortLink: id
            },
            data: {
                clickCount: { increment: 1}
            }
        })

        const longLink = getMetaData?.longLink;

        if (longLink.startsWith("http://") || longLink.startsWith("https://")) {
            return redirect(longLink);
        }

        return redirect(`/${longLink}`);

    } catch (e) {
        console.error("Error redirecting User!", e);
        NextResponse.json({
            success: false,
            error: "Failed to redirect user!"
        })
    }
}