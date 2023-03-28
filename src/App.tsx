import { useState } from 'react';
import { BasicButton } from './components/buttons/basicButton';
import { Pokedex } from './components/pokemon/pokedex';
import { Team } from './components/pokemon/team';
import { Member } from './components/pokemon/teamMember';
import { MemberPopup } from './components/popups/memberPopup';

const GENERATION_COUNT = 9;
const TEAM_SIZE = 6;

export function App() {
  const [generation, setGeneration] = useState(1);
  const [team, setTeam] = useState<Member[]>(
    JSON.parse(localStorage.getItem('team') ?? 'null') ?? [
      ...Array(TEAM_SIZE).fill({ name: '', index: 0 }),
    ]
  );
  const [popupShown, setPopupShown] = useState(false);
  const [popupInitialName, setPopupInitialName] = useState('');
  const [popupPokemonIndex, setPopupPokemonIndex] = useState(0);

  return (
    <div className="flex h-screen max-h-screen flex-col bg-neutral-700">
      <div className="h-2/6 border-b-4 border-purple-500">
        <Team team={team} />
      </div>
      <div className="justify-left flex h-1/6 items-center overflow-x-scroll border-b-4 border-purple-500 lg:justify-center">
        {[...Array(GENERATION_COUNT)].map((_, i) => (
          <BasicButton
            key={i}
            onClick={() => setGeneration(i + 1)}
            text={`Gen ${i + 1}`}
            classes={`m-2 ${
              i + 1 === generation ? 'border-2 border-neutral-300' : ''
            }`}
          />
        ))}
      </div>
      <div className="h-3/6">
        <Pokedex
          generation={generation}
          onClick={(name: string, index: number) => {
            setPopupShown(true);
            setPopupInitialName(name);
            setPopupPokemonIndex(index);
          }}
          teamIds={team.map((member) => member.index)}
        />
      </div>
      {popupShown && (
        <MemberPopup
          initialName={popupInitialName}
          memberIndex={popupPokemonIndex}
          teamSize={TEAM_SIZE}
          onConfirm={(name: string, index: number, position: number) => {
            const member = { name, index };
            const actualPosition = Math.max(
              Math.min(position, 0),
              TEAM_SIZE - 1
            );

            const teamArray = [
              ...team.slice(0, actualPosition),
              member,
              ...team.slice(actualPosition + 1),
            ];
            localStorage.setItem('team', JSON.stringify(teamArray));
            setTeam(teamArray);
            setPopupShown(false);
          }}
        />
      )}
    </div>
  );
}
