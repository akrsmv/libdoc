import { useState } from 'react';

const Accordion = (props: any) => {
    const [expanded, setExpanded] = useState(props.expanded);

    const toggleAccordion = () => {
        setExpanded(!expanded);
        props.propagateExpandedState && props.propagateExpandedState(expanded)
    };

    return (
        <div className="border border-gray-300">
            <div
                className="flex items-center justify-between px-4 py-2 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h3 className="text-lg font-medium">{props.title}</h3>
                <svg
                    className={`w-6 h-6 ${expanded ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {expanded && props.children}
        </div>
    );
};

export default Accordion;
