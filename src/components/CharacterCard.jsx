import { Link } from "react-router-dom";
import { Character } from "../models/Character";
import "../styles/cards.css";

function CharacterCard({ character }) {
  const getTypeColor = (type) => Character.TYPE_COLORS[type] || "#999";

  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        loading="lazy"
      />

      <h3>{character.name}</h3>

      {character.types && character.types.length > 0 && (
        <div className="card-types">
          {character.types.map(type => (
            <span
              key={type}
              className="type-tag"
              style={{ backgroundColor: getTypeColor(type) }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </div>
      )}

      <p>{character.species}</p>

      <Link to={`/detail/${character.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

export default CharacterCard;