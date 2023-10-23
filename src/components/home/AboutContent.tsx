import {
  AboutMenuListType,
  Achievement,
  Experience,
  Myskill,
} from "@/constant";
import { If } from "../global";
import Image from "next/image";

interface AboutContentProps {
  selectedMenu: AboutMenuListType;
}

export default function AboutContent({ selectedMenu }: AboutContentProps) {
  return (
    <>
      <p className="text-darkGrey text-18 xs:text-14 xxs:text-12 font-semibold">
        {selectedMenu.description}
      </p>

      <If condition={selectedMenu.title === "My Skill"}>
        <div className="flex justify-between items-center mt-60 xs:mt-40">
          {selectedMenu.content.map((menuItem) => {
            const { skillName, skillSrc } = menuItem as Myskill;

            return (
              <div
                key={skillName}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={skillSrc}
                  alt={skillName}
                  width={80}
                  height={80}
                  className="xs:w-60 xxs:w-40 xs:h-60 xxs:h-40"
                />
                <p className="text-center mt-8 text-black text-14 xs:text-12 xxs:hidden font-semibold">
                  {skillName}
                </p>
              </div>
            );
          })}
        </div>
      </If>

      <If condition={selectedMenu.title === "Experience"}>
        <div className="mt-40">
          {selectedMenu.content.map((menuItem) => {
            const {
              companyLogo,
              jobPosition,
              companyName,
              jobType,
              workDuration,
              companyLocation,
              jobDesk,
            } = menuItem as Experience;

            return (
              <div key={companyName} className="flex mb-24 last:mb-0">
                <Image
                  className="xs:w-60 xs:h-60"
                  src={companyLogo}
                  alt={companyName}
                  width={80}
                  height={80}
                />
                <div className="ml-16 flex-1">
                  <div className="flex xs:flex-col justify-between xs:justify-normal items-center xs:items-start">
                    <h1 className="font-semibold text-18 xs:text-14 text-black">
                      {jobPosition} at {companyName}
                    </h1>
                    <p className="font-semibold text-12 text-darkGrey">
                      {jobType} - {workDuration}
                    </p>
                  </div>
                  <p className="font-semibold text-12 text-darkGrey">
                    {companyLocation}
                  </p>
                  <p className="font-semibold text-12 text-black mt-8 max-w-sm">
                    {jobDesk}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </If>

      <If condition={selectedMenu.title === "Achievement"}>
        <div className="mt-40">
          {selectedMenu.content.map((menuItem) => {
            const {
              eventDecription,
              eventLocation,
              eventLogo,
              eventName,
              eventOrganizer,
            } = menuItem as Achievement;

            return (
              <div key={eventName} className="flex items-start mb-24 last:mb-0">
                <Image src={eventLogo} alt={eventName} width={80} height={80} className="xs:w-60 xs:h-60" />
                <div className="ml-16 flex-1">
                  <h1 className="font-semibold text-18 xs:text-14 text-black">
                    {eventName}
                  </h1>
                  <p className="font-semibold text-12 text-darkGrey">
                    {eventOrganizer} - {eventLocation}
                  </p>
                  <p className="font-semibold text-12 text-black mt-8 max-w-sm">
                    {eventDecription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </If>
    </>
  );
}
