/**
 * Trim words if characters is greater than 100
 * @param {*} string 
 */
export function Excerpt(string) {
    if (!string || string === null) {
        return 'N/A'
    }

    if (string.length > 200) {
        return string.slice(0, 200) + '...'
    }

    return string
}
