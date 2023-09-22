"use client";
import { useAtom } from "jotai";
import { countryAtom, updateCountryData } from "../../../store/countryAtom";
import { useAtomDevtools } from "jotai-devtools";
import { useEffect } from "react";

export default function Country() {
    const [country] = useAtom(countryAtom);
    const [, getCountry] = useAtom(updateCountryData);
    useAtomDevtools(countryAtom);

    useEffect(() => {
        getCountry;
        console.log(country);
    }, [country]);

    return (
        <>
            <h2>Show list of Coutries</h2>
            <button className="bg-white text-black px-20 py-4" onClick={getCountry}>Set krde</button>
            <h3>
                yaha dikha de data
                {country?.length > 0 ? (JSON.stringify(country)) : null}
            </h3>
        </>
    );
}
