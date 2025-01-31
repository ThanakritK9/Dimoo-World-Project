"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

export default function navbar() {
  return (
    <div>
        <nav className="w-full bg-white flex fixed justify-center drop-shadow-md top-0 z-50">
            <div className="w-full flex items-center py-3 bg-white px-8 max-lg:px-5">
                <Link href={"/"}>
                    <Image 
                        src={"/Logo.png"}
                        width={100}
                        height={100}
                        alt="logo"
                        className="max-lg:w-20"
                    ></Image>
                </Link>
                <div className="w-full flex justify-between items-center pl-12 max-lg:hidden">
                    <div>
                        <Link href={"/Pages/Series"}>
                            <span className="text-black font-bold px-5 pb-[20px] stand border-black hover:border-b-4">
                                SERIES
                            </span>
                        </Link>
                        <Link href={"#mega"}>
                            <span className="text-black font-bold px-5 pb-[20px] border-black hover:border-b-4">
                                MEGA
                            </span>
                        </Link>
                        <Link href={"#accessories"}>
                            <span className="text-black font-bold px-5 pb-[20px] border-black hover:border-b-4">
                                ACCESSORIES
                            </span>
                        </Link>
                    </div>
                    <div className="flex w-max">
                        <input type="text" name="search" id="search" 
                                className="flex peer text-black z-10 bg-transparent w-10 h-10 rounded-full border border-gray-400 cursor-pointer outline-none pl-12
                                            focus:w-full focus:border-black focus:cursor-text focus:pl-16 focus:pr-4"/>
                        <IoIosSearch className="text-gray-400 absolute inset-y-0 my-auto h-6 w-[50px] px3.5 stroke-gray-400 border-r border-transparent peer-focus:text-black peer-focus:border-black peer-focus:stroke-black"/>
                    </div>
                </div>
                <div className="lg:hidden w-full flex justify-end">
                    test
                </div>
            </div>
        </nav>
    </div>
  )
}
