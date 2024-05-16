"use client";
import React, { useState }from 'react'
import Image from 'next/image';
import Slider from "./components/Slider";

const slides = [
  "/slide/1.jpg",
  "/slide/2.jpg",
  "/slide/3.jpg",
  "/slide/4.jpg",
  "/slide/5.jpg",
  "/slide/6.jpg",
]

export default function page() {
  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center z-0">
        <div className="flex justify-center mt-24 w-9/12">
          <Slider autoSlide={true} >
            {slides.map((s) => (
              <Image 
                src={s}
                width={1920}
                height={0}
                alt="New"
              />
            ))}
          </Slider>
        </div>
        <div className="flex flex-col mt-9 w-9/12 pl-1">
          <span className="text-3xl font-bold mb-4">
            NEW COLLECTION
          </span>
          <div className="flex flex-row flex-wrap justify-center gap-8 mb-20">
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="peer flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new1.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new2.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="peer flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new3.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new4.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new5.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new6.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new7.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new8.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new9.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new10.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
            <div className="group flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg border-2 border-white hover:border-gray-400">
              <Image
                src={"/new/new11.jpg"}
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 hover:scale-[1.025] group-hover:scale-[1.025]"
              />
              <div className="peer flex flex-col pl-2 pt-3 pb-5">
                <span className="text-sm text-[#DAA520]">POPMART</span>
                <span className="font-bold">DIMOO Animal Kingdom Series Figures</span>
              </div>
            </div>
          </div>
      </div>
      </div>
    </main>
  )
}
