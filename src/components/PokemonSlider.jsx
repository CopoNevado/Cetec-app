import { useEffect, useState } from "react";
import { getPokemonDetail, TYPE_COLORS } from "../services/pokemonDetailService";
import "../styles/pokemonSlider.css";

function PokemonSlider({ pokemonId, allPokemonIds }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentIndex = allPokemonIds.indexOf(parseInt(pokemonId));
  const prevId = currentIndex > 0 ? allPokemonIds[currentIndex - 1] : null;
  const nextId = currentIndex < allPokemonIds.length - 1 ? allPokemonIds[currentIndex + 1] : null;

  useEffect(() => {
    async function loadPokemon() {
      try {
        setLoading(true);
        const data = await getPokemonDetail(pokemonId);
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPokemon();
  }, [pokemonId]);

  if (loading) {
    return <div className="slider-loading">Cargando detalles...</div>;
  }

  if (error) {
    return <div className="slider-error">{error}</div>;
  }

  if (!pokemon) {
    return null;
  }

  return (
    <div className="pokemon-slider">
      <div className="slider-container">
        {/* Navegación izquierda */}
        {prevId && (
          <a href={`/detail/${prevId}`} className="nav-btn nav-prev">
            ← Anterior
          </a>
        )}

        {/* Contenido principal */}
        <div className="slider-content">
          {/* Imagen */}
          <div className="pokemon-image-section">
            <img 
              src={pokemon.image} 
              alt={pokemon.name}
              className="pokemon-image"
            />
            <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <p className="pokemon-id">#{pokemon.id}</p>
          </div>

          {/* Información */}
          <div className="pokemon-info-section">
            {/* Tipos */}
            <div className="info-group">
              <h3>Tipos</h3>
              <div className="types-display">
                {pokemon.types.map(type => (
                  <span 
                    key={type}
                    className="type-badge"
                    style={{ backgroundColor: TYPE_COLORS[type] }}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            {/* Dimensiones */}
            <div className="info-group">
              <h3>Medidas</h3>
              <div className="dimensions">
                <div className="dimension-item">
                  <span className="label">Altura:</span>
                  <span className="value">{(pokemon.height / 10).toFixed(1)} m</span>
                </div>
                <div className="dimension-item">
                  <span className="label">Peso:</span>
                  <span className="value">{(pokemon.weight / 10).toFixed(1)} kg</span>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="info-group">
              <h3>Estadísticas Base</h3>
              <div className="stats-display">
                <div className="stat-bar">
                  <label>HP</label>
                  <div className="bar-container">
                    <div 
                      className="bar-fill hp"
                      style={{ width: `${(pokemon.stats.hp / 150) * 100}%` }}
                    />
                  </div>
                  <span className="stat-value">{pokemon.stats.hp}</span>
                </div>

                <div className="stat-bar">
                  <label>ATK</label>
                  <div className="bar-container">
                    <div 
                      className="bar-fill atk"
                      style={{ width: `${(pokemon.stats.attack / 150) * 100}%` }}
                    />
                  </div>
                  <span className="stat-value">{pokemon.stats.attack}</span>
                </div>

                <div className="stat-bar">
                  <label>DEF</label>
                  <div className="bar-container">
                    <div 
                      className="bar-fill def"
                      style={{ width: `${(pokemon.stats.defense / 150) * 100}%` }}
                    />
                  </div>
                  <span className="stat-value">{pokemon.stats.defense}</span>
                </div>

                <div className="stat-bar">
                  <label>SP.A</label>
                  <div className="bar-container">
                    <div 
                      className="bar-fill spa"
                      style={{ width: `${(pokemon.stats.spAtk / 150) * 100}%` }}
                    />
                  </div>
                  <span className="stat-value">{pokemon.stats.spAtk}</span>
                </div>

                <div className="stat-bar">
                  <label>SP.D</label>
                  <div className="bar-container">
                    <div 
                      className="bar-fill spd"
                      style={{ width: `${(pokemon.stats.spDef / 150) * 100}%` }}
                    />
                  </div>
                  <span className="stat-value">{pokemon.stats.spDef}</span>
                </div>

                <div className="stat-bar">
                  <label>SPD</label>
                  <div className="bar-container">
                    <div 
                      className="bar-fill speed"
                      style={{ width: `${(pokemon.stats.speed / 150) * 100}%` }}
                    />
                  </div>
                  <span className="stat-value">{pokemon.stats.speed}</span>
                </div>
              </div>
            </div>

            {/* Habilidades */}
            {pokemon.abilities.length > 0 && (
              <div className="info-group">
                <h3>Habilidades</h3>
                <ul className="abilities-list">
                  {pokemon.abilities.map(ability => (
                    <li key={ability}>{ability}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Movimientos */}
            {pokemon.moves.length > 0 && (
              <div className="info-group">
                <h3>Movimientos</h3>
                <div className="moves-list">
                  {pokemon.moves.map(move => (
                    <span key={move} className="move-badge">{move}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navegación derecha */}
        {nextId && (
          <a href={`/detail/${nextId}`} className="nav-btn nav-next">
            Siguiente →
          </a>
        )}
      </div>

      {/* Indicador de progreso */}
      <div className="slider-progress">
        Pokémon {currentIndex + 1} de {allPokemonIds.length}
      </div>
    </div>
  );
}

export default PokemonSlider;
