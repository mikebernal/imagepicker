// Next component
import Link from 'next/link'

//Helpers
import { SITE_TITLE } from '../helpers/site-title.helper'

// Custom component
import MainLogo from '../components/MainLogo'

export default function Header() {
    return (
        <>
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <MainLogo />
                    </div>
                </div>
            </section>
        </>
    )

}
