// Next component
import Link from 'next/link'

//Helpers
import { SITE_TITLE } from '../helpers/site-title.helper'


export default function Header() {
    return (
        <>
            <section class="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                    <h1 class="title">
                        <Link href="/" ><a>{SITE_TITLE}</a></Link>
                    </h1>
                    <h2 class="subtitle">
                        Using NextJS and Unsplash API
                    </h2>
                    </div>
                </div>
            </section>
        </>
    )

}
