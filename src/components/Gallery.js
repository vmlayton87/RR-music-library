// This will format and display our gallery item components.

import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery(){
    const data = useContext(DataContext)

    const displayItem = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
        {displayItem}
        </div>
    )
}


export default Gallery