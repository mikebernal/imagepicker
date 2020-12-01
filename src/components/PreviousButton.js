import styles from "./previousbutton.module.scss"

import { FaChevronLeft } from 'react-icons/fa'

export default function PreviousButton() {
    return (
        <div className={styles.left}>
            <FaChevronLeft />
        </div>
    )
}
