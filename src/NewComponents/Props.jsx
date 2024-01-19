import React from 'react'
import Button from './Button.jsx'
import Name from './Name.jsx'

function Props() {
  const value= 'MERN Stack'
  return (
    <div>
       <Button label={'Delete'} color={'pink'} />
       <Button label={'Download'}/>
       <Button label={'Cancel'} name={'Button'} color={'green'}/>
       <Button/>
       <Button/>
       <Button/>
       <Name value={value} />
    </div>
  )
}

export default Props