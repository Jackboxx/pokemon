import { useState } from "react";
import { BasicButton } from "./components/buttons/basicButton";
import { Pokedex } from "./components/pokemon/pokedex";
import { Team } from "./components/pokemon/team";

const GENERATION_COUNT = 9;
const TEAM_SIZE = 6;

export function App() {
    const [generation, setGeneration] = useState(1);
    const [team, setTeam] = useState([...Array(TEAM_SIZE).fill({ name: '', index: 0 })])

    return (
        <div className="h-screen max-h-screen flex flex-col bg-neutral-700">
            <div className="h-2/6 border-b-4 border-purple-500">
                <Team team={team} />
            </div>
            <div className="h-1/6 flex justify-left lg:justify-center items-center overflow-x-scroll border-b-4 border-purple-500">
                {[...Array(GENERATION_COUNT)].map((_, i) =>
                    <BasicButton
                        key={i}
                        onClick={() => setGeneration(i + 1)}
                        text={`Gen ${i + 1}`}
                        classes={`m-2 ${(i + 1) === generation ? 'border-2 border-neutral-300' : ''}`}
                    />)}
            </div>
            <div className="h-3/6">
                <Pokedex generation={generation} onClick={(name: string, index: number, position: number) => {
                    const member = { name, index }
                    setTeam([...team.slice(0, position), member, ...team.slice(position + 1)])
                }} teamIds={team.map(member => member.index)} />
            </div>
        </div>
    );
}
