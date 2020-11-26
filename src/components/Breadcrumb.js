// Next component
import Link from 'next/link'

// Styles
import { FaHome, FaImage } from 'react-icons/fa'
import styles from './photo.module.scss'

export default function Breadcrumb() {
    return (
        <div className={styles.breadcrumb}>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <Link href="/">
                            <a style={{color: "white"}}>
                                <span class="icon is-small">
                                    <FaHome />
                                </span>
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a style={{color: "white"}}>
                            <span class="icon is-small">
                                <FaImage />
                            </span>
                            <span>Photo</span>
                        </a>


                    </li>
                </ul>
            </nav>
        </div>
    ) 
}
