function SearchBar({

search,
setSearch

}){

return(

<input
className="search"
type="text"
placeholder="Buscar..."
value={search}
onChange={(e)=>

setSearch(
e.target.value
)

}
/>

)

}

export default SearchBar