// Next components
import Link from 'next/link'
import Image from 'next/image'

// Custom components
import UserAvatar from './UserAvatar'


export default function ImageListItem({img}) {

    return (
        <div key={img.id} className="card" style={{ position: "relative", width: "auto", minHeight: "450px" }} >
            <UserAvatar user={img.user}/>
            {/* <img src={img.urls.small} alt={img.description} style={{ width: "100%", height: "auto" }} title={img.description}/> */}
            <Link href={`/photo/[id]`} as={`/photo/${img.id}`}>
                <a><Image src={img.urls.small} alt={img.description} layout="fill" /></a>
            </Link>
        </div>
    )
}
