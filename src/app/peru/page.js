"use client";
import { useAtom } from "jotai";
import { getCountryData } from "@/store/countryAtom";
import { useEffect } from "react";

export default function() {
    const [coutry] = useAtom(getCountryData)

    return (
        <>
            <h2>Peru ka data</h2>
        </>
    );
}
