import { useEffect, useState } from 'react';
import { Pokemon } from './pokemon';

export type PokemonEntry = {
  name: string;
  url: string;
};

export type Generation = {
  main_region: {
    name: string;
    url: string;
  };
  pokemon_species: PokemonEntry[];
};

export function Pokedex({
  generation,
  onClick,
  teamIds,
}: {
  generation: number;
  onClick: (name: string, index: number) => void;
  teamIds: number[];
}) {
  const [pokedex, setPokedex] = useState<Generation | undefined>(undefined);

  const fetchPokemon = async () => {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/generation/${generation}`
      );

      const pokemon = await result.json();
      return pokemon;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };

  useEffect(() => {
    setPokedex(undefined);
    fetchPokemon().then((data) => setPokedex(data));
  }, [generation]);

  pokedex?.pokemon_species.sort((p1, p2) => {
    const n1 = parseInt(p1.url.split('/').at(-2) ?? '');
    const n2 = parseInt(p2.url.split('/').at(-2) ?? '');
    return n1 - n2;
  });

  // TODO: Add swag loading effect based on scroll
  return (
    <div className="flex h-full flex-wrap justify-center overflow-y-scroll">
      {pokedex?.pokemon_species.map((p, i) => {
        const index = parseInt(p.url.split('/').at(-2) ?? '');
        return (
          <Pokemon
            pokemon={{
              name: p.name,
              isInTeam: teamIds.includes(index),
              index: index,
            }}
            onClick={onClick}
            key={i}
          />
        );
      })}
    </div>
  );
}
