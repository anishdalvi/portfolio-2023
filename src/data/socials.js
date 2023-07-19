import { FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const socials = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    bgColor: "bg-light-signature",
  },
  {
    title: "Github",
    icon: <FaGithub size={30} />,
    bgColor: "bg-[#17202A]",
  },
  {
    title: "E-Mail",
    icon: <HiOutlineMail size={30} />,
    bgColor: "bg-[#D44638]",
  },
  {
    title: "Instagram",
    icon: <BsInstagram size={30} />,
    bgColor: "bg-[#c13584]",
  },
];
