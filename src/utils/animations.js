import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);


export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
}

export const animateWithGsap=(target,animaptionProbs,scrollProbs)=>{
gsap.to(target,{
    scrollTrigger:{
        trigger:target,
        toggleActions: 'restart restart restart reverse',
        start:'top 90%',
        ...scrollProbs
    },
    
    ...animaptionProbs
    
})
}