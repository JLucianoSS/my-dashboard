import { PokemonCard } from "../components/PokemonCard";
import { SimplePokemon } from "../interfaces/simple-pokemons";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={ pokemon.id } pokemon={pokemon}/>
      ))}
    </div>
  );
};
