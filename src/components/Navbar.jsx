import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import elogo from "../assets/elogo.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={elogo}
            alt="logo"
            className="mx-2"
            width={140}
            height={10}
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/edlawit-beyene-b8377a327/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Edlawit21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://telegram.me/@edl_b21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
