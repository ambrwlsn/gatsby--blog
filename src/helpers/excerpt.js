import striptags from 'striptags'
import he from 'he'

// Truncate content and add ellipsis.
const truncate = value => value.slice(0, 160) + '…'

// Remove HTML tags from the output for plain text, and
// encode HTML entities.
const excerpt = props => truncate(he.decode(striptags(props)))

export default excerpt
