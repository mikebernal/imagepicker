// Custom components
import UserAvatar from '../../components/UserAvatar'
import BackButton from '../../components/shared/BackButton'
import Date from '../../components//Date'

// Service
import { getImage } from '../../services/unsplashService'

// Style
import styles from '../../components/photo.module.scss'
import {FaHeart, FaPlus, FaDownload } from 'react-icons/fa'

export default function Photo({photo}) {

    return (
        <div class="container">  

            {/* Main */}
            <div className={styles.photo_div}>
                
                {/* Header */}
                <header className={styles.header}>HEADER</header>

                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>Breadcrumb::</div>

                {/* Main footer */}
                <div className={styles.main_footer}>

                    {/* Col1 */}
                    <div className={styles.col1}>

                        {/* Photo */}
                        <div className={styles.photo_container}>
                            <img className={styles.photo} src={photo.urls.full} alt={photo.alt_description} title={photo.alt_description} />
                        </div>
                    </div>


                    {/* Col2 */}
                    <div className={styles.col2}>
                        
                        {/* Col2 Header */}
                        <div className={styles.col2_header}>

                            {/* Image title */}
                            <div className={styles.title}>{photo.alt_description}</div>
                                    
                            {/* CTA */}
                            <div className={styles.col2_cta}>
                                {/* Like CTA */}
                                <div className={styles.like_cta}>Like<FaHeart /></div>

                                {/* Add CTA */}
                                <div className={styles.add_cta}>Add<FaPlus /></div>

                                {/* Download CTA */}
                                <div className={styles.download_cta}>Download<FaDownload /></div>
                            </div>

                        </div>
        

                        {/* Info */}
                        <div className={styles.info_footer}>

                            <hr/>

                            {/* Author Section */}
                            <div className={styles.author_section}>
                                {/* Avatar */}
                                <div className={styles.avatar}>
                                    <UserAvatar user={photo.user}/>
                                </div>
                                
                                <div className={styles.author_details}>
                                    {/* Author */}
                                    <div className={styles.author}><strong>Author:</strong> {photo.user.name}</div>

                                    {/* Author bio */}
                                    <div className={styles.author_bio}><strong>Bio:</strong> {photo.user.bio}</div>
                                </div>

                            </div>
                            
                            <hr/>

                            {/* Info title */}
                            <div className={styles.info_title}> <h2>INFO</h2> </div>

                            {/* Published date */}
                            <div className={styles.date}><strong>Published at: </strong><Date dateString={photo.created_at}/></div>
                            {/* Like count*/}
                            <div className={styles.date}><strong>Likes: </strong>{photo.likes}</div>
                        </div>
                    
                    </div>
                </div>



            </div>

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
