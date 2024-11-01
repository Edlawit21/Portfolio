import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `Hi there! I am a dedicated and versatile full stack developer with a passion for creating efficient, user-focused web applications. I have a deep understanding of technologies like HTML, CSS3, JavaScript, React, TailwindCSS, Node.js, Express, MongoDB, and MySQL and I enjoy building seamless digital solutions that make a difference. Take a look around to see some of my work, and feel free to reach out—I’m always excited to connect and explore new opportunities to innovate.`;

export const EXPERIENCES = [
  {
    year: "2023 ",
    role: "Intern Full Stack Developer",
    company: "Kuraz Tech",
    description: `During my internship at Kuraz Tech, I gained hands-on experience in web development and project collaboration. I worked alongside a dynamic team on various projects, enhancing my skills in front-end and back-end technologies. Through active involvement in real-world applications, I learned how to build responsive designs,  and integrate APIs. The experience taught me valuable lessons in  teamwork, and adapting to new challenges, equipping me with practical knowledge and a deepened passion for technology.`,
    technologies: ["Javascript", "CSS", "React.js", "Node.js", "Laravel"],
  },
  {
    year: "2024 - present ",
    role: "Freelance Full Stack Developer",
    company: "LINGER Gym",
    description: `Building first freelance project for a fiteness club that will manage their customers registration and entrance ID`,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Pharmacy Finder",
    image: project1,
    description:
      "A functional pharmacy finder website with features like searching medications either by scanning e-prescription or writting the name of medicine, bookmarks, e-prescription, simple inventory management,  and user authentication.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Flutter",
      "TailwindCSS",
    ],
    status: "Ongoing",
  },
  {
    title: "LINGER Gym Management System",
    image: project4,
    description:
      "A simple gym user management system like the registration the ID genertaion and the expire date of their ID based on their days of payment they made and other simple features.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
    ],
    status: "Ongoing",
  },
  {
    title: "Task Management System",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, kanban board and progress tracking.",
    technologies: ["React", "CSS", "Mysql"],
    status: "Paused",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
    status: "Finished",
  },
  {
    title: "School Payment System",
    image: project4,
    description: "A simple school payment website with different features",
    technologies: ["HTML", "CSS", "React"],
    status: "Paused",
  },
];

export const CONTACT = {
  address: "Ethiopia, Addis Ababa ",
  phoneNo: "+251 963 152 638 ",
  email: "edlawitbeyene21@gmail.com",
};
