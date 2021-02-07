import { useRouter } from 'next/router'

import styles from "./previousbutton.module.scss"

import { FaChevronLeft } from 'react-icons/fa'

export default function PreviousButton({ id }) {
    const router = useRouter()

    return (
        <span 
            className="hover"
            onClick={() => (
                router.push({ 
                    pathname: `/photo/${id}`
                }, 
                { shallow: true }
                )
            )}>
            <div className={styles.left}>
                <FaChevronLeft />
            </div>
        </span>                       
    )
}
