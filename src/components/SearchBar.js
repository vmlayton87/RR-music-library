// This component should take a user input and modify state at the App level to drive results from our fetch.

                
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    let {term, handleSearch} = useContext(SearchContext)

    return (
        <form >
            <input ref={term} type="text" placeholder="Enter a search term here" />
            <button type="submit" onClick={e=>handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}

export default SearchBar
