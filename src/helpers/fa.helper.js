// Styles
import { FaHome, FaImage, FaUser } from 'react-icons/fa'

export function getFaIcon(postType) {
    if (postType === 'photo') {
        return <FaImage />
    }
    
    if (postType === 'profile') {
        return <FaUser />
    }
    
    if (!postType || postType === 'home') {
        return <FaHome />
    }

}
