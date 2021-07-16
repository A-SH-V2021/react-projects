import React from 'react'
import Tour from './Tour';

const Tours = ({tours,removehandle}) => {

    return (
        <section>
        <div className='title'>
            <h1 className=''>Our Tour</h1>
            <div className="underline"></div>
        </div>
        <div>
            {tours.map(item=>{
               return <Tour key={item.id} {...item} removehandle={removehandle}></Tour>
            })}
        </div>
            
        </section>
    )
}

export default Tours
