// Next components
import { useRouter } from 'next/router'
import Image from 'next/image'

// Styles
import styles from './imagelist.module.scss'

// const newIds = data.map(element => {
//     return element['id']
//   });

export default function ImageListItem({img, ids}) {
    const router = useRouter()

    return (
        <div key={img.id} className={styles.column}>
            <div>
                {
                    // ids.map((element) => (
                    //     <p>{element}</p>
                    // ))
                    <>
                    <p>{img.id}</p></>

                }
            </div>
            <span 
                className="hover"
                onClick={() => (
                    router.push({ 
                        pathname: `/photo/[id]`,
                        as: `/photo/${img.id}`,
                        query: {
                            id: img.id,
                            ids: ids
                        }

                    })
                )}>
                {/* <a><Image styles={styles.img} src={img.urls.thumb} alt={img.description} layout="fill" /><img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} title={img.description}/></a> */}
                <img className={styles.img} src={img.urls.regular} alt={img.description} title={img.description} />
            </span>
        </div>
    )
}
