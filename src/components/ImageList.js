// Next component
import Link from 'next/link'
import Image from 'next/image'

export default function ImageList(props) {
    const { images } = props

    return (
        <div className="grid">
            {
                images[0].map((img) => (
                    <div key={img.id} className="card" style={{ position: "relative", width: "auto", minHeight: "450px" }}  >
                        {/* <img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} title={img.description}/> */}
                        <Link href={`/photos/${img.id}`}>
                            <a><Image src={img.urls.small} alt={img.description} layout="fill" /></a>
                        </Link>
                    </div>
                 ))
            }
        </div>
    )
}
