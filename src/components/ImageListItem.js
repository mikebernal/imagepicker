// Next components
import Link from 'next/link'
import Image from 'next/image'


export default function ImageListItem({img}) {
    
    return (
        <div key={img.id} className="card" style={{ position: "relative", width: "auto", minHeight: "450px" }} >
            {/* <img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} title={img.description}/> */}
            <Link href={`/photo/[id]`} as={`/photo/${img.id}`}>
                <a><Image src={img.urls.thumb} alt={img.description} layout="fill" /></a>
            </Link>
        </div>
    )
}
