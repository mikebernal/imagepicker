// Next component
import Link from 'next/link'

//Helpers
import { SITE_TITLE } from '../helpers/site-title.helper'

// Custom component
import MainLogo from '../components/MainLogo'

export default function Header() {
    return (
        <>
            <section class="hero is-dark">
                <div class="hero-body">
                    <div class="container">
                        <MainLogo />
                    </div>
                </div>
            </section>
        </>
    )

}
