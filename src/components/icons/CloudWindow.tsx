import {SVGProps} from "react"
import '../../App.css'

type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export const CloudWindow = ({
    color,
    ...props
}: IconSvgProps) => (
    <div className="relative">
        <div className="overlay absolute inset-0 z-0" />
        <svg
            aria-hidden="true"
            focusable="false"
            height="346"
            role="presentation"
            viewBox="0 0 393 346"
            width="393"
            preserveAspectRatio="none"
            {...props}
        >
            <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M393 0H0V346H393V0ZM196.559 30C142.258 30 98.238 74.0195 98.238 128.32V316.648H294.879V128.32C294.879 74.0195 250.86 30 196.559 30Z" fill={color} />
                <path 
                    d="M70.3822 172.171C69.6188 172.934 69.6188 174.172 70.3822 174.935L73.5786 178.131C74.342 178.895 75.5796 178.895 76.343 178.131L79.5394 174.935C80.3028 174.172 80.3028 172.934 79.5394 172.171L76.343 168.974C75.5796 168.211 74.342 168.211 73.5786 168.974L70.3822 172.171Z" fill="currentColor"
                />
                <path 
                    d="M313.461 172.171C312.697 172.934 312.697 174.172 313.461 174.935L316.657 178.131C317.42 178.895 318.658 178.895 319.421 178.131L322.618 174.935C323.381 174.172 323.381 172.934 322.618 172.171L319.421 168.974C318.658 168.211 317.42 168.211 316.657 168.974L313.461 172.171Z" 
                    fill="currentColor"
                />
                <path 
                    d="M196.559 30C142.258 30 98.238 74.0195 98.238 128.32V316.648H294.879V128.32C294.879 74.0195 250.86 30 196.559 30Z" 
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.8"
                    strokeWidth="0.5"
                    filter="drop-shadow(0 0 2px white) drop-shadow(0 0 5px white) drop-shadow(0 0 10px white) drop-shadow(0 0 20px white)"
                />
            </g>
        </svg>
    </div>
)