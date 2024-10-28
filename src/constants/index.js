// Asset Imports
import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  spline,
  shopify,
  tripguide,
  movieapp,
  threejs,
  oracle,
  nikeweb,
  weather,
  gsapIcon,
  nextJsIcon,
  github,
  mySql,
  redux,
  realEstate,
  og,
  bankMS,
  hackathon,
  fizziup,

} from "../assets";

// Navigation Links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Services Offered
const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Java Developer", icon: creator },
];

// Technologies Used
const technologies = [
  { name: "Node JS", icon: nodejs },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: nextJsIcon },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "Redux", icon: redux },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Java", icon: oracle },
  { name: "MySQL", icon: mySql },
  { name: "Three JS", icon: threejs },
  { name: "Figma", icon: figma },
  { name: "Spline", icon: spline },
  { name: "GSAP", icon: gsapIcon },
 
];

// Professional Experiences
const experiences = [
  {
    title: "7th Rank in IMO",
    company_name: "International Maths Olympiad",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2015",
    points: ["Achieved 7th place in the International Maths Olympiad (IMO)."],
  },
  {
    title: "Oracle Learning Explorer",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Developed and maintained Java applications using Eclipse.",
      "Gained proficiency in Object-Oriented Programming (OOP) concepts.",
    ],
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    company_name: "TCS",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2023",
    points: [
      "Enhanced skills in communication, presentation, and team collaboration.",
      "Gained foundational knowledge in accounting, IT, and AI.",
    ],
  },
  {
    title: "Meta Front-End Developer",
    company_name: "Coursera",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining web applications using HTML, CSS, and JavaScript.",
      "Utilizing React to build dynamic, responsive interfaces.",
      "Ensuring cross-browser compatibility and responsive design.",
    ],
  },
];

// Client Testimonials
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

// Projects Portfolio
const projects = [
  {
    name: "Fizziup 3D Website",
    description:
      "A dynamic 3D website built with TypeScript, GSAP, Three.js and Next.js utilizing (SSR).",
    tags: [
      { name: "Next.JS", color: "blue-text-gradient" },
      { name: "Three.JS", color: "green-text-gradient" },
      { name: "GSAP", color: "pink-text-gradient" },
    ],
    image: fizziup,
    source_code_link: "https://github.com/nikhillohra/fizziup",
  },
  {
    name: "Hackathon App",
    description:
      "A full-featured Hackathon App allowing users to manage hackathons with CRUD operations.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: hackathon,
    source_code_link: "https://github.com/nikhillohra/Hackathon",
  },
  {
    name: "Organic Goods",
    description:
      "A commercial website showcasing sustainable products, built with React.js and styled with TailwindCSS. ",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "emailjs", color: "pink-text-gradient" },
    ],
    image: og,
    source_code_link: "https://github.com/nikhillohra/OrganicGoods",
  },

  {
    name: "Real-Estate",
    description:
      "Dynamic, responsive Real-Estate Web Application built with React.js, optimized for desktop and mobile devices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "swiper", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: realEstate,
    source_code_link: "https://github.com/nikhillohra/real-estate-webite",
  },
  {
    name: "Nike Clone 2024",
    description:
      "React-based Nike Clone with Tailwind CSS & Video-React, an immersive experience for online shopping.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "tailwindCss", color: "pink-text-gradient" },
    ],
    image: nikeweb,
    source_code_link: "https://github.com/nikhillohra/Nike",
  },
  {
    name: "Movie Application",
    description:
      "Movie Hunt - A web app allowing users to search movies using keywords, powered by OMDb API.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: movieapp,
    source_code_link: "https://github.com/nikhillohra/movie-app",
  },
  {
    name: "Weather App",
    description:
      "React-based Weather App to check real-time weather conditions of any city worldwide.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "restfulApi", color: "pink-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://github.com/nikhillohra/weather-app",
  },
  {
    name: "Bank Management",
    description:
      "Software system to streamline account management, record-keeping, and customer interactions.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "java-swing", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: bankMS,
    source_code_link: "https://github.com/nikhillohra/BankManagementSystem",
  },
  {
    name: "Chatting Application",
    description:
      "Java-based Chat Application for real-time communication, using socket programming and networking principles.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "java-swing", color: "green-text-gradient" },
      { name: "networking-api", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nikhillohra/ChattingApplication",
  },
];

// Exports
export { services, technologies, experiences, testimonials, projects };
