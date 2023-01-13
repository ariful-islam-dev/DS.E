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
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handleClick }, label),
        isOpen && (React.createElement("ul", null, options.map((option, index) => (React.createElement("li", { key: option.value, onClick: () => handleOptionClick(option, index) }, option.label)))))));
};

export { Select as S };
//# sourceMappingURL=Select-d08459fa.js.map
