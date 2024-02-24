// This component should take a user input and modify state at the App level to drive results from our fetch.
import { useContext, useRef } from 'react'
import { SearchContext } from '../context/SearchContext'      
import { useState } from 'react'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form >

            <input ref={term} type="text" placeholder="Enter a search term here"  />

            <button onClick={(e)=> {
                return handleSearch(e, term.current.value)}}>
                    Submit
            </button>

        </form>
    )
}

export default SearchBar
