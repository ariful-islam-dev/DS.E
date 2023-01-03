import React from 'react';

const Button = ({ title, onClick, children }) => {
    return React.createElement("button", { className: "btn btn-primary", onClick: onClick, title: title }, children);
};

export { Button as B };
//# sourceMappingURL=Button-c2d60ed8.js.map
