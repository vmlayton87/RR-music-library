import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import './App.css'
import { createResource as fetchData } from './components/helper'
import Spinner from './components/Spinner'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    const API_URL = 'https://itunes.apple.com/search?term='
    useEffect(() => {
      if (search) {
        setData(fetchData(search))
      }
    }, [search])
    
  const handleSearch = (e, term)=>{
    e.preventDefault()
    setSearch(term)
  }

  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />} >
                <Gallery data={data} />
            </Suspense>
        )
    }
}

    return (
        <div className='App'>
            <SearchBar handleSearch={handleSearch}/>
            {message}
            {renderGallery()}
        </div>
    )
}

export default App


