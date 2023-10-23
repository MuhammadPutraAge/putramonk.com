/* eslint-disable react/no-unescaped-entities */
import { CONTACT_LIST } from "@/constant";
import { ContactItem, SectionTitle } from ".";
import { InputField, TextArea } from "../global";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-120 xl:px-60 sm:px-42 xs:px-24 py-80 gradient-bg"
    >
      <SectionTitle
        title="Contact"
        subtitle="Connect with Me"
        titleColor="#F5F6FA"
        subtitleColor="#F5F6FA"
      />

      <div className="grid grid-cols-1 mt-80 xs:mt-24">
        <div className="grid grid-cols-6 xl:grid-cols-1 xl:grid-rows-6 gap-40 mb-40">
          <div className="col-span-2 xl:col-span-1 xl:row-span-2 md:row-span-3 bg-white rounded-8 p-32 xxs:p-16">
            <h1 className="font-bold text-32 xxs:text-24 text-purple">Get in Touch</h1>
            <p className="font-semibold text-16 xxs:text-12 text-black mb-40 xl:mb-24">
              Let's connect, discuss ideas, or tackle exciting projects
              together. I'm here and ready to chat.
            </p>

            <div className="xl:flex md:flex-col">
              {CONTACT_LIST.map((contact) => (
                <ContactItem
                  key={contact.contactTitle}
                  contactIcon={contact.contactIcon}
                  contactTitle={contact.contactTitle}
                  contactValue={contact.contactValue}
                />
              ))}
            </div>
          </div>
          <div className="col-span-4 xl:col-span-1 xl:row-span-4 md:row-span-3 grid grid-cols-2 gap-24">
            <InputField className="xs:col-span-2" placeholder="First Name" />
            <InputField className="xs:col-span-2" placeholder="Last Name" />
            <InputField className="col-span-2" placeholder="Subject" />
            <TextArea
              className="col-span-2 row-span-3"
              placeholder="Message"
              style={{ resize: "none" }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="mailto:muhammadputraage@gmail.com"
            className="self-end bg-gold p-20 xxs:p-16 rounded-8 xxs:rounded-4 font-bold text-16 xxs:text-12 text-purple outline-purple"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}
