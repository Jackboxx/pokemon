export type Member = {
    name: string;
    index: number
}
export function TeamMember({ member }: { member: Member }) {
    const { name, index } = member;
    return <div className="w-full flex lg:flex-col justify-center items-center h-full even:bg-neutral-700 odd:bg-neutral-600 ">
        <span className="text-white text-2xl">{name}</span>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} />
    </div>
}
