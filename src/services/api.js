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

    const pokemons = data.results.map((pokemon) => {

      const id = pokemon.url
        .split("/")
        .filter(Boolean)
        .pop();

      return {
        id,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        species: "Pokémon"
      };

    });

    return pokemons;

  } catch (error) {

    console.error(error);

    throw new Error(
      "Error al conectar con la API"
    );

  }

}