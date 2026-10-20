import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SlSocialBehance } from "react-icons/sl";

const socials = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    path: "https://github.com/Caio-mizuno",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/caio-mizuno/",
  },
  {
    icon: <SlSocialBehance />,
    name: "Behance",
    path: "https://www.behance.net/CaioVAMizuno",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export { socials };
export default Social;
