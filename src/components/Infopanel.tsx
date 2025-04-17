import MobileCloudWindow from "./MobileCloudWindow";

const Infopanel = () => {
  return (
    <div className="hidden lg:flex flex-col relative w-[20vw] overflow-y-auto text-pretty">
      <MobileCloudWindow />
      <div className="flex flex-col gap-4 px-5 py-5 border-neutral-700">
        <h2 className={`font-bold dark:text-neutral-400`}>ABOUT</h2>
        <p className="text-base text-pretty">
          Formerly an engineer at Amazon and Lippincott. Currently doing
          freelance work and building cool things with AI.
        </p>
      </div>
      <div className="py-5 mx-5 border-t border-neutral-700">
        <h2 className={`font-bold mb-5 dark:text-neutral-400`}>EXPERIENCE</h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <div className="font-medium">Amazon</div>
            <div className="dark:text-neutral-400 text-balance text-base">
              Front End Engineer, 2022 - 2023
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium">Lippincott</div>
            <div className="dark:text-neutral-400 text-balance text-base">
              Design Technologist, 2023 - 2024
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium">Freelance</div>
            <div className="dark:text-neutral-400 text-balance text-base">
              Developer, 2024 - Present
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infopanel;
