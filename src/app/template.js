"use client";
import { Provider as JotaiProvider } from "jotai";

export default function Template({ children }) {
    return <JotaiProvider>{children}</JotaiProvider>
}
