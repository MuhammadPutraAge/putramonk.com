import { SERVICE_LIST } from "@/constant";
import { SectionTitle, ServiceItem } from ".";

export default function ServiceSection() {
  return (
    <section id="services" className="mb-180 sm:mb-60 px-120 xl:px-60 sm:px-42 xs:px-24">
      <SectionTitle title="My Services" subtitle="How Can I Help You" />

      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-24 mt-80 xs:mt-24">
        {SERVICE_LIST.map((serviceItem) => (
          <ServiceItem
            key={serviceItem.serviceTitle}
            serviceData={serviceItem}
          />
        ))}
      </div>
    </section>
  );
}
