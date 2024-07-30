import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, exploreVideo,explore2Img } from "../utils";
import { useRef } from "react";
import gsap from "gsap/all";
const Features = () => {
    const videoRef=useRef();
  useGSAP(() => {
    gsap.to(videoRef.current,{
        scrollTrigger:{
            trigger:videoRef.current,
            start:"-10% bottom",
            toggleActions:"play pause reverse restart"
        },
        onComplete:()=>{
            videoRef.current.play()
        }

    })
    animateWithGsap("#heading", { y: 0, opacity: 1 }, {});
    animateWithGsap(".g_grow", { scale: 1, opacity: 1, ease: 'power1' },
        { scrub: 5.5 })
        animateWithGsap(
            '.g_text',
            {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
          )
  }, []);
  return (
    <section className="common-padding w-screen bg-zinc overflow-hidden">
      <div className="w-full screen-max-width overflow-hidden">
        <h1 className="section-heading mb-10" id="heading">
          Explore the full story
        </h1>
        <div className="p-10 flex flex-col">
          <div className="mt-20 w-full  overflow-hidden mb-5 pb-6">
            <p className="sm:text-5xl text-7xl font-semibold">iPhone.</p>
            <p className="sm:text-5xl text-7xl font-semibold ">
              Frogged in Titanium.
            </p>
          </div>
          <div className="w-full flex flex-col flex-center  ">
            
            <div className="w-full h-[50vh] relative mb-5">
              <video
                playsInline
                id="exploreVideo"
                preload="none"
                autoPlay
                muted
                className="object-cover object-center w-full h-full "
                ref={videoRef}
              >
                <source src={exploreVideo} />
              </video>
          
            </div>
            
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>



              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is {' '}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>

            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
