import Link from 'next/link'

export default function UserAvatar({user}) {
    return (
        <div>
        <figure>
          <img src={user.avatar_url} alt="avatar" />
        </figure>
        <div>
          <Link href="/profile/[id]" as={`/profile/${user.login}`}>
            <a>{user.login}</a>
          </Link>
        </div>
      </div>
    )
}
