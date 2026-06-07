const cache = {};

export async function getPokemonDetail(id) {
  try {
    if (cache[id]) {
      return cache[id];
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
    if (!response.ok) {
      throw new Error("No se pudo obtener el detalle del Pokémon");
    }

    const data = await response.json();

    const detail = {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      types: data.types.map(t => t.type.name),
      height: data.height,
      weight: data.weight,
      stats: {
        hp: data.stats[0]?.base_stat || 0,
        attack: data.stats[1]?.base_stat || 0,
        defense: data.stats[2]?.base_stat || 0,
        spAtk: data.stats[3]?.base_stat || 0,
        spDef: data.stats[4]?.base_stat || 0,
        speed: data.stats[5]?.base_stat || 0
      },
      abilities: data.abilities.map(a => a.ability.name),
      moves: data.moves.slice(0, 4).map(m => m.move.name)
    };

    cache[id] = detail;
    return detail;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener detalles del Pokémon");
  }
}

export async function getPokemonsByType(type) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    
    if (!response.ok) {
      throw new Error("No se encontró el tipo");
    }

    const data = await response.json();
    return data.pokemon.map(p => {
      const id = p.pokemon.url.split("/").filter(Boolean).pop();
      return {
        id,
        name: p.pokemon.name,
        type
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const POKEMON_TYPES = [
  "normal", "fire", "water", "grass", "electric",
  "ice", "fighting", "poison", "ground", "flying",
  "psychic", "bug", "rock", "ghost", "dragon",
  "dark", "steel", "fairy"
];

export const TYPE_COLORS = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC"
};
