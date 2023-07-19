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

export const socialsMobile = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    bgColor: "linkedin",
  },
  {
    title: "Github",
    icon: <FaGithub />,
    bgColor: "github",
    color: "#EBE6E4",
  },
  {
    title: "E-Mail",
    icon: <HiOutlineMail />,
    bgColor: "email",
  },
  {
    title: "Instagram",
    icon: <BsInstagram />,
    bgColor: "instagram",
  },
];
