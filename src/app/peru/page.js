"use client";
import { useAtom } from "jotai";
import { countryAtom } from "../../../store/countryAtom";


export default function() {
    const coutry = useAtom(countryAtom);
    return (
        <>
            <h2>Peru ka data</h2>
            {JSON.stringify(coutry)}
        </>
    );
}
