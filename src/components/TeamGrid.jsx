import { Link } from "react-router-dom";
import { Character } from "../models/Character";
import "../styles/teamBuilder.css";

function TeamGrid({ team, onPokemonClick, onDetailClick }) {
  const getTotalStats = (pokemon) => {
    if (!pokemon.stats) return 0;
    return pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  };

  return (
    <div className="team-grid">
      {team.map((pokemon, index) => (
        <div
          key={pokemon.id}
          className="team-card"
          onClick={() => onPokemonClick && onPokemonClick(index)}
        >
          <div className="team-card-number">{index + 1}</div>

          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="team-pokemon-image"
          />

          <h4 className="team-pokemon-name">{pokemon.name}</h4>

          {pokemon.types && pokemon.types.length > 0 && (
            <div className="team-card-types">
              {pokemon.types.map(type => (
                <span
                  key={type}
                  className="team-type-badge"
                  style={{ backgroundColor: Character.TYPE_COLORS[type] }}
                >
                  {type.slice(0, 3)}
                </span>
              ))}
            </div>
          )}

          {pokemon.stats && (
            <div className="team-card-stats">
              <span className="team-stat-value">{getTotalStats(pokemon)}</span>
              <span className="team-stat-label">Total</span>
            </div>
          )}

          <div className="team-card-actions">
            <button
              className="team-change-btn"
              onClick={(e) => {
                e.stopPropagation();
                onPokemonClick && onPokemonClick(index);
              }}
              title="Cambiar Pokémon"
            >
              Cambiar
            </button>

            <Link
              to={`/detail/${pokemon.id}`}
              className="team-detail-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Ver
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamGrid;
