export type Pokemon = {
    name: string;
    isInTeam: boolean;
    index: number;
}

export function Pokemon({ pokemon, onClick }: { pokemon: Pokemon, onClick: (name: string, index: number, position: number) => void }) {
    const { index, name, isInTeam } = pokemon;
    const fullName = firstLetterToUpper(name);
    const rand = Math.floor(Math.random() * 6);
    return (
        <div onClick={() => onClick(fullName, index, rand)} className="relative flex justify-center items-center duration-200">
            <img
                className="m-4 flex min-h-[145px] min-w-[145px] lg:min-h-[200px] lg:min-w-[200px] z-10 peer hover:opacity-30 
            rounded-xl border-4 border-purple-500 bg-neutral-600 p-2 text-xl text-white"

                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
            />
            <span className="absolute text-white text-3xl opacity-0 duration-200 peer-hover:opacity-100">{fullName}</span>
            {isInTeam && <img className="absolute top-8 right-8 z-10" src="https://icon-library.com/images/pokeball-desktop-icon/pokeball-desktop-icon-8.jpg" width={20} height={20} />}
        </div>
    );
}

function firstLetterToUpper(name: string) {
    return `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;
}
