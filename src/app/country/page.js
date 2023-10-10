import { Suspense } from "react";
import Country from "./Country";

export default function page() {
    const a = 12;

    return (
        <Suspense fallback={<div>...loading</div>}>
            <Country />
        </Suspense>
    );
}
