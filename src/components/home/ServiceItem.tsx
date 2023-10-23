import { Service } from "@/constant";
import Image from "next/image";
import { Button } from "../global";

interface ServiceItemProps {
  serviceData: Service;
}

export default function ServiceItem({ serviceData }: ServiceItemProps) {
  const { serviceLogo, serviceTitle, serviceDescription } = serviceData;

  return (
    <div className="gradient-bg rounded-8 py-40 px-16 flex flex-col justify-center items-center">
      <Image src={serviceLogo} alt={serviceTitle} width={250} height={250} />
      <h1 className="mb-8 text-32 xs:text-24 text-white font-semibold text-center leading-tight w-326 xs:max-w-sm">
        {serviceTitle}
      </h1>
      <p className="leading-10 text-16 xs:text-14 text-white font-normal text-center w-326 xs:max-w-sm">
        {serviceDescription}
      </p>

      <Button
        href="#contact"
        title="Learn More"
        className="mt-32 bg-gold w-180 h-53 rounded-4 flex justify-center items-center text-darkPurple text-16 font-bold"
      />
    </div>
  );
}
