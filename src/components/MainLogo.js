// Next component
import Link from 'next/link'
import { useRouter  } from 'next/router'

import { SITE_TITLE } from '../helpers/site-title.helper'


export default function MainLogo() {
    const router = useRouter()

    return (
        <>
            
                {
                    router.asPath !== '/' 
                        ?    (
                                <h1 class="title" >
                                    <Link href="/" >
                                        <a className="main_logo">{SITE_TITLE}</a>
                                    </Link>
                                </h1>
                            )
                        :    (<h1 class="title">{SITE_TITLE}</h1>)  
                }

            <h2 class="subtitle">Using NextJS and Unsplash API</h2>
        </>
    )
}
