import React from 'react'
import General from './General';
import Education from './Education';
import Practical from './Practical'

function homepage() {
  return (
    <div>
     <General />
       <Education />
       <Practical />
    </div>
  )
}

export default homepage