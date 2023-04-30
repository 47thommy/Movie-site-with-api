import { FunctionComponent } from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      {/* Removed Fixed Postiion from footer */}
      <div className="bg-dark-lighten text-white flex  flex-col md:flex-row gap-4 justify-between items-center py-4 px-4 shadow-md mt-3 sticky  bottom-0 w-full z-50">
        <p>
          <span>Copyright@2023 47 Movies</span>
        </p>
        <div className="flex gap-3 items-center">
          <p className="hidden md:block"> Contact Me</p>
          <div className="flex gap-3">
            <a href="https://github.com/47thommy">
              <BsGithub size={20} />
            </a>

            <a
              href="#
"
            >
              <BsLinkedin size={20} />
            </a>

            <a href="#">
              <BsFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
