import styles from "./nextbutton.module.scss"

import { FaChevronRight } from 'react-icons/fa'

export default function PreviousButton() {
    return (
        <div className={styles.right}>
            <FaChevronRight />
        </div>
    )
}
