import { Member, TeamMember } from "./teamMember";

export function Team({ team }: { team: Member[] }) {
    return <div className="h-full grid grid-cols-2 lg:grid-cols-6 ">
        {team.map(member => <TeamMember member={member} />)}
    </div>
}
