import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from "./previousbutton.module.scss"

import { FaChevronLeft } from 'react-icons/fa'

export default function PreviousButton({id, ids}) {
    const router = useRouter()

    return (
        <span 
            className="hover"
            onClick={() => (
                router.push({ 
                    pathname: `/photo/[id]`,
                    as: `/photo/${id}`,
                    query: {
                        id: id,
                        ids: ids
                    }
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
