// Custom component
import ImageListItem from './ImageListItem'


export default function ImageList(props) {
    const { images } = props

    return (
        <div className="grid">
            {
                images[0].map((img) => (
                    <ImageListItem key={img.id} img={img}></ImageListItem>
                ))
            }
        </div>
    )
}
