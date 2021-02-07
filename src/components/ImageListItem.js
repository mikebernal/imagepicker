// Next components
import { useRouter } from 'next/router'
import Image from 'next/image'

// Styles
import styles from './imagelist.module.scss'

// const newIds = data.map(element => {
//     return element['id']
//   });

export default function ImageListItem({ img }) {
    const router = useRouter()

    return (
        <div key={img.id} className={styles.column}>
            <span 
                style={{width: "100%"}}
                className="hover"
                onClick={() => (
                    router.push(`/photo/${img.id}`)
                )}>
                    <div className={styles.image_div} >
                        <a>
                            <Image 
                                src={img.urls.regular}
                                alt={img.description}
                                width={327}
                                height={582}
                                quality={100}
                                objectPosition="50% 50%"
                                priority={true}
                                sizes="(max-width: 769px) 100vw, (max-width: 1023px) 48vw, 23vw"
                            />
                        </a>
                    </div>
            </span>
        </div>
    )
}
