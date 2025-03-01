import { motion } from "framer-motion"
import { useTheme } from "./theme/ThemeProvider"

const slides = [
    { title: "React" },
    { title: "Next.js" },
    { title: "Typescript" },
    { title: "Tailwind CSS" },
    { title: "Drizzle ORM" },
    { title: "Supabase" },
    { title: "Prisma" },
    { title: "Sanity" },
    { title: "tRPC"},
    { title: "Node" },
    { title: "Express" },
    { title: "MongoDB" },
    { title: "PostgreSQL" },
    { title: "AWS" },
    { title: "Docker" },
    { title: "CI/CD" },
    { title: "Authentication" },
]

const Slider = () => {
    const duplicatedSlides = [...slides, ...slides, ...slides]
    const { theme } = useTheme()
    return (
        <div className="flex items-center relative w-full overflow-hidden blur-[1.5px] min-h-10 dark:text-neutral-400 hover:blur-[0px]">
            <div className={`absolute z-20 left-0 h-full w-8 bg-gradient-to-r ${theme === 'dark' ? 'from-neutral-950 via-neutral-950 to-transparent' : 'from-neutral-50 via-neutral-50 to-transparent'}`} />
            <div className={`absolute z-20 right-0 h-full w-8 bg-gradient-to-l ${theme === 'dark' ? 'from-neutral-950 via-neutral-950 to-transparent' : 'from-neutral-50 via-neutral-50 to-transparent'}`} />
            <motion.div
                className="flex"
                animate={{
                    x: [ `0px`, '-4974.84px'],
                    transition: {
                        ease: 'linear',
                        duration: 75,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div 
                        key={index} 
                        className="flex flex-shrink-0 items-center justify-center" 
                        // style={{ width: `${100 / slides.length}%`}}
                    >
                        <div className="flex text-nowrap mx-8 h-full text-md py-2">
                            {slide.title}
                        </div>
                        <svg
                            className="blur-[1px]"
                            aria-hidden="true"
                            focusable="false"
                            height="24"
                            role="presentation"
                            viewBox="0 0 21 24"
                            width="21"
                        >
                            <g fill="currentColor" stroke="currentColor">
                                <path d="M10.4971 1.27688C10.4966 1.18227 10.4976 1.0899 10.5 1C10.5 1.09311 10.499 1.1854 10.4971 1.27688C10.5133 4.55839 12.3094 10.5543 19.4418 10.8515C19.6367 10.8487 19.8233 10.8528 20 10.863C19.8104 10.863 19.6244 10.8591 19.4418 10.8515C16.1461 10.8992 10.5 12.9291 10.5 21C10.5 17.621 8.59999 10.863 1 10.863C4.12711 10.6826 10.3422 8.50742 10.4971 1.27688Z" />
                                <path d="M10.5 1C10.4121 4.28767 12.1889 10.863 20 10.863C16.8333 10.6804 10.5 12.4521 10.5 21C10.5 17.621 8.59999 10.863 1 10.863C4.16667 10.6804 10.5 8.45205 10.5 1Z" />
                            </g>
                        </svg>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Slider