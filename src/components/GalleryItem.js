// The component that displays specific results from our API

import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}

export default GalleryItem
