import MobileCloudWindow from "./MobileCloudWindow";
import { ScrollArea } from "./ui/scroll-area";
import { useTheme } from "./theme/ThemeProvider";

const Infopanel = () => {
  const { theme } = useTheme();

  return (
    <div className="hidden lg:flex flex-col relative w-[20vw] h-full">
      <ScrollArea className="h-full">
        <MobileCloudWindow />
        <div className="flex flex-col gap-4 px-5 py-5 border-neutral-700">
          <h2 className={`font-bold dark:text-neutral-400 2xl:text-[1vw]`}>
            ABOUT
          </h2>
          <p className="text-base text-pretty 2xl:text-[1vw]">
            Formerly an engineer at Amazon and Lippincott. Currently doing
            freelance work and building cool things with AI.
          </p>
        </div>
        <div className="py-5 mx-5 border-t border-neutral-700">
          <h2 className={`font-bold mb-5 dark:text-neutral-400 2xl:text-[1vw]`}>
            EXPERIENCE
          </h2>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <div className="font-medium 2xl:text-[1vw]">Amazon</div>
              <div className="dark:text-neutral-400 text-balance text-base 2xl:text-[1vw]">
                Front End Engineer, 2022 - 2023
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-medium 2xl:text-[1vw]">Lippincott</div>
              <div className="dark:text-neutral-400 text-balance text-base 2xl:text-[1vw]">
                Front End Engineer, 2023 - 2024
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-medium 2xl:text-[1vw]">Freelance</div>
              <div className="dark:text-neutral-400 text-balance text-base 2xl:text-[1vw]">
                Developer, 2024 - Present
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div
        className={`absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-20 ${
          theme === "dark"
            ? "bg-gradient-to-t from-neutral-950 to-transparent"
            : "bg-gradient-to-t from-neutral-50 to-transparent"
        }`}
      />
    </div>
  );
};

export default Infopanel;
