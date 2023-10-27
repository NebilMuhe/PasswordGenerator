import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const address = [
  {
    link: "https://github.com/NebilMuhe/NebilMuhe",
    tag: <FaGithub size={32} className="fill-green-400 hover:fill-blue-400" />,
  },
  {
    link: "https://instagram.com/nebil_muhidin?igshid=ZDc4OBmNjlmNQ==",
    tag: (
      <FaInstagram size={32} className="fill-green-400 hover:fill-blue-400" />
    ),
  },

  {
    link: "https://www.linkedin.com/in/nebil-muhidin-5a122022b",
    tag: (
      <FaLinkedin size={32} className="fill-green-400 hover:fill-blue-400" />
    ),
  },

  {
    link: "https://t.me/nubeyle",
    tag: (
      <FaTelegram size={32} className="fill-green-400 hover:fill-blue-400" />
    ),
  },
  {
    link: "https://twitter.com/Nebilmuhe?t=NECOUdZQ1B_fLblXWMYF5Q&s=09",
    tag: (
      <FaXTwitter size={32} className="fill-green-400 hover:fill-blue-400" />
    ),
  },
];

export default address;
