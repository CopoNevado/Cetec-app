export const TYPE_EFFECTIVENESS = {
  normal: {
    superEffectiveAgainst: [],
    weakTo: ['fighting'],
    resists: [],
    immunes: ['ghost']
  },
  fire: {
    superEffectiveAgainst: ['grass', 'ice', 'bug', 'steel'],
    weakTo: ['water', 'ground', 'rock'],
    resists: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'],
    immunes: []
  },
  water: {
    superEffectiveAgainst: ['fire', 'ground', 'rock'],
    weakTo: ['electric', 'grass'],
    resists: ['fire', 'water', 'ice', 'steel'],
    immunes: []
  },
  electric: {
    superEffectiveAgainst: ['water', 'flying'],
    weakTo: ['ground'],
    resists: ['electric', 'flying', 'steel'],
    immunes: []
  },
  grass: {
    superEffectiveAgainst: ['water', 'ground', 'rock'],
    weakTo: ['fire', 'ice', 'poison', 'flying', 'bug'],
    resists: ['ground', 'water', 'grass', 'electric'],
    immunes: []
  },
  ice: {
    superEffectiveAgainst: ['flying', 'ground', 'grass', 'dragon'],
    weakTo: ['fire', 'fighting', 'rock', 'steel'],
    resists: ['ice'],
    immunes: []
  },
  fighting: {
    superEffectiveAgainst: ['normal', 'ice', 'rock', 'dark', 'steel'],
    weakTo: ['flying', 'psychic', 'fairy'],
    resists: ['rock', 'bug', 'dark'],
    immunes: []
  },
  poison: {
    superEffectiveAgainst: ['grass', 'fairy'],
    weakTo: ['ground', 'psychic'],
    resists: ['fighting', 'poison', 'bug', 'grass'],
    immunes: []
  },
  ground: {
    superEffectiveAgainst: ['fire', 'electric', 'poison', 'rock', 'steel'],
    weakTo: ['water', 'grass', 'ice'],
    resists: ['poison', 'rock'],
    immunes: ['electric']
  },
  flying: {
    superEffectiveAgainst: ['fighting', 'bug', 'grass'],
    weakTo: ['electric', 'ice', 'rock'],
    resists: ['fighting', 'bug', 'grass'],
    immunes: ['ground']
  },
  psychic: {
    superEffectiveAgainst: ['fighting', 'poison'],
    weakTo: ['bug', 'ghost', 'dark'],
    resists: ['fighting', 'psychic'],
    immunes: []
  },
  bug: {
    superEffectiveAgainst: ['grass', 'psychic', 'dark'],
    weakTo: ['fire', 'flying', 'rock'],
    resists: ['fighting', 'ground', 'grass'],
    immunes: []
  },
  rock: {
    superEffectiveAgainst: ['flying', 'bug', 'fire', 'ice'],
    weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'],
    resists: ['normal', 'flying', 'poison', 'fire'],
    immunes: []
  },
  ghost: {
    superEffectiveAgainst: ['ghost', 'psychic'],
    weakTo: ['ghost', 'dark'],
    resists: ['poison', 'bug'],
    immunes: ['normal', 'fighting']
  },
  dragon: {
    superEffectiveAgainst: ['dragon'],
    weakTo: ['ice', 'dragon', 'fairy'],
    resists: ['fire', 'water', 'grass', 'electric'],
    immunes: []
  },
  dark: {
    superEffectiveAgainst: ['ghost', 'psychic'],
    weakTo: ['fighting', 'bug', 'fairy'],
    resists: ['ghost', 'dark'],
    immunes: ['psychic']
  },
  steel: {
    superEffectiveAgainst: ['ice', 'rock', 'fairy'],
    weakTo: ['fire', 'fighting', 'ground'],
    resists: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy'],
    immunes: ['poison']
  },
  fairy: {
    superEffectiveAgainst: ['fighting', 'dark', 'dragon'],
    weakTo: ['poison', 'steel'],
    resists: ['fighting', 'bug', 'dark'],
    immunes: ['dragon']
  }
};

export const POKEMON_TYPES = Object.keys(TYPE_EFFECTIVENESS);
