import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const socials = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    bgColor: "linkedin",
    link: "https://www.linkedin.com/in/anishdalvi",
  },
  {
    title: "Github",
    icon: <FaGithub size={30} />,
    bgColor: "github",
    link: "https://github.com/anishdalvi",
  },
  {
    title: "E-Mail",
    icon: <HiOutlineMail size={30} />,
    bgColor: "email",
    email: "anishdalvi01@gmail.com",
  },
  {
    title: "Instagram",
    icon: <BsInstagram size={30} />,
    bgColor: "instagram",
    link: "https://www.instagram.com/anishh.dalvi",
  },
];

export const socialsMobile = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    bgColor: "linkedin",
    link: "https://www.linkedin.com/in/anishdalvi",
  },
  {
    title: "Github",
    icon: <FaGithub />,
    bgColor: "github",
    color: "#EBE6E4",
    link: "https://github.com/anishdalvi",
  },
  {
    title: "E-Mail",
    icon: <HiOutlineMail />,
    bgColor: "email",
    email: "anishdalvi01@gmail.com",
  },
  {
    title: "Instagram",
    icon: <BsInstagram />,
    bgColor: "instagram",
    link: "https://www.instagram.com/anishh.dalvi/",
  },
];
