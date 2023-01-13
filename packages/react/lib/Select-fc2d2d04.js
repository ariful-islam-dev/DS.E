import React, { useState } from 'react';
import '@ds.e/scss/lib/Select.css';

const Select = ({ label = "Please Select an option", options = [], onOptionSelected, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option, index) => {
        if (onOptionSelected) {
            onOptionSelected(option, index);
        }
        setIsOpen(false);
    };
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { className: "dse-select_label", onClick: handleClick },
            React.createElement("span", null,
                " ",
                label),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", width: "1rem", height: "1rem" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { className: "dse-select_overlay" }, options.map((option, index) => (React.createElement("li", { key: option.value, onClick: () => handleOptionClick(option, index) }, option.label)))))));
};

export { Select as S };
//# sourceMappingURL=Select-fc2d2d04.js.map
