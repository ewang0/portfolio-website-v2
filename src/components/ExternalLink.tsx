import React from 'react';

interface ExternalLinkProps {
    href: string;
    text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text }) => {
    return (
        <div className="hover:underline hover:underline-offset-4 cursor-pointer z-20">
            <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
            <svg className="ml-1 mb-[1px] inline-block" width="11" height="11" viewBox="0 0 9 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.146447 7.14645C-0.0488156 7.34171 -0.0488156 7.65829 0.146447 7.85355C0.341709 8.04882 0.658291 8.04882 0.853553 7.85355L0.146447 7.14645ZM8 0.5C8 0.223858 7.77614 -1.01534e-07 7.5 -2.27975e-07L3 1.7242e-07C2.72386 3.83301e-09 2.5 0.223858 2.5 0.5C2.5 0.776142 2.72386 1 3 1L7 1L7 5C7 5.27614 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.27614 8 5L8 0.5ZM0.853553 7.85355L7.85355 0.853553L7.14645 0.146447L0.146447 7.14645L0.853553 7.85355Z" fill="currentColor"/>
            </svg>
        </div>
    );
};

export default ExternalLink;