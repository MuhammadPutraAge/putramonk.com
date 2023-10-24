export type MenuTitle = "My Skill" | "Experience" | "Achievement";

export interface Myskill {
  skillName: string;
  skillSrc: string;
}

export interface Experience {
  companyLogo: string;
  jobPosition: string;
  companyName: string;
  companyLocation: string;
  jobType: string;
  workDuration: string;
  jobDesk: string;
}

export interface Achievement {
  eventLogo: string;
  eventName: string;
  eventOrganizer: string;
  eventLocation: string;
  eventDecription: string;
}

export type MenuContent = Myskill | Experience | Achievement;

export interface AboutMenuListType {
  title: MenuTitle;
  description: string;
  content: MenuContent[];
}

export interface Service {
  serviceLogo: string;
  serviceTitle: string;
  serviceDescription: string
}

export interface Contact {
  contactIcon: string;
  contactTitle: string;
  contactValue: string;
}

interface NavbarLink {
  href: string;
  linkTitle: string;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    href: '#about',
    linkTitle: 'About',
  },
  {
    href: '#services',
    linkTitle: 'Services',
  },
  {
    href: '#projects',
    linkTitle: 'Projects',
  },
  {
    href: '#contact',
    linkTitle: 'Contact',
  },
]

export const ABOUT_MENU_LIST: AboutMenuListType[] = [
  {
    title: "My Skill",
    description:
      "As a full-stack developer, I possess a diverse and dynamic skill set that enables me to create end-to-end web solutions with precision and innovation. Here's an in-depth look at my capabilities.",
    content: [
      {
        skillName: "Typescript",
        skillSrc: "/images/typescript.svg",
      },
      {
        skillName: "React.js",
        skillSrc: "/images/react.svg",
      },
      {
        skillName: "Next.js",
        skillSrc: "/images/next.svg",
      },
      {
        skillName: "NodeJS",
        skillSrc: "/images/nodejs.svg",
      },
    ],
  },
  {
    title: "Experience",
    description:
      "In my three-year journey as a full-stack developer, I've had the privilege of contributing to diverse projects. Here are some key highlights.",
    content: [
      {
        companyLogo: "/images/stockbit.svg",
        jobPosition: "Web Engineer",
        companyName: "Stockbit",
        companyLocation: "Jakarta Selatan, Jakarta, Indonesia",
        jobType: "Full-Time",
        workDuration: "2 Years",
        jobDesk:
          "Build and maintain trading related module for Stockbit web application.",
      },
      {
        companyLogo: "/images/agit.svg",
        jobPosition: "Frontend Developer",
        companyName: "AGIT",
        companyLocation: "Jakarta Pusat, Jakarta, Indonesia",
        jobType: "Internship",
        workDuration: "1 Year",
        jobDesk:
          "Build frontend application for National Gas Company using React.js.",
      },
    ],
  },
  {
    title: "Achievement",
    description:
      "A showcase of recognition and accomplishments that celebrate my dedication and contributions to the field.",
    content: [
      {
        eventLogo: "images/sriwijaya.svg",
        eventName: "Winner of Technology Euphoria",
        eventOrganizer: "Universitas Sriwijaya",
        eventLocation: "Palembang, Indonesia",
        eventDecription:
          "My team developed a smart city fullstack application, which is now being used by the government.",
      },
      {
        eventLogo: "images/stikom.svg",
        eventName: "Runner-up Progression Infinity",
        eventOrganizer: "ITB STIKOM Bali",
        eventLocation: "Bali, Indonesia",
        eventDecription:
          "My team built prototype for an online catering mobile application.",
      },
    ],
  },
];

export const SERVICE_LIST: Service[] = [
  {
    serviceLogo: '/images/frontend.svg',
    serviceTitle: 'Frontend Development',
    serviceDescription: 'Build reactive frontend application using Next.js framework.'
  },
  {
    serviceLogo: '/images/backend.svg',
    serviceTitle: 'Backend Development',
    serviceDescription: 'Build fully functional API using express framework with typescript.'
  },
  {
    serviceLogo: '/images/fullstack.svg',
    serviceTitle: 'Fullstack Development',
    serviceDescription: 'Build end-to-end web application from backend to frontend.'
  },
]

export const CONTACT_LIST: Contact[] = [
  {
    contactIcon: '/icons/whatsapp.svg',
    contactTitle: 'Whatsapp Number',
    contactValue: '+6285174421766',
  },
  {
    contactIcon: '/icons/email.svg',
    contactTitle: 'My Email',
    contactValue: 'muhammadputraage@gmail.com',
  },
  {
    contactIcon: '/icons/location.svg',
    contactTitle: 'Location',
    contactValue: 'Samarinda, Indonesia',
  },
]