export function getPostType(pathname) {
    const charsToRemove = {
        '/':    '',
        '[id]': ''
    }

    return pathname.replace(/\/|\[id\]/gi, function(matched) {
        return charsToRemove[matched]
    })
}
