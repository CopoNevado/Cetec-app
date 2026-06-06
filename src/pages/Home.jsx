import { useState } from "react"
import SearchBar from "../components/SearchBar"
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

    const filteredCharacters = characters.filter(character =>
        character.name
            .toLowerCase()
            .includes(search.toLowerCase())
    )

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

            <CharacterList
                characters={filteredCharacters}
            />
        </>
    )
}

export default Home