import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from "./nextbutton.module.scss"

import { FaChevronRight } from 'react-icons/fa'

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
             <div className={styles.right}>
                <FaChevronRight />
            </div>
        </span>                       

    )
}
