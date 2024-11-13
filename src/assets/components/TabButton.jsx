import React from 'react'

const TabBautton = ({title , onSelect}) => {

  return (
   
      <li><button onClick={onSelect}>{title}</button></li>
    
  )
}

export default TabBautton
