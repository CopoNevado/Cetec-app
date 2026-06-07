import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonSlider from "../components/PokemonSlider";
import useCharacters from "../hooks/useCharacters";
import "../styles/detail.css";

function Detail() {

  const { id } = useParams();
  const { characters } = useCharacters();
  const [allIds, setAllIds] = useState([]);

  useEffect(() => {
    if (characters.length > 0) {
      const ids = characters.map(c => parseInt(c.id));
      setAllIds(ids);
    }
  }, [characters]);

  return (
    <div className="detail-page">
      <PokemonSlider 
        pokemonId={id}
        allPokemonIds={allIds}
      />
    </div>
  );

}

export default Detail;