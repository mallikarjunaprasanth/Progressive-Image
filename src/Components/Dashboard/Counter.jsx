import React, { memo } from 'react'

const Counter = ({count}) => {
  return (
    <div>Count : {count}</div>
  )
}

export default memo(Counter);