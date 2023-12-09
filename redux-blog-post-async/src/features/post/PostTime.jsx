
import { parseISO,formatDistanceToNow } from 'date-fns'

import React from 'react'

const PostTime = ({timestamp}) => {
    const time = parseISO(timestamp)
    const timeperiod = formatDistanceToNow(time)
  return (
    <div>{timeperiod} <span>ago</span></div>
  )
}

export default PostTime