import { client } from "@/lib/db";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

interface ParamsInterface {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: ParamsInterface) {
    try {
        const { id } = await params;

        const link = await client.links.findUnique({
            where: { shortLink: id },
        });

        if (!link) {
            return NextResponse.json({
                success: false,
                error: "Invalid Link or Link is Broken",
            });
        }

        await client.links.update({
            where: { shortLink: id },
            data: { clickCount: { increment: 1 } },
        });

        const long = link?.longLink;

        if (long.startsWith("http://") || long.startsWith("https://")) {
            return redirect(long);
        }

        return redirect(`/${long}`);
    } catch (e: any) {
        // Let Next.js handle redirect's internal error
        if (e?.digest?.startsWith("NEXT_REDIRECT")) {
            throw e;
        }

        console.error("Unexpected redirect error:", e);
        return NextResponse.json({
            success: false,
            error: "Something went wrong while redirecting",
        });
    }
}