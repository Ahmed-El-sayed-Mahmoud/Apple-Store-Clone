import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils'; 
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import gsap from 'gsap/all';

function ImageComponent() {
    const videoRef=useRef()
    useGSAP(()=>{
        gsap.from('#chip', {
            scrollTrigger: {
              trigger: '#chip',
              start: '20% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
          })
        
        gsap.to(".g_fadeIn",{
            scrollTrigger: {
                trigger: '.g_fadeIn',
                start: '20% bottom',
                toggleActions:"restart none"
              },
              opacity:1,
              y:0,
              ease:'fadIn'
        })
    },[])
  return (
    <section className="common-padding w-screen">
      <div className="screen-max-width overflow-hidden">
        <div className="flex w-full flex-col items-center justify-center">
        <div id="chip" className="flex-center w-full my-20 ">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className='py-10'>
            <div className='flex justify-center flex-col items-center  sm:text-4xl  md:text-7xl text-7xl font-medium'>
                <p>A17 Pro chip.</p>
                <p>A monster win for gaming.</p>
                <p className='hiw-subtitle'>
                It's here. The biggest redesign in the history of Apple GPUs.
                </p>
            </div>

        </div>


        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="relative z-10"
              />
            </div>
            <div className="absolute w-[95%] h-[90%] rounded-[55px] sm:rounded-[35px] overflow-hidden">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef} loop={true} >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          
          </div>





            <div className='flex my-10 sm:my-15 gap-24'>
                <div className='flex flex-col flex-1 w-full'>
                    <p className="hiw-text g_fadeIn">
                        A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                        <span className="text-white">
                        best graphic performance by far
                        </span>.
                    </p>
                    <p className="hiw-text g_fadeIn">
                    Mobile {' '}
                        <span className="text-white">
                        games will look and feel so immersive
                        </span>,
                        with incredibly detailed environments and characters.
                    </p>
                </div>
                <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                    <p className="hiw-text">New</p>
                    <p className="hiw-bigtext">Pro-class GPU</p>
                    <p className="hiw-text">with 6 cores</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default ImageComponent;
