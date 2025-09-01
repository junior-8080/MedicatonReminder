import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface HeaderComponentProps {
  showLeftButtons?: boolean;
  leftButtons?: ButtonProps[];
  showRightButtons?: boolean;
  showSearchInput?: boolean;
  rightButtons?: ButtonProps[];
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  containerClassName?: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  showLeftButtons = true,
  leftButtons = [],
  showRightButtons = true,
  showSearchInput = true,
  rightButtons = [],
  searchPlaceholder = "Search anything",
  onSearch,
  containerClassName = "flex justify-between items-center mb-4",
}) => {
  return (
    <div className={containerClassName}>
      {showLeftButtons && leftButtons.length > 0 && (
        <div
          className={` flex space-x-2 border-borders border-[1px] rounded-md`}
        >
          {leftButtons.map((button, index) => (
            <button
              key={`left-button-${index}`}
              className={button.className || "px-4 py-2 rounded"}
              onClick={button.onClick}
              type="button"
            >
              {button.icon && <span className="mr-2">{button.icon}</span>}
              {button.label}
            </button>
          ))}
        </div>
      )}

      {showRightButtons && (
        <div
          className={`flex space-x-2 items-center self-end ${
            !showLeftButtons ? "absolute right-0" : ""
          }`}
        >
          {showSearchInput && (
            <div className="relative">
              <input
                type="text"
                className="pl-8 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={searchPlaceholder}
                onChange={(e) => onSearch && onSearch(e.target.value)}
              />
              <svg
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          )}

          {rightButtons.map((button, index) => (
            <button
              key={`right-button-${index}`}
              className={button.className || "px-4 py-2 rounded"}
              onClick={button.onClick}
              type="button"
            >
              {button.icon && <span className="mr-2">{button.icon}</span>}
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
