// Next component
import Image from 'next/image'
import Link from 'next/link'

// Custom components
import UserAvatar from '../../components/UserAvatar'
import Header from '../../components/Header'
import BackButton from '../../components/shared/BackButton'
import Breadcrumb from '../../components/Breadcrumb'
import Date from '../../components//Date'

// Services
import { getImage } from '../../services/unsplashService'

// Helpers
import { Excerpt } from '../../helpers/excerpt.helper'

// Styles
import styles from '../../components/photo.module.scss'
import {FaHeart, FaPlus, FaDownload, FaHome, FaBook, FaImage } from 'react-icons/fa'


export default function Photo({photo}) {

    return (
        <div className="custom_container">  
            {/* Main */}
            <div className={styles.photo_div}>
                
                {/* Header */}

                {/* <header className={styles.header}><Link href="/" ><a><FaHome /> Home</a></Link></header> */}
                <Header />

                {/* Breadcrumb */}
                <Breadcrumb />

                {/* Main footer */}
                <div className={styles.main_footer}>

                    {/* Col1 */}
                    <div className={styles.col1}>

                        {/* Photo */}

                        <div className={styles.photo_container} style={{ position: "relative", width: "auto", minHeight: "550px" }} >
                            {/* <img src={photo.urls.small} alt={photo.alt_description} style={{ width: "100%", height: "auto" }} title={photo.description}/> */}
                            <Image src={photo.urls.regular} alt={photo.alt_description} layout="fill" />
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
                                <div className="${styles.like_cta} cta"><FaHeart /></div>

                                {/* Add CTA */}
                                <div className="${styles.add_cta} cta"><FaPlus /></div>

                                {/* Download CTA */}
                                <div className="${styles.download_cta} cta"><FaDownload /></div>
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
                                    <div className={styles.author}><span className="label">Author:</span> <small><Link href="/profile/[id]" as={`/profile/${photo.user.username}`}><a>{photo.user.name}</a></Link></small></div>

                                    {/* Author bio */}

                                    <div className={styles.author_bio}><span className="label">Bio:</span> <small>{Excerpt(photo.user.bio)}</small></div>

                                </div>

                            </div>

                            {/* Published date */}
                            <div className={styles.date}><span className="label">Published at: </span><small><Date dateString={photo.created_at}/></small></div>
                            {/* Like count*/}
                            <div className={styles.date}><span className="label">Likes: </span><small>{photo.likes}</small></div>
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
