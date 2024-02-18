import React, { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface PathProps {
  d: string;
  className?: string;
  opacity?: string;
  variants?: {
    closed: { d: string };
    open: { d: string };
  };
}

const Path: React.FC<PathProps> = ({ d, className, opacity, variants }) => {
 

  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);



  return (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke={isDarkMode ? "white" : "black"} // Set stroke color based on isDarkMode
      strokeLinecap="round"
      d={d}
      className={className}
      opacity={opacity}
    />
  );
};

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  const isMobile = useSelector((state: any) => state.theme.isMobile);

  return (
    isMobile && (
      <button className={`fixed top-0 right-0 z-[100] p-4 text-red-500`} onClick={toggle}>
      <svg width="23" height="18" viewBox="0 0 23 18">
        {/* Full width at top */}
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        {/* Middle width in the middle */}
        <Path d="M 2 9.423 L 15 9.423" opacity="1" className="middle" />
        {/* Small width at the bottom */}
        <Path
          d="M 2 16.346 L 8 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 4 16.346 L 18 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
    )

  );
};
