import { useState } from "react";
import { POKEMON_TYPES } from "../services/pokemonDetailService";
import "../styles/advancedFilter.css";

function AdvancedFilter({ onFilterChange, totalPokemons }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [generation, setGeneration] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleTypeToggle = (type) => {
    const updated = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(updated);
    onFilterChange({ types: updated, generation });
  };

  const handleGenerationChange = (gen) => {
    setGeneration(gen);
    onFilterChange({ types: selectedTypes, generation: gen });
  };

  const handleReset = () => {
    setSelectedTypes([]);
    setGeneration("");
    onFilterChange({ types: [], generation: "" });
  };

  const activeFilters = selectedTypes.length + (generation ? 1 : 0);

  return (
    <div className="advanced-filter-container">
      <button 
        className="filter-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        🔍 Filtros Avanzados {activeFilters > 0 && `(${activeFilters})`}
      </button>

      {isOpen && (
        <div className="filter-panel">
          {/* Tipos */}
          <div className="filter-section">
            <h4>Filtrar por Tipo</h4>
            <div className="types-grid">
              {POKEMON_TYPES.map(type => (
                <button
                  key={type}
                  className={`type-btn ${selectedTypes.includes(type) ? "active" : ""}`}
                  onClick={() => handleTypeToggle(type)}
                  style={selectedTypes.includes(type) ? {
                    backgroundColor: getTypeColor(type),
                    color: "white"
                  } : {}}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Generación */}
          <div className="filter-section">
            <h4>Filtrar por Generación</h4>
            <div className="generation-grid">
              {[1, 2, 3, 4, 5].map(gen => (
                <button
                  key={gen}
                  className={`generation-btn ${generation === String(gen) ? "active" : ""}`}
                  onClick={() => handleGenerationChange(generation === String(gen) ? "" : String(gen))}
                >
                  Gen {gen}
                </button>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="filter-actions">
            {activeFilters > 0 && (
              <button className="reset-btn" onClick={handleReset}>
                🔄 Limpiar Filtros
              </button>
            )}
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function getTypeColor(type) {
  const colors = {
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
  return colors[type] || "#999";
}

export default AdvancedFilter;
