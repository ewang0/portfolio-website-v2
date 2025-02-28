'use client'

import {SVGProps} from "react"
import { useState, useEffect } from "react"

type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
    themeBackgroundColor?: string
}

const StarBanner = ({
	size,
	width,
	height,
    color,
    themeBackgroundColor,
	...props
}: IconSvgProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <img src="/skeletons/starbanner-skeleton.svg" alt="" />
    }

    return (
        <svg
            aria-hidden="true"
            focusable="false"
            height="63"
            role="presentation"
            viewBox="0 0 393 63"
            width="393"
            preserveAspectRatio="none"
            {...props}
        >
            <g fill={color}>
                <path fillRule="evenodd" clipRule="evenodd" d="M29.1217 0C29.1144 0.271978 29.1113 0.551394 29.1127 0.837637C29.1187 0.560879 29.1217 0.281673 29.1217 0ZM77.3561 0.837637C76.939 20.0591 62.1768 27.4713 52.0982 29.3566C33.9104 26.3573 29.159 10.0566 29.1127 0.837637C28.6381 22.7116 9.58596 29.2921 0 29.8378C23.2973 29.8378 29.1217 50.2822 29.1217 60.5044C29.1217 38.9156 42.6532 31.6146 52.771 30.1135C72.3082 32.5796 77.3651 50.9795 77.3651 60.5044C77.3651 38.9156 90.8966 31.6146 101.014 30.1135C120.552 32.5796 125.608 50.9795 125.608 60.5044C125.608 38.9156 139.14 31.6146 149.258 30.1135C168.795 32.5796 173.852 50.9795 173.852 60.5044C173.852 38.9156 187.383 31.6146 197.501 30.1135C217.038 32.5796 222.095 50.9795 222.095 60.5044C222.095 38.9156 235.627 31.6146 245.745 30.1135C265.282 32.5796 270.339 50.9795 270.339 60.5044C270.339 38.9156 283.87 31.6146 293.988 30.1135C313.525 32.5796 318.582 50.9795 318.582 60.5044C318.582 38.9155 332.113 31.6146 342.231 30.1135C361.768 32.5795 366.825 50.9795 366.825 60.5044C366.825 36.0883 384.133 29.9474 394.236 29.8031C394.796 29.8261 395.366 29.8378 395.947 29.8378C395.405 29.8069 394.833 29.7945 394.236 29.8031C372.372 28.9039 366.866 10.7649 366.816 0.837637C366.822 0.560879 366.825 0.281673 366.825 0C366.818 0.271978 366.815 0.551394 366.816 0.837637C366.399 20.0591 351.637 27.4713 341.558 29.3566C323.371 26.3573 318.619 10.0566 318.573 0.837637C318.579 0.560879 318.582 0.281673 318.582 0C318.575 0.271978 318.571 0.551394 318.573 0.837637C318.156 20.0591 303.394 27.4713 293.315 29.3565C275.127 26.3573 270.376 10.0566 270.33 0.837637C270.336 0.560879 270.339 0.281673 270.339 0C270.331 0.271978 270.328 0.551394 270.33 0.837637C269.913 20.0591 255.15 27.4713 245.072 29.3566C226.884 26.3573 222.132 10.0566 222.086 0.837637C222.092 0.560879 222.095 0.281673 222.095 0C222.088 0.271978 222.085 0.551394 222.086 0.837637C221.669 20.0591 206.907 27.4713 196.828 29.3566C178.641 26.3573 173.889 10.0566 173.843 0.837637C173.849 0.560879 173.852 0.281673 173.852 0C173.844 0.271978 173.841 0.551394 173.843 0.837637C173.426 20.0591 158.664 27.4713 148.585 29.3566C130.397 26.3573 125.646 10.0566 125.599 0.837637C125.605 0.560879 125.608 0.281673 125.608 0C125.601 0.271978 125.598 0.551394 125.599 0.837637C125.182 20.0591 110.42 27.4713 100.342 29.3566C82.1538 26.3573 77.4024 10.0566 77.3561 0.837637ZM77.3561 0.837637C77.3621 0.560879 77.3651 0.281673 77.3651 0C77.3577 0.271978 77.3546 0.551394 77.3561 0.837637Z" fill={color} />            
            </g>
        </svg>
    )
}
export default StarBanner