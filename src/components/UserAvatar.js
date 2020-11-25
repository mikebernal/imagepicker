import Link from 'next/link'

export default function UserAvatar({user}) {
  console.log(user)
    return (
        <div>
          
        <div>
          <Link href="/profile/[id]" as={`/profile/${user.username}`}>
            <a>
              <img src={user.profile_image.medium} alt="avatar" />
            </a>
          </Link>
        </div>
      </div>
    )
}
