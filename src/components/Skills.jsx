import React from 'react'

export default function Skills(props) {
   const { id, skill, image } = props.data;



  return (
    <div>
        <div className='flex flex-col'>
            <img src={image}/>
          <h1 className='font-bold'>{skill}</h1>
          </div>
    </div>
  )
}
