import { Character } from "../models/Character";

export class CharacterController {
  constructor(characterService) {
    this.characterService = characterService;
  }

  async getCharacters() {
    try {
      const data = await this.characterService.fetchCharacters();
      return data.map(item =>
        new Character(
          item.id,
          item.name,
          item.image,
          item.types || [],
          item.species || '',
          item.generation || null
        )
      );
    } catch (error) {
      throw new Error(`Failed to fetch characters: ${error.message}`);
    }
  }

  filterCharacters(characters, searchTerm, filters) {
    return characters.filter(character => {
      const matchesSearch = character.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesType = filters.types.length === 0 ||
        (character.types && character.types.some(type =>
          filters.types.includes(type)
        ));

      const matchesGeneration = !filters.generation ||
        character.generation === parseInt(filters.generation);

      return matchesSearch && matchesType && matchesGeneration;
    });
  }

  getCharacterById(characters, id) {
    return characters.find(char => char.id === parseInt(id));
  }
}
