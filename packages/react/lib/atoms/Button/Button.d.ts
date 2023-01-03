import React from "react";
import '@ds.e/scss/lib/Button.css';
interface BtnProps {
    title: string;
    children: React.ReactNode;
    onClick: () => void;
}
declare const Button: React.FC<BtnProps>;
export default Button;
