import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import { rightImg, watchImg } from "../utils"
import VideoCarousal from "./VideoCarousal"


const Highlights = () => {
    useGSAP(()=>{
        gsap.to("#section_title",{
            opacity:1,
            y:0
        })
        gsap.to(".link",{
            opacity:1,
            y:0,
            stagger:.25,
            duration:1
        })
    },[])
  return (
    <section id="highlight" className="w-screen overflow-hidden bg-zinc common-padding">
        <div className="w-full screen-max-width">
            <div className="w-full mb-12 md:flex justify-between items-center">
                <h1 id="section_title" className="section-heading">Get the highlights.</h1>
                <div className="flex items-center">
                    <p className="link mr-4">Watch the film
                        <img src={watchImg} alt="watch icon" className="ml-2" />
                    </p>
                    <p className="link">Watch the event
                        <img src={rightImg} alt="watch icon" className="ml-2" />
                    </p>
                </div>

            </div>
            <VideoCarousal/>
        </div>

    </section>
  )
}

export default Highlights