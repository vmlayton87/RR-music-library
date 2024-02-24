// This will format and display our gallery item components.


import GalleryItem from './GalleryItem'

function Gallery(props){
    
    const displayItem = props.data.map((item, index) => {
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