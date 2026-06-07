const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

export async function getCharacters() {

  try {

    const response = await fetch(API);

    if (!response.ok) {
      throw new Error(
        "No se pudieron obtener los Pokémon"
      );
    }

    const data = await response.json();

    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {

        const id = pokemon.url
          .split("/")
          .filter(Boolean)
          .pop();

        try {
          const detailResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const detailData = await detailResponse.json();

          return {
            id,
            name: pokemon.name,
            image: detailData.sprites.other?.["official-artwork"]?.front_default || 
                   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            species: "Pokémon",
            types: detailData.types.map(t => t.type.name),
            generation: Math.ceil(id / 151)
          };
        } catch {
          return {
            id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            species: "Pokémon",
            types: [],
            generation: Math.ceil(id / 151)
          };
        }

      })
    );

    return pokemons;

  } catch (error) {

    console.error(error);

    throw new Error(
      "Error al conectar con la API"
    );

  }

}