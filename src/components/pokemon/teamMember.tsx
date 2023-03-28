export type Member = {
  name: string;
  index: number;
};
export function TeamMember({ member }: { member: Member }) {
  const { name, index } = member;
  return (
    <div className="flex h-full w-full items-center justify-center odd:bg-neutral-600 even:bg-neutral-700 lg:flex-col ">
      <span className="text-2xl text-white">{name}</span>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
      />
    </div>
  );
}
