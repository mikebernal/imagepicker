/**
 * Trim words if characters is greater than 100
 * @param {*} string 
 */
export function Excerpt(string) {
    if (string.length > 100) {
        return string.slice(0, 100) + '...'
    }

    return string
}
