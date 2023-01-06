import React from 'react';
import { FontSize } from '@ds.e/foundation';
import '@ds.e/scss/lib/Text.css';

const Text = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as T };
//# sourceMappingURL=Text-c5b11532.js.map
