import React, { useLayoutEffect, useRef, useState } from "react";
import "@ds.e/scss/lib/Select.css";
import Text from "../../atoms/Text";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options?: Array<SelectOption>;
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
}

const Select: React.FC<SelectProps> = ({
  label = "Please Select an option",
  options = [],
  onOptionSelected,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const labelRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectOption, index: number) => {
    if (onOptionSelected) {
      onOptionSelected(option, index);
    }
    setSelectedIndex(index);
    setIsOpen(false);
  };

  let selectedOption = null;
  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button ref={labelRef} className="dse-select_label" onClick={handleClick}>
        <Text> {selectedOption === null ? label : selectedOption.label}</Text>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`dse-select_caret ${isOpen ? 'dse-select_caret-open': 'dse-select_caret-close'}`}
          width={"1rem"}
          height={"1rem"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && (
        <ul style={{ top: overlayTop }} className="dse-select_overlay">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            return (
              <li
                className={`dse-select_option ${
                  isSelected ? "dse-select_option-selected" : ""
                }`}
                key={option.value}
                onClick={() => handleOptionClick(option, index)}
              >
                <Text>{option.label}</Text>
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    width={"1rem"}
                    height={"1rem"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
