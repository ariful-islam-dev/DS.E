import React, { useState } from 'react';

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
            React.createElement("span", null, "^")),
        isOpen && (React.createElement("ul", { className: "dse-select_overlay" }, options.map((option, index) => (React.createElement("li", { key: option.value, onClick: () => handleOptionClick(option, index) }, option.label)))))));
};

export { Select as S };
//# sourceMappingURL=Select-d3a8098f.js.map
