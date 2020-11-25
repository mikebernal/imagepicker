// Next component
import Image from 'next/image'
import Link from 'next/link'

// Custom components
import UserAvatar from '../../components/UserAvatar'
import BackButton from '../../components/shared/BackButton'
import Date from '../../components//Date'

// Services
import { getImage } from '../../services/unsplashService'

// Helpers
import { Excerpt } from '../../helpers/excerpt.helper'

// Styles
import styles from '../../components/photo.module.scss'
import {FaHeart, FaPlus, FaDownload, FaHome } from 'react-icons/fa'


export default function Photo({photo}) {

    return (
        <div class="container">  


        {/* Main */}
            <div className={styles.photo_div}>
                
                {/* Header */}

                <header className={styles.header}><Link href="/" ><a><FaHome /> Home</a></Link></header>

                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>Breadcrumb</div>

                {/* Main footer */}
                <div className={styles.main_footer}>

                    {/* Col1 */}
                    <div className={styles.col1}>

                        {/* Photo */}

                        <div className={styles.photo_container} style={{ position: "relative", width: "auto", minHeight: "450px" }} >
                            {/* <img src={photo.urls.small} alt={photo.alt_description} style={{ width: "100%", height: "auto" }} title={photo.description}/> */}
                            <Image src={photo.urls.full} alt={photo.alt_description} layout="fill" />
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

                                <div className={styles.author_details}>
                                    
                                    {/* Avatar */}    
                                    <div className={styles.avatar}>
                                        <UserAvatar user={photo.user}/>
                                    </div>
                                    
                                    {/* Author */}
                                    <div className={styles.author}><strong>Author:</strong> {photo.user.name}</div>

                                    {/* Author bio */}

                                    <div className={styles.author_bio}><strong>Bio:</strong> {Excerpt(photo.user.bio)}</div>

                                </div>

                            </div>

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
