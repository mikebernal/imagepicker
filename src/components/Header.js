// Next component
import Link from 'next/link'
import { useRouter } from 'next/router'

//Helpers
import { SITE_TITLE } from '../helpers/site-title.helper'

// Custom component
import MainLogo from '../components/MainLogo'

export default function Header() {
    const router = useRouter()

    function setLeftPadding() {
        if (router.pathname === '/') {
            return '3px'
        }

        return '0'
    }

    return (
        <>
            <section className="hero is-dark">
                {/* 3px if home */}
                <div className="hero-body" style={{ paddingLeft: setLeftPadding() }}>
                    <div className="container">
                        <MainLogo />
                    </div>
                </div>
            </section>
        </>
    )

}
