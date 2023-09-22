import { atom, createStore } from "jotai";

export const countryAtom = atom([]);

async function getCountryData() {
    const resp = await fetch("https://restcountries.com/v3.1/name/eesti");
    const data = await resp.json();
    return data;
}


export const updateCountryData = atom(null, async (get, set, update) => {
    const resp = await getCountryData();
    console.log("heelo");
    set(countryAtom, (prev) => [...prev, resp]);
})


