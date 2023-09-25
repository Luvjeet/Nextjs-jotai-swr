"use client";
import { useAtom } from "jotai";
import { getCountryData } from "@/store/countryAtom";

export default function() {
    const [coutry] = useAtom(getCountryData);

    return (
        <>
            <h2>Peru ka data</h2>
            {JSON.stringify(coutry)}
        </>
    );
}
