// Custom component
import ImageListItem from './ImageListItem'
import styles from './imagelist.module.scss'
 

export default function ImageList(props) {
    const { images } = props

    return (
            <div className={styles.row}>
                {
                    images.map((img, i) => (
                        <ImageListItem key={img.id + i} img={img} />
                    ))
                }
            </div>

    )
}
