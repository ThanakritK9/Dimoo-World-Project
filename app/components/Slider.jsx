import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Slider({ 
    children: slides,
    autoSlide = false,
    autoSlideInterval = 2000,
}) {
    const [curr, setCurr] = useState(0)
    const prev = () => setCurr(curr => curr == 0 ? slides.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr == slides.length - 1 ? 0 : curr + 1)

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="overflow-hidden relative rounded-xl">
            <div className="flex  transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr*100}%)`}}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-3">
                <button onClick={prev} className="rounded pr-1 py-1 text-center shadow bg-white/20 text-black hover:bg-white/50">
                    <IoIosArrowBack size={40}/>
                </button>
                <button onClick={next} className="rounded pl-1 py-1 text-center shadow bg-white/20 text-black hover:bg-white/50">
                    <IoIosArrowForward size={40}/>
                </button>
            </div>
            <div className="absolute bottom-0 right-0 left-0">
                <div className="flex justify-center items-center gap-2">
                    {slides.map((_, i) => (
                        <div className={`
                        transition-all w-36 h-0.5 bg-white rounded-sm mb-2 mx-1
                        ${curr == i ? "p-0.5": "bg-opacity-50"}
                        `}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}