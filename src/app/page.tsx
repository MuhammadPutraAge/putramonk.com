import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  ServiceSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection
        greetingText="I am Muhammad Putra Age"
        mainTitle="Fullstack Web Developer"
        description="Experienced developer who enjoys building web application from backend to frontend."
        profileSrc="/images/about-photo.png"
      />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
