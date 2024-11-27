import React, { useState } from 'react'
import ModelView from './ModelView'
import { useGSAP } from '@gsap/react'
import { yellowImg } from '../utils'


const Model = () => {
       const [size, setSize] =  useState ('small');
       const [model, setModel] = useState({
         title : 'iphone 15 pro in Natural Titanic',
         color: ['#8f8a81', '#ffke789', '#6f6c64'],
         img : yellowImg,
       })

      //  camera control for the image  

      const cameraControlSmall = useRef();
      const cameraControlLarge = useRef();
    useGSAP(()=>{
        gsap.to('#heading', {
            y:0, opacity : 1
        })
    })
  return (
    <section className='common-padding'>
          <div className='screen-max-width'>
             <h1 id='heading' className='section-heading'>
                Take a closer look
             </h1>

             <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                     <ModelView/>
                </div>
             </div>
          </div>
    </section>
  )
}

export default Model