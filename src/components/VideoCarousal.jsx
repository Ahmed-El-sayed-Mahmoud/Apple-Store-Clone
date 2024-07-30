import { useRef } from "react"
import { hightlightsSlides } from "../constants"
import { useState } from "react";
import { useEffect } from "react";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger) 

const VideoCarousal = () => {
  const VideoRef=useRef([]);
  const VideoSpanRef=useRef([]);
  const VideoDivRef=useRef([]);
  const [video,setVideo]=useState({
    isEnd:false,
    isLast:false,
    isPlaying:false,
    videoId:0,
    startPlay:false
  }) 
  const [loadedData,setLoadedData]=useState([])
  const {isEnd,isLast, isPlaying,videoId,startPlay}=video;

  useGSAP(()=>{
    gsap.to("#slider",{
      transform:`translateX(${-100*videoId}%)`
    })
    gsap.to("#video",{
      scrollTrigger:{
        trigger:"#video",
        toggleActions:"restart none none none"
      },
      onComplete:()=>{
        setVideo(pre=>({...pre,isPlaying:true,startPlay:true}))
      },

    })
  },[videoId])
  
  useEffect(() => {
    if(loadedData.length>3)
    {
      if(!isPlaying)
      {
        VideoRef.current[videoId].pause();
      }
      else if(startPlay)
      {
        VideoRef.current[videoId].play()
      }

    }
    
  }, [videoId,startPlay,isPlaying,loadedData])
  

  useEffect(() => {
    let cur_progress=0;
    let span=VideoSpanRef.current;
    
    if(VideoSpanRef.current[videoId])
    {
      let anim= gsap.to(span[videoId],{
        onUpdate:()=>{
          const progres=Math.ceil(anim.progress()*100)
          if(cur_progress!==progres)
            cur_progress=progres
          gsap.to(VideoDivRef.current[videoId],{
            width:window.innerWidth<760?'10vw':window.innerWidth<1200?"10vw":"4vw"
          })

          gsap.to(span[videoId],{
            width:`${cur_progress}%`,
            backgroundColor:"white"
          })
        },
        onComplete:()=>{
          gsap.to(VideoDivRef.current[videoId],{
            width:12
          })
          gsap.to(span[videoId],{
            backgroundColor:'#afafaf'
          })
        }
      })
      if(videoId===0)
        anim.restart()

      const animUpdate=()=>{
        anim.progress(VideoRef.current[videoId].currentTime/hightlightsSlides[videoId].videoDuration)
      }
      if(isPlaying)
        gsap.ticker.add(animUpdate)
      else
      gsap.ticker.remove(animUpdate)

    }
  
  
  }, [videoId,startPlay])
  

  const handleVideoPress=(type,index)=>{
    switch (type) {
      case "video-end":
        console.log("video end")
        setVideo(prev=>({...prev,isEnd:true , videoId:index+1}))
        break;
      case "video-last":
        setVideo(prev=>({...prev,isLast:true,isPlaying:false }))
        break;
        case "video-reset":
          console.log("video reset")
          setVideo(prev=>({...prev,isLast:false , videoId:0}))
          break;
          case "play":
          setVideo(prev=>({...prev,isPlaying:true }))
          break;
          case "pause":
          setVideo(prev=>({...prev,isPlaying:false }))
          break;
      default:
        break;
    }
  }
  return (
    <>
    <div className="flex items-center">
      {
        hightlightsSlides.map((val,i)=>(
          <div key={val.id} id="slider"className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl bg-black overflow-hidden ">
                <video id="video" playsInline={true} preload="auto" muted  ref={(vid)=>{VideoRef.current[i]=vid}} onPlay={()=>setVideo(prev=>({...prev,isPlaying:true}))} onLoadedMetadata={(e)=>setLoadedData(pre=>[...pre,e])} onEnded={i===VideoRef.current.length-1?()=>handleVideoPress("video-last"):()=>handleVideoPress("video-end",i)}>
                  <source  src={val.video} type="video/mp4"/>
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {
                  val.textLists.map(text=>(
                    <p className="md:text-2xl text-xl font-medium" key={text}>{text}</p>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }

    </div>
    <div className="relative flex-center mt-10">
      <div className="flex-center bg-gray-300 py-5 px-7 rounded-full backdrop-blur">
        {VideoRef.current.map((_,i)=>(
          <span className="mx-2 w-3 h-3 rounded-full bg-gray-200 cursor-pointer relative" key={i} ref={(el)=>{
            VideoDivRef.current[i]=el
          }}>
            <span className="w-0 h-full absolute rounded-full"
            ref={(el)=>{VideoSpanRef.current[i]=el}}/>

          </span>
        ))}
      </div>
        <button className="control-btn">
          <img src={isPlaying?pauseImg:isLast?replayImg:playImg
          } onClick={isLast?()=>handleVideoPress("video-reset")
            :!isPlaying?()=>handleVideoPress("play"):()=>handleVideoPress("pause")
          } alt="action" />
        </button>
    </div>
    </>
  )
}

export default VideoCarousal