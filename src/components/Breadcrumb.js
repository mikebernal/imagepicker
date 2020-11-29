// Next component
import Link from 'next/link'

// Helpers
import { getFaIcon } from '../helpers/fa.helper'

import styles from './breadcrumb.module.scss'

export default function Breadcrumb(props) {
    const { postType } = props

    return (
        <div className={styles.breadcrumb}>
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <Link href="/">
                            <a style={{color: "white"}}>
                                <span className="icon is-small">
                                    {getFaIcon('home')}
                                </span>
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <span className="icon is-small defaultCursor mlp5">
                            {getFaIcon(postType)}
                        </span>
                        <span className={`${styles.post_type}`}>{postType}</span>
                    </li>
                </ul>
            </nav>
        </div>
    ) 
}
