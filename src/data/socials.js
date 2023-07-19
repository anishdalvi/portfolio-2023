import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const socials = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    bgColor: "linkedin",
  },
  {
    title: "Github",
    icon: <FaGithub size={30} />,
    bgColor: "github",
  },
  {
    title: "E-Mail",
    icon: <HiOutlineMail size={30} />,
    bgColor: "email",
  },
  {
    title: "Instagram",
    icon: <BsInstagram size={30} />,
    bgColor: "instagram",
  },
];
