import { useState } from "react";
import { BasicButton } from "./components/buttons/basicButton";
import { Pokedex } from "./components/pokemon/pokedex";

const GENERATION_COUNT = 9;

export function App() {
    const [generation, setGeneration] = useState(1);
    // TODO: Add team component and team based features
    return (
        <div className="h-screen max-h-screen flex flex-col">
            <div className="h-2/6 bg-neutral-600 border-b-4 border-zinc-700"></div>
            <div className="h-1/6 flex justify-left lg:justify-center items-center overflow-x-scroll bg-neutral-600 border-b-4 border-zinc-700">
                {[...Array(GENERATION_COUNT)].map((_, i) =>
                    <BasicButton
                        key={i}
                        onClick={() => setGeneration(i + 1)}
                        text={`Gen ${i + 1}`}
                        classes={`m-2 ${(i + 1) === generation ? 'border-2 border-neutral-300' : ''}`}
                    />)}
            </div>
            <div className="bg-neutral-500 h-3/6">
                <Pokedex generation={generation} teamIds={[1, 6]} />
            </div>
        </div>
    );
}
