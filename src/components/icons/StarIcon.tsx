import { SVGProps } from "react";

const StarIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            className="blur-[1px]"
            aria-hidden="true"
            focusable="false"
            height="24"
            role="presentation"
            viewBox="0 0 21 24"
            width="21"
            {...props}
        >
            <g fill="currentColor" stroke="currentColor">
                <path d="M10.4971 1.27688C10.4966 1.18227 10.4976 1.0899 10.5 1C10.5 1.09311 10.499 1.1854 10.4971 1.27688C10.5133 4.55839 12.3094 10.5543 19.4418 10.8515C19.6367 10.8487 19.8233 10.8528 20 10.863C19.8104 10.863 19.6244 10.8591 19.4418 10.8515C16.1461 10.8992 10.5 12.9291 10.5 21C10.5 17.621 8.59999 10.863 1 10.863C4.12711 10.6826 10.3422 8.50742 10.4971 1.27688Z" />
                <path d="M10.5 1C10.4121 4.28767 12.1889 10.863 20 10.863C16.8333 10.6804 10.5 12.4521 10.5 21C10.5 17.621 8.59999 10.863 1 10.863C4.16667 10.6804 10.5 8.45205 10.5 1Z" />
            </g>
        </svg>
    )
}

export default StarIcon;
