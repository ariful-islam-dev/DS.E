import React from 'react';

const Select = ({ label = "Please Select an option", options = [], onOptionSelected }) => {
    const handleOptionClick = (option, index) => {
        if (onOptionSelected) {
            onOptionSelected(option, index);
        }
    };
    return (React.createElement("div", null,
        React.createElement("button", null, label),
        React.createElement("ul", null, options.map((option, index) => React.createElement("li", { key: option.value, onClick: () => handleOptionClick(option, index) }, option.label)))));
};

export { Select as S };
//# sourceMappingURL=Select-7f0c5d83.js.map
