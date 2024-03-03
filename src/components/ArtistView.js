// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    const {id} = useParams()
    const [ artistData, setArtistData ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        
        // // Get the current hostname and port from window.location
        // const { hostname, port } = window.location

        // // Construct the API_URL based on the current hostname and port
        // const WINDOW_URL = `http://${hostname}:${port}/album/${id}`

        // // to look up by specific id
        // const API_SEARCH_URL = `https://itunes.apple.com/lookup?id=${id}&entity=album`

        // using a local proxy for security reasons. This uses a backend application to access the API

        const PROXY_URL = `http://localhost:4000/album/${id}`

        const fetchData = async () => {
            const response = await fetch(PROXY_URL)
            const resData = await response.json()
            setArtistData(resData.results)
            console.log(artistData)
        }
        fetchData()
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}><p>{album.collectionName}</p></Link>
            </div>
        )
    })

    const navButtons = ()=>{
        return (
            <div>
            <button onClick={()=> navigate(-1)}>Back</button>
            <button onClick={()=> navigate(`/`)}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {navButtons()}
            <h3>Albums by</h3> {artistData.length>0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading ...</h2>}
            {renderAlbums}
        </div>
    )
}

export default ArtistView

