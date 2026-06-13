import { useState } from "react";
import SearchBar from "../components/SearchBar";
import AdvancedFilter from "../components/AdvancedFilter";
import CharacterList from "../components/CharacterList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useCharacters from "../hooks/useCharacters";
import { CharacterController } from "../controllers/CharacterController";

function Home() {
  const { characters, loading, error } = useCharacters();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ types: [], generation: "" });

  const controller = new CharacterController(null);
  const filteredCharacters = controller.filterCharacters(
    characters,
    search,
    filters
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <AdvancedFilter
        onFilterChange={setFilters}
        totalPokemons={characters.length}
      />
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default Home;