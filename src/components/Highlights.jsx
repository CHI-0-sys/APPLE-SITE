import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {

  useGSAP(()=>{
     gsap.to('#title', {opacity:1 , y: 0, delay: 2})
     gsap.to('.link' , {opacity: 1 , y:0 , duration: 1.5 , stagger: 0.25},)
  })
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full commom-padding bg-zinc'>
        <div className='screen-max-width'>
             <div className='mb-12 w-full flex  items-end justify-between '>
                <h1 id='title' className='section-heading mt-4 text-gray-300 text-2xl'>
                    Get the highlights
                </h1>

                <div className='flex flex-wrap items-end gap-5'>
                   <p className='link'>watch the film
                        <img src={watchImg} alt="watch link"  className='ml-2'/>
                   </p>
                   <p className='link'>
                    watch the event 
                        <img src={rightImg} alt="event" />
                   </p>
                </div>

                
             </div>

                 <div>
                     <VideoCarousel/>
                </div>
        </div>
    </section>
  )
}

export default Highlights;