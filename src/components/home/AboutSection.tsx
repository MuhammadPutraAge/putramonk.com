"use client";

import {
  ABOUT_MENU_LIST,
  AboutMenuListType,
  MenuTitle,
  Myskill,
} from "@/constant";
import Image from "next/image";
import { useState } from "react";
import { AboutContent, AboutMenuList } from ".";

/* eslint-disable react/no-unescaped-entities */
export default function AboutSection() {
  const [activeMenu, setActiveMenu] = useState<AboutMenuListType>(
    ABOUT_MENU_LIST[0]
  );

  return (
    <section id="about" className="mb-180 sm:mb-60 px-120 xl:px-60 sm:px-42 xs:px-24 flex xl:flex-col justify-between xl:justify-normal xl:items-center">
      <div className="max-w-3xl xl:mb-80 sm:mb-0 sm:scale-75 xs:scale-100">
        <h2 className="text-black text-32 font-bold mb-40 xl:text-center">About Me</h2>
        <AboutMenuList activeTitle={activeMenu.title} onClick={setActiveMenu} />

        <AboutContent selectedMenu={activeMenu} />
      </div>

      <div className="relative gradient-bg w-326 h-400 rounded-8 mt-53 sm:mt-0 mr-202 xl:mr-180 sm:mr-150 py-36 px-32 sm:scale-75 xs:hidden">
        <div className="w-150 flex flex-col items-center">
          <h1 className="text-250 text-white leading-200 font-medium">
            3
          </h1>
          <p className="text-18 text-white font-medium">Years</p>
          <p className="text-28 text-white font-medium">Experience</p>
        </div>

        <div className="about-photo">
          <Image
            className="absolute bottom-0"
            src="/images/profile-web.png"
            alt="Muhammad Putra Age"
            width={326}
            height={326}
          />
        </div>

        <div className="absolute -bottom-16 w-202 h-42 flex justify-center items-center left-1/2 translate-x-1/2 rounded-4 bg-gold">
          <p className="text-purple text-14 font-bold">
            Muhammad Putra Age
          </p>
        </div>
      </div>
    </section>
  );
}
