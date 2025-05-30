const Headline = () => {
  return (
    <nav className="flex justify-center items-center border-y border-neutral-700 py-4 mx-5 sm:justify-between sm:py-5">
      <div className="py-2">
        <div className="text-5xl sm:text-6xl lg:text-[4vw] font-bold text-pretty">
          I&apos;m Eric, a full-stack{" "}
          <span className="text-cyan-500">engineer</span>,{" "}
          <span className="text-purple-400">designer</span>, and{" "}
          <span className="text-teal-500">builder</span>.
        </div>
      </div>
    </nav>
  );
};

export default Headline;
