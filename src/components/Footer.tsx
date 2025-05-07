import ExternalLink from "./ExternalLink";
import { ModeToggle } from "./ModeToggle";
import "../App.css";
import { useTheme } from "./theme/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex relative z-10 justify-center items-center md:border-t border-neutral-700 mx-5 sm:justify-between py-5 2xl:py-7">
        <div className="flex items-center justify-between border-neutral-700 w-full">
          <div
            className={`text-sm 2xl:text-[1vw] ${
              theme === "dark" ? "text-neutral-400" : ""
            }`}
          >
            <div className="flex items-center gap-2 cursor-default">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span className="text-teal-500">All systems normal</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <ExternalLink href="https://github.com/ewang0" text="Github" />
            <ExternalLink
              href="https://www.linkedin.com/in/ericwang20/"
              text="LinkedIn"
            />
            <ExternalLink href="/wang-resume-2025.pdf" text="Resume" />
            <div className="hidden md:block ml-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
