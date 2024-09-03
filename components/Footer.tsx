import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-75 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ghzielmorhaf@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Morhaf Ghziel
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => {
            let link = "";
            if (info.id === 1) {
              link = "https://github.com/MorhafGhziel";
            } else if (info.id === 2) {
              link = "/";
            } else if (info.id === 3) {
              link = "https://www.linkedin.com/in/morhaf-ghziel-a720a72b9/";
            }

            return link ? (
              <a
                key={info.id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-3"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;