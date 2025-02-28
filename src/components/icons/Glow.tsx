import { SVGProps } from "react"

const Glow = (props: SVGProps<SVGSVGElement>) => (
    <svg width="393" height="346" viewBox="0 0 393 346" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_252_2)">
            <path fillRule="evenodd" clipRule="evenodd" d="M393 0H0V346H393V0ZM196.559 30C142.258 30 98.238 74.0195 98.238 128.32V316.648H294.879V128.32C294.879 74.0195 250.86 30 196.559 30Z" fill="url(#paint0_radial_252_2)"/>
        </g>
        <defs>
            <radialGradient id="paint0_radial_252_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(196 186.5) scale(223 264.597)">
                <stop/>
                <stop offset="0.0001" stopColor="#363636"/>
                <stop offset="0.875" stopColor="#666666" stopOpacity="0"/>
            </radialGradient>
            <clipPath id="clip0_252_2">
                <rect width="393" height="346" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export default Glow;