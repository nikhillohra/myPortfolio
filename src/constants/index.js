import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  spline,
  shopify,
  carrent,
  jobit,
  tripguide,
  movieapp,
  threejs,
  oracle,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: oracle,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "spline",
    icon: spline,
  },
];

const experiences = [
  {
    title: "7th Rank in IMO  ",
    company_name: "(International Maths Olympiad)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2015",
    points: ["Participated in IMO and achieved a ranking of 7th place."],
  },
  {
    title: "Oracle Learning Explorer ",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Developing and maintaining Java applications using Eclipse.",
      "Gained proficiency in Object Oriented Programming (OOPs) concepts and expanded my knowledge by practicing various fundamental Java programs.",
    ],
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    company_name: "TCS",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2023",
    points: [
      "Developed strong communication, presentation, and soft skills.",
      "Acquired expertise in resume writing, group discussion, and interview techniques.",
      "Gained foundational knowledge in accounting, IT skills, and artificial intelligence overview.",
    ],
  },
  {
    title: "Meta Front-End Developer ",
    company_name: "Coursera",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
      "Using React in relation to Javascript libraries and frameworks.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real-Estate",
    description:
      " Dynamic and responsive Real-Estate Web Application using React.js, HTML, and CSS for optimal usability on desktop and mobile devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "swiper",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/nikhillohra/real-estate-webite",
  },
  {
    name: "Bank Management System",
    description:
      "Software system programmed to facilitate streamlined account management, record-keeping, and customer interaction",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "java-swing",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/nikhillohra/BankManagementSystem",
  },
  // {
  //   name: "Chatting Application",
  //   description:
  //     "Developed a Java-based Chat Application with a focus on real-time communication using socket programming, incorporating networking and cybersecurity principles for enhanced functionality and security.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "java-swing",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "networking-api)",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/nikhillohra/ChattingApplication",
  // },
  {
    name: "Movie Application",
    description:
      "Movie Hunt - This is a simple movie searching website where users can search for movies using keywords. The website utilizes the OMDb API to fetch movie data based on the user's search query..",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/nikhillohra/movie-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
