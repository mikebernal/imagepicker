// Next components
import Link from 'next/link'
import Image from 'next/image'
import styles from './imagelist.module.scss'


export default function ImageListItem({img}) {
    
    return (
        <div key={img.id} className={styles.column}>
            <Link href={`/photo/[id]`} as={`/photo/${img.id}`}>
                {/* <a><Image styles={styles.img} src={img.urls.thumb} alt={img.description} layout="fill" /><img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} title={img.description}/></a> */}
                <a><img className={styles.img} src={img.urls.small} alt={img.description} title={img.description} /></a>
            </Link>
        </div>
    )
}
