import { useState } from 'react';
import { BasicButton } from '../buttons/basicButton';

export function MemberPopup({
  initialName,
  memberIndex,
  teamSize,
  onConfirm,
  onCancel,
}: {
  initialName: string;
  memberIndex: number;
  teamSize: number;
  onConfirm: (name: string, index: number, position: number) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(1);
  return (
    <>
      <div className="blur-6xl fixed z-40 flex h-screen w-screen items-center justify-center bg-neutral-800 opacity-80" />
      <div className="fixed z-50 flex h-screen w-screen items-center justify-center">
        <div className="m-12 flex min-w-[400px] flex-col gap-6 rounded-xl bg-neutral-700 p-8 text-lg text-white opacity-100">
          <div className="flex justify-center">
            <div className="relative mb-3 w-full xl:w-96">
              <input
                type="text"
                className="min-h-[auto] w-full rounded border-[1px] bg-neutral-700 p-2 outline-none focus:border-purple-500"
                id="nickName"
                placeholder="Nickname..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </div>
          </div>
          <div className="relative h-10 w-full min-w-[200px]">
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setPosition(+e.target.value)
              }
              className="min-h-[auto] w-full rounded border-[1px] bg-neutral-700 p-2 outline-none focus:border-purple-500"
            >
              {[...Array(teamSize)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div className="flex h-full items-center justify-between">
            <span className="text-4xl">{name}</span>
            <img
              className="h-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${memberIndex}.png`}
            />
          </div>
          <BasicButton
            text="Confirm"
            onClick={() => onConfirm(name, memberIndex, position - 1)}
          />
          <BasicButton
            text="Cancel"
            classes="rounded-lg bg-gradient-to-bl from-red-600 to-red-500 "
            onClick={onCancel}
          />
        </div>
      </div>
    </>
  );
}
