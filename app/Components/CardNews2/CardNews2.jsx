import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function CardNews2() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae esse voluptatibus velit, est sit architecto nulla,
              voluptate ratione facere aperiam magni maiores et explicabo odio
              commodi corrupti illum sint exercitationem! Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
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
        </SwiperSlide>
        <SwiperSlide>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae esse voluptatibus velit, est sit architecto nulla,
              voluptate ratione facere aperiam magni maiores et explicabo odio
              commodi corrupti illum sint exercitationem! Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
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
        </SwiperSlide>
        <SwiperSlide>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae esse voluptatibus velit, est sit architecto nulla,
              voluptate ratione facere aperiam magni maiores et explicabo odio
              commodi corrupti illum sint exercitationem! Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
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
        </SwiperSlide>
        <SwiperSlide>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae esse voluptatibus velit, est sit architecto nulla,
              voluptate ratione facere aperiam magni maiores et explicabo odio
              commodi corrupti illum sint exercitationem! Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
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
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
