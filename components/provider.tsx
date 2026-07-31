import React from 'react'
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/components/query-provider";
import { Toaster } from "sonner";
import { neobrutalism } from "@clerk/themes";
import { onBoardUser } from '@/actions/auth';

const Provider = async({ children }: { children: React.ReactNode }) => {
    await onBoardUser(); // Onboard User

    return (
        <ClerkProvider appearance={{
            variables: {
                colorPrimary: "#DB2777",          // Tailwind pink-600 (vibrant primary)
                colorBackground: "#FABCAC",   // Let gradient show through
                colorText: "#A3004C",             // Deep navy (contrast on light pinks)
                colorInputBackground: "rgba(255,255,255,0.6)", // Frosted glass input
                colorInputText: "#1A2A4F",
                colorDanger: "#E11D48",           // Strong rose red for errors
                colorSuccess: "#FBCFE8",          // Soft pink success (gentle tone)
            },

            theme: [neobrutalism],
        }}>
            <QueryProvider>
                {children}
                <Toaster richColors position="bottom-right" />
            </QueryProvider>
        </ClerkProvider>
    )
}

export default Provider;