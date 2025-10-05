import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "2D Animator",
      icon: web,
    },
    {
      title: "Concept Artist",
      icon: mobile,
    },
    {
      title: "Illustrator",
      icon: backend,
    },
    {
      title: "Storyboard Artist",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "12th Grade (ISC)",
      company_name: "Sophia High School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2022",
      points: [
        "ISC science , subjects - math,physics,,chemistry and art",
        
      ],
    },
    {
      title: "Bachelors",
      company_name: "St. Joseph's University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2023- April 2026 (yet to complete)",
      points: [
        " Im studying a 3 year degree in animation.",
      ],
    },
    {
      title: "Illustrator",
      company_name: "Children's books ",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "I am very passianote about makimg art for the education and overall developement of children .",
      ],
    },
    {
      title: "",
      company_name: "",
      icon: meta,
      iconBg: "",
      date: "",
      points: [
        "",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "An amazing artist .",
      name: "Sara Lee",
      designation: "CFO",
      company: "Tinkle",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Hardworking and talented ",
      name: "Chris Brown",
      designation: "COO",
      company: "Little books ",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "She can make exactly what you want!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Solar system app  ",
      description:
        "An AR educational app ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/janu123456789123/Planet_AR.git",
    },
    {
      name: "Jet Turbine ",
      description:
        "AR application built to show students the working of a turbine ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/janu123456789123/Jet_turbine.git",
    },
    {
      name: "Solar system film",
      description:
        "An AR film made in unity",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/janu123456789123/SOLAR-SYSTEM-JAHNAVI.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };