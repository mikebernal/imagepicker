import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BackButton() {
    const router = useRouter()

    return (
        <a onClick={() => router.back()}>Back</a>
    )
}
