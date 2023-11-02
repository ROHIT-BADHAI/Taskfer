import './Badge.css'
import React from 'react'

export default function Badge({priority}) {
  let theme="#fdc500";
  if(priority.toLowerCase()==='low') theme="#fdc500";
  else if (priority.toLowerCase()==='medium') {theme="#fd8c00";}
else if (priority.toLowerCase()==='high'){ theme="#dc0000";}
else {theme="#780000";}
  return (
    <div className='badge' style={{backgroundColor:theme}}>
      {priority}
    </div>
  )
}
