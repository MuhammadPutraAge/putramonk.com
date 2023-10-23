import Link from "next/link";
import { SectionTitle } from ".";
import { Button } from "../global";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <section id="projects" className="mb-180 sm:mb-60 px-120 xl:px-60 sm:px-42 xs:px-24">
      <SectionTitle title="Portfolio" subtitle="My Latest Project" />

      <div className="mt-80 xl:mt-40 xs:mt-24 flex xl:flex-col-reverse xl:items-center justify-between">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-42 xs:text-24 text-purple leading-tight xl:text-center">
            Yayasan Teman Kita
          </h1>
          <h2 className="font-bold text-24 xs:text-18 text-black mb-24 xs:mb-16 xl:text-center">
            Non-Profit Organization
          </h2>
          <p className="font-bold text-18 xs:text-12 text-darkGrey w-450 xs:w-auto mb-40 xs:text-center">
            Yayasan Teman Kita is non-profit organization from Indonesia. Their
            organization focuses on improving human quality and spreading access
            to literacy.
          </p>
          <div className="flex xxs:flex-col justify-center items-center">
            <a
              className="py-20 xxs:py-12 px-24 bg-gold rounded-8 text-purple text-16 xs:text-12 font-bold mr-16 xxs:mr-0 xxs:mb-8"
              href="https://temankita.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
            <Link
              href="#contact"
              className="font-bold text-18 xs:text-14 text-purple underline"
            >
              Make website like this
            </Link>
          </div>
        </div>
        <div className="p-36 xs:p-24 xxs:p-16 rounded-8 gradient-bg xl:mb-32">
          <Image
            src="/images/temankita.svg"
            alt="Yayasan Teman Kita"
            width={458}
            height={240}
            className="rounded-4"
          />
        </div>
      </div>
    </section>
  );
}
