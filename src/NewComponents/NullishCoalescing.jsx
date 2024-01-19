import React from 'react'

function NullishCoalescing() {
    const x=0
    const y=101
  return (
    <div>
        <h1>{x || y} </h1>
        <h1>{x ?? y} </h1>       
    </div>
  )
}

export default NullishCoalescing