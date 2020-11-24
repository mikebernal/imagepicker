// React componenets and hooks
import { useState, useEffect } from 'react'

// Next component
import Head from "next/head"
import { useRouter } from 'next/router';

// Custom components
import { SITE_TITLE } from '../../components/Helpers'

export default function Photo() {
    const router = useRouter();
    console.log(router.query)
    return (
        <>
            <Head>
                <title>{ SITE_TITLE }</title>
            </Head>
            <div className="container">
                {SITE_TITLE}
                { query.id }
            </div>
        </>
    )
}


//----------------------------------------------------------------------------
//----------------------------------HOOKS-------------------------------------
//----------------------------------------------------------------------------

export async function getStaticPaths(params) {

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ context }) {
  
    return {
      props: {  },
    };
}
