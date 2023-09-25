import { Suspense } from "react";
import Country from "./Country";

export default function page() {

    return (
        <Suspense fallback={<div>...loading</div>}>
            <Country />
        </Suspense>
    );
}
