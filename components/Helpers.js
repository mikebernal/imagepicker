import { parseISO, format } from 'date-fns'

export const SITE_TITLE = 'Image Picker'

export function Date( { dateString } ) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}
