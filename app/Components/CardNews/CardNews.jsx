"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Zoom } from "react-slideshow-image";

export default function CardNews() {
  const Cards = [Card1, Card2
  ];
  const zoomInProperties = {
    scale: 1,
    duration: 3000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />,
    nextArrow: <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />,
  };
 
    var Card1 = document.getElementById(1)

    var Card1 = document.getElementById(2)
 
 




  return (
    <body className="bg-black ">
      {/* pc*/}
      <div id="1" className="flex justify-center items-center gap-20 mt-[10%] invisible md:visible">
        <div className="h-[500px] w-[300px] bg-black border-2 rounded-md">
          <Image
            width={1920}
            height={1080}
            className=" "
            alt=" "
            src="/images/1.png"
          />
          <h1 className="text-red-600 text-xl font-bold mt-4 ml-4">Titulo</h1>
          <h2 className="ml-3 text-gray-600">Atualizado em 19/18/17</h2>
          <p className="text-white m-4 text-sm">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            esse voluptatibus velit, est sit architecto nulla, voluptate ratione
            facere aperiam magni maiores et explicabo odio commodi corrupti
            illum sint exercitationem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <Link href="/news" class="group  btn undefined">
            <span className="h-10 m-1 bg-red-600 w-72 rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20  group-hover:skew-y-12">
                Home
              </div>
              <div className="absolute  translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Home
              </div>
            </span>
          </Link>
        </div>
        <div id="2" className="h-[500px] w-[300px] bg-black border-2 rounded-md">
          <Image
            width={1920}
            height={1080}
            className=" "
            alt=" "
            src="/images/1.png"
          />
          <h1 className="text-red-600 text-xl font-bold mt-4 ml-4">Titulo</h1>
          <h2 className="ml-3 text-gray-600">Atualizado em 19/18/17</h2>
          <p className="text-white m-4 text-sm">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            esse voluptatibus velit, est sit architecto nulla, voluptate ratione
            facere aperiam magni maiores et explicabo odio commodi corrupti
            illum sint exercitationem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <Link href="/news" class="group  btn undefined">
            <span className="h-10 m-1 bg-red-600 w-72 rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20  group-hover:skew-y-12">
                Home
              </div>
              <div className="absolute  translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Home
              </div>
            </span>
          </Link>
        </div>
        <div className="h-[500px] w-[300px] bg-black border-2 rounded-md">
          <Image
            width={1920}
            height={1080}
            className=" "
            alt=" "
            src="/images/1.png"
          />
          <h1 className="text-red-600 text-xl font-bold mt-4 ml-4">Titulo</h1>
          <h2 className="ml-3 text-gray-600">Atualizado em 19/18/17</h2>
          <p className="text-white m-4 text-sm">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            esse voluptatibus velit, est sit architecto nulla, voluptate ratione
            facere aperiam magni maiores et explicabo odio commodi corrupti
            illum sint exercitationem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <Link href="/news" class="group  btn undefined">
            <span className="h-10 m-1 bg-red-600 w-72 rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20  group-hover:skew-y-12">
                Home
              </div>
              <div className="absolute  translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Home
              </div>
            </span>
          </Link>
        </div>
      </div>
      {/* mobile */}

      
   
      <Zoom {...zoomInProperties}> </Zoom>
      {Cards.map((each, index) => ( 
          <div
          key={index}
          className=""
        >
            <div src={each}>
                
            </div>
             </div>
      ))}


     

    
    </body>
  );
}
