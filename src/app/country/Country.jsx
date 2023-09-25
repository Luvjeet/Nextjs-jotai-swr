"use client";
import { useEffect } from "react";
import { getCountryData } from "@/store/countryAtom";
import { useAtom } from "jotai";


export default function Country() {
    const [coun, fetchCountry] = useAtom(getCountryData)
    useEffect(() => {
        fetchCountry();
    }, [fetchCountry])

    return (
        <div>
            {JSON.stringify(coun)}
        </div>
    );

}
