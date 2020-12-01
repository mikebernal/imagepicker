// React component
import { useEffect, useState } from 'react'

// Next component
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Custom components
import UserAvatar from '../../components/UserAvatar'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import Date from '../../components//Date'
import PreviousButton from '../../components/PreviousButton'
import NextButton from '../../components/NextButton'

// Services
import { getImage } from '../../services/unsplashService'

// Helpers
import { Excerpt } from '../../helpers/excerpt.helper'
import { getPostType } from '../../helpers/post.helper'

// Styles
import styles from '../../components/photo.module.scss'
import modal from '../../components/modal.module.scss'
import { FaHeart, FaPlus, FaDownload } from 'react-icons/fa'


export default function Photo(props) {
    const [isShown, setIsShown] = useState("")
    const router = useRouter()
    const index = props.ids.indexOf(props.photo.id)
    const length = props.ids.length
    console.log('index: ', index)
    
    // Display navigation button
    function navigation() {
        switch(index) {
            case 0: 
                // Hide previous button
                return (
                    <>
                        <PreviousButton />
                        <NextButton />
                    </>
                )
                break
            case (length - 1):
                // Hide next button
                return (
                    <>
                        <PreviousButton />
                        <NextButton />
                    </>
                )
                break
            default:
                return (
                    <>
                        <PreviousButton />
                        <NextButton />
                    </>
                )
                
                console.log('Invalid ID')
        }
    }

    function toggleModal() {
        if (isShown === "is-active") {
            return setIsShown("")
        }
        
        return setIsShown("is-active")
    }

    return (
        <div className="container mb2">  
            {/* Main */}
            <div className={styles.photo_div}>
                
                <Header />

                {/* Breadcrumb */}
                <Breadcrumb  postType={getPostType(router.pathname)}/>

                {/* Main footer */}
                <div className={`${styles.main_footer}`}>

                    {navigation()}

                    {/* Col1 */}
                    <div className={styles.col1}>

                        {/* Photo */}

                        <div className={styles.photo_container} >
                            {/* <img src={photo.urls.small} alt={photo.alt_description} style={{ width: "100%", height: "auto" }} title={photo.description}/> */}
                            <Image src={props.photo.urls.regular} alt={props.photo.alt_description} layout="fill" objectFit="cover" onClick={() => (toggleModal())}/>
                        </div>

                    </div>


                    {/* Col2 */}
                    <div className={styles.col2}>
                        
                        {/* Col2 Header */}
                        <div className={styles.col2_header}>

                            {/* Image title */}
                            <div className={styles.title}>{props.photo.alt_description?? `N/A`}</div>
                                    
                            {/* CTA */}
                            <div className={styles.col2_cta}>
                                {/* Like CTA */}
                                <div className="${styles.like_cta} cta"><FaHeart /></div>

                                {/* Add CTA */}
                                <div className="${styles.add_cta} cta"><FaPlus /></div>

                                {/* Download CTA */}
                                <div className="${styles.download_cta} cta"><a href={props.photo.links.download} download><FaDownload /></a></div>
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
                                        <UserAvatar user={props.photo.user}/>
                                    </div>
                                    
                                    {/* Author */}
                                    <div className={styles.author}><span className="label">Author:</span> <small><Link href="/profile/[id]" as={`/profile/${props.photo.user.username}`}><a>{props.photo.user.name}</a></Link></small></div>

                                    {/* Author bio */}

                                    <div className={styles.author_bio}><span className="label">Bio:</span> <small>{Excerpt(props.photo.user.bio)}</small></div>

                                </div>

                            </div>

                            {/* Published date */}
                            <div className={styles.date}><span className="label">Published at: </span><small><Date dateString={props.photo.created_at}/></small></div>
                            {/* Like count*/}
                            <div className={styles.date}><span className="label">Likes: </span><small>{props.photo.likes}</small></div>
                        </div>
                    
                    </div>
                </div>

                <div className={`modal ${isShown}`}>
                    <div className="modal-background"></div>
                        <div className={`${modal.test} modal-content`} style={{ width: "80%", height: "auto", overflow: "auto" }}>
                            <div className="image is-1by1">
                                {/* <img className={modal.img} src={photo.urls.full} alt={photo.alt_description} alt={photo.alt_description} /> */}
                                <Image src={props.photo.urls.regular} alt={props.photo.alt_description} layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    <button className="modal-close is-large" aria-label="close" onClick={() => (toggleModal())}></button>
                </div>

            </div>

        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await getImage(context.query.id)
    // console.log(context.query.ids)
    return {
        props: {
            photo: res.data,
            ids: context.query.ids
        }
    }
}
