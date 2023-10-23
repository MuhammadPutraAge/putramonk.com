import { Contact } from "@/constant";
import Image from "next/image";

export default function ContactItem({
  contactIcon,
  contactTitle,
  contactValue,
}: Contact) {
  return (
    <div className="flex items-center mb-32 xl:mb-0 md:mb-32 xl:mr-32 md:mr-0 last:mb-0 xl:last:mr-0 md:last:mr-0">
      <Image src={contactIcon} alt={contactTitle} width={50} height={50} className="xxs:w-32 xxs:h-32" />
      <div className="flex-1 ml-16">
        <h3 className="font-semibold text-14 xxs:text-12 text-black">{contactTitle}</h3>
        <p className="font-semibold text-12 xxs:text-8 text-darkGrey">{contactValue}</p>
      </div>
    </div>
  );
}
