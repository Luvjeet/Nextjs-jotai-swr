import { atom } from "jotai";

const countryAtom = atom([]);

export const getCountryData = atom(
    async (get) => get(countryAtom),
    async (_get, set) => {
        const resp = await fetch("https://httpbin.org/delay/2");
        set(countryAtom, await resp.json());
    }
);


