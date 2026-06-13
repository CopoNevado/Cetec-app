import { TYPE_EFFECTIVENESS, POKEMON_TYPES } from "../utils/typeEffectiveness";

export class TeamService {
  static generateRandomTeam(characters, count = 6) {
    if (!characters || characters.length === 0) {
      throw new Error("No Pokémon available");
    }

    const shuffled = [...characters].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, characters.length));
  }

  static analyzeCoverage(team) {
    const typesInTeam = new Set();
    const typesByPokemon = {};

    team.forEach(pokemon => {
      if (pokemon.types && pokemon.types.length > 0) {
        pokemon.types.forEach(type => typesInTeam.add(type));
        typesByPokemon[pokemon.id] = pokemon.types;
      }
    });

    const teamTypes = Array.from(typesInTeam);

    const weaknesses = this.getTeamWeaknesses(team, teamTypes);
    const strengths = this.getTeamStrengths(team, teamTypes);
    const resistances = this.getTeamResistances(teamTypes);

    const balanceScore = this.calculateBalance({
      typesCount: teamTypes.length,
      weaknessesCount: weaknesses.length,
      strengthsCount: strengths.length,
      resistancesCount: resistances.length
    });

    return {
      typesInTeam: teamTypes,
      weaknesses,
      strengths,
      resistances,
      offensiveCoverage: strengths,
      defensiveCoverage: resistances,
      balanceScore,
      typeDiversity: (teamTypes.length / 18) * 100
    };
  }

  static getTeamWeaknesses(team, teamTypes = null) {
    const types = teamTypes || this.getTeamTypes(team);
    const weaknesses = new Set();

    types.forEach(type => {
      const typeData = TYPE_EFFECTIVENESS[type];
      if (typeData && typeData.weakTo) {
        typeData.weakTo.forEach(weakType => weaknesses.add(weakType));
      }
    });

    const strengths = new Set();
    types.forEach(type => {
      const typeData = TYPE_EFFECTIVENESS[type];
      if (typeData && typeData.resists) {
        typeData.resists.forEach(resistType => strengths.add(resistType));
      }
    });

    return Array.from(weaknesses).filter(w => !strengths.has(w));
  }

  static getTeamStrengths(team, teamTypes = null) {
    const types = teamTypes || this.getTeamTypes(team);
    const strengths = new Set();

    types.forEach(type => {
      const typeData = TYPE_EFFECTIVENESS[type];
      if (typeData && typeData.superEffectiveAgainst) {
        typeData.superEffectiveAgainst.forEach(strongType => {
          strengths.add(strongType);
        });
      }
    });

    return Array.from(strengths);
  }

  static getTeamResistances(teamTypes) {
    const resistances = new Set();
    const weaknesses = new Set();

    teamTypes.forEach(type => {
      const typeData = TYPE_EFFECTIVENESS[type];
      if (typeData && typeData.resists) {
        typeData.resists.forEach(resistType => resistances.add(resistType));
      }
      if (typeData && typeData.weakTo) {
        typeData.weakTo.forEach(weakType => weaknesses.add(weakType));
      }
    });

    return Array.from(resistances).filter(r => !weaknesses.has(r));
  }

  static getTeamTypes(team) {
    const types = new Set();
    team.forEach(pokemon => {
      if (pokemon.types && Array.isArray(pokemon.types)) {
        pokemon.types.forEach(type => types.add(type));
      }
    });
    return Array.from(types);
  }

  static calculateBalance(analysis) {
    let score = 50;

    const typeDiversity = analysis.typesCount || 0;
    score += (typeDiversity / 18) * 30;

    const weaknessCount = analysis.weaknessesCount || 0;
    score -= (weaknessCount / 18) * 20;

    const strengthCount = analysis.strengthsCount || 0;
    score += (strengthCount / 18) * 15;

    const resistanceCount = analysis.resistancesCount || 0;
    score += (resistanceCount / 18) * 10;

    return Math.min(100, Math.max(0, Math.round(score)));
  }

  static saveTeam(teamName, team) {
    const teams = JSON.parse(localStorage.getItem("savedTeams") || "[]");
    const newTeam = {
      id: Date.now(),
      name: teamName || `Team ${teams.length + 1}`,
      team: team.map(p => ({ id: p.id, name: p.name })),
      createdAt: new Date().toISOString()
    };
    teams.push(newTeam);
    localStorage.setItem("savedTeams", JSON.stringify(teams));
    return newTeam;
  }

  static getSavedTeams() {
    return JSON.parse(localStorage.getItem("savedTeams") || "[]");
  }

  static deleteSavedTeam(teamId) {
    const teams = this.getSavedTeams();
    const filtered = teams.filter(t => t.id !== teamId);
    localStorage.setItem("savedTeams", JSON.stringify(filtered));
  }

  static getTeamShareString(team) {
    return team.map(p => `${p.name} (${p.id})`).join(" | ");
  }
}

export default TeamService;
