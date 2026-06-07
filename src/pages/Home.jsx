import { useState } from "react"
import SearchBar from "../components/SearchBar"
import AdvancedFilter from "../components/AdvancedFilter"
import CharacterList from "../components/CharacterList"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import useCharacters from "../hooks/useCharacters"

function Home() {

    const {
        characters,
        loading,
        error
    } = useCharacters()

    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState({ types: [], generation: "" })

    const filteredCharacters = characters.filter(character => {
        // Filtro por búsqueda
        const matchesSearch = character.name
            .toLowerCase()
            .includes(search.toLowerCase())

        // Filtro por tipo
        const matchesType = filters.types.length === 0 || 
            (character.types && character.types.some(type => 
                filters.types.includes(type)
            ))

        // Filtro por generación
        const matchesGeneration = !filters.generation || 
            character.generation === parseInt(filters.generation)

        return matchesSearch && matchesType && matchesGeneration
    })

    if (loading) {
        return <Loader />
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        )
    }

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <AdvancedFilter
                onFilterChange={setFilters}
                totalPokemons={characters.length}
            />

            <CharacterList
                characters={filteredCharacters}
            />
        </>
    )
}

export default Home