function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Buscar Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      aria-label="Buscar"
    />
  );
}

export default SearchBar;