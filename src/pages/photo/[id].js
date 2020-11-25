// Custom component
import UserAvatar from '../../components/UserAvatar'
import BackButton from '../../components/shared/BackButton'

// Service
import { getImage } from '../../services/unsplashService'


export default function Photo({photo}) {

    return (
        <div>  
            <div style={{ margin: "0 auto", position: "relative", width: "auto", minHeight: "450px" }} >
                <img src={photo.urls.full} alt={photo.description} style={{ width: "100%", height: "auto" }} title={photo.description}/>
            </div>
            <UserAvatar user={photo.user}></UserAvatar>

            <h3>{photo.alt_description}</h3>
            <p>Width: {photo.width}</p>
            <p>Height: {photo.height}</p>
            <div>Views: {photo.views}</div>
            <div>Download: {photo.downloads}</div>
            <br/>
            <BackButton />

        </div>
    )
}

export async function getServerSideProps({query}) {
    const res = await getImage(query.id)

    return {
        props: {
            photo: res.data
        }
    }
}
