// Next component
import Link from 'next/link'

// Custom component
import ImageListItem from './ImageListItem'
import styles from './imagelist.module.scss'


export default function ImageList(props) {
    const { images } = props

    return (
        <div className={styles.row}>
            {
                images[0].map((img, i) => (
                    <ImageListItem key={img.id} img={img}/>
                ))
            }
        </div>
    )
}
