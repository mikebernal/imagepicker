import { SITE_TITLE } from '../helpers/site-title.helper'

export default function Header() {
    return (
        <>
            <h1 className="title">{ SITE_TITLE }</h1>
            <p className="description">
                Using <code>NextJS</code> and Unsplash API
            </p>
        </>
    )
}
