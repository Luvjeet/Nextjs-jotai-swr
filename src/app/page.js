import { countryAtom } from "../../store/countryAtom";
import { useHydrateAtoms } from "jotai/utils";


export default function Home() {
    useHydrateAtoms([[countryAtom]]);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2 className="text-6xl font-black">Hello</h2>
        </main>

    )
}
