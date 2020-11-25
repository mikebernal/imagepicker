// Custom component
import BackButton from '../../components/shared/BackButton'

// Service
import { getProfile } from '../../services/unsplashService'


export default function Profile({profile}) {
    console.log(profile)
    return (
        <div>  
            {/* <img src={profile.profile_image.small} alt=""/> */}
            <p>{profile.name}</p>
            <BackButton />
        </div>
    )
}

export async function getServerSideProps({query}) {
    const res = await getProfile(query.username)
    return {
        props: {
            profile: res.data
        }
    }
}
