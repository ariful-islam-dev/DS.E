import React from 'react';
import '@ds.e/scss/lib/Button.css';

const Button = ({ title, onClick, children }) => {
    return React.createElement("button", { className: "btn btn-primary", onClick: onClick, title: title }, children);
};

export { Button as B };
//# sourceMappingURL=Button-e08bc57c.js.map
