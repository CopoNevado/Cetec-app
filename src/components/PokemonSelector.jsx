import { useState, useEffect } from "react";
import { Character } from "../models/Character";
import "../styles/teamBuilder.css";

function PokemonSelector({ characters, team, onSelect, onClose }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(characters);

  useEffect(() => {
    const teamIds = team.map(p => p.id);
    let result = characters.filter(c => !teamIds.includes(c.id));

    if (search.trim()) {
      result = result.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [search, characters, team]);

  return (
    <div className="selector-modal-overlay" onClick={onClose}>
      <div className="selector-modal" onClick={e => e.stopPropagation()}>
        <div className="selector-header">
          <h3>Seleccionar Pokémon</h3>
          <button className="selector-close" onClick={onClose}>✕</button>
        </div>

        <input
          type="text"
          className="selector-search"
          placeholder="Buscar Pokémon..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          autoFocus
        />

        <div className="selector-grid">
          {filtered.length > 0 ? (
            filtered.map(pokemon => (
              <div
                key={pokemon.id}
                className="selector-item"
                onClick={() => onSelect(pokemon)}
              >
                <img src={pokemon.image} alt={pokemon.name} />
                <span className="selector-name">{pokemon.name}</span>
                {pokemon.types && pokemon.types.length > 0 && (
                  <div className="selector-types">
                    {pokemon.types.map(type => (
                      <span
                        key={type}
                        className="selector-type"
                        style={{ backgroundColor: Character.TYPE_COLORS[type] }}
                      >
                        {type.slice(0, 3)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="selector-empty">
              No se encontraron Pokémon disponibles
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonSelector;
