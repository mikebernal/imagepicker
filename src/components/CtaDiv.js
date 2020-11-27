// Styles
import styles from '../../components/photo.module.scss'
import {FaHeart, FaPlus, FaDownload, FaHome, FaBook, FaImage } from 'react-icons/fa'

export default function CtaDiv() {
    return (
        <div className={styles.col2_cta} style={{background: "red"}}>
            {/* Like CTA */}
            <div className="${styles.like_cta} cta"><FaHeart /></div>

            {/* Add CTA */}
            <div className="${styles.add_cta} cta"><FaPlus /></div>

            {/* Download CTA */}
            <div className="${styles.download_cta} cta"><FaDownload /></div>
        </div>
    )
}
