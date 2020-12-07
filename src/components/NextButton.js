import { useRouter } from 'next/router'

import styles from "./nextbutton.module.scss"

import { FaChevronRight } from 'react-icons/fa'

export default function NextButton({id}) {
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
             <div className={styles.right}>
                <FaChevronRight />
            </div>
        </span>                       

    )
}
