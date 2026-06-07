import { Link } from "react-router-dom";
import "../styles/cards.css"

function CharacterCard({
  character
}) {

  const TYPE_COLORS = {
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

  return (

    <div className="card">

      <img
        src={character.image}
        alt={character.name}
      />

      <h3>
        {character.name}
      </h3>

      {character.types && character.types.length > 0 && (
        <div className="card-types">
          {character.types.map(type => (
            <span 
              key={type}
              className="type-tag"
              style={{ backgroundColor: TYPE_COLORS[type] }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </div>
      )}

      <p>
        {character.species}
      </p>

      <Link
        to={`/detail/${character.id}`}
      >
        Ver detalle
      </Link>

    </div>

  );

}

export default CharacterCard;