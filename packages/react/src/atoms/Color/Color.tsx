import React from 'react';
import {Spacing} from '@ds.e/foundation';
import '@ds.e/scss/lib/Utilities.css'

interface ColorCode {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing
}

const Color:React.FC<ColorCode> = ({hexCode, width=Spacing.sm, height=Spacing.sm}) => {
    const className = `dse-width-${width} dse-height-${height}`;

    return (
        <div className={className} style={{backgroundColor: hexCode}}>
            
        </div>
    );
};

export default Color;