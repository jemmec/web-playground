import { ReactNode } from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export function RootLayout({ children }: { children: ReactNode }) {
    return <>
        <div className={inter.className}>
            {children}
        </div>
    </>
}