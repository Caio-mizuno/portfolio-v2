import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SlSocialBehance } from "react-icons/sl";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Caio-mizuno",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/caio-mizuno/",
  },
  {
    icon: <SlSocialBehance />,
    path: "https://www.behance.net/CaioVAMizuno",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
