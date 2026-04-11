import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-14 w-14" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background Circle */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="#f0f9ff"
      />

      {/* Outer Border Circle */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="#0284c7"
        strokeWidth="2"
      />

      {/* Top Left Square - Tech Symbol */}
      <rect
        x="14"
        y="14"
        width="10"
        height="10"
        fill="#0284c7"
        rx="2"
      />

      {/* Top Right Circle */}
      <circle
        cx="50"
        cy="20"
        r="5"
        fill="#0ea5e9"
      />

      {/* Main Center Circle (Core) */}
      <circle
        cx="32"
        cy="32"
        r="12"
        fill="none"
        stroke="#075985"
        strokeWidth="2.5"
      />

      {/* Center Dot */}
      <circle
        cx="32"
        cy="32"
        r="4"
        fill="#0284c7"
      />

      {/* Bottom Left Tech Line */}
      <line
        x1="16"
        y1="48"
        x2="28"
        y2="48"
        stroke="#0ea5e9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Bottom Right Square */}
      <rect
        x="44"
        y="46"
        width="8"
        height="8"
        fill="#0284c7"
        rx="1.5"
      />

      {/* Connection Lines showing network */}
      <line
        x1="22"
        y1="24"
        x2="28"
        y2="18"
        stroke="#0284c7"
        strokeWidth="2"
        opacity="0.8"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="24"
        x2="36"
        y2="18"
        stroke="#0ea5e9"
        strokeWidth="2"
        opacity="0.8"
        strokeLinecap="round"
      />

      {/* Bottom accent lines */}
      <line
        x1="24"
        y1="48"
        x2="18"
        y2="54"
        stroke="#0284c7"
        strokeWidth="2"
        opacity="0.7"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="32"
        x2="42"
        y2="38"
        stroke="#0284c7"
        strokeWidth="2"
        opacity="0.7"
        strokeLinecap="round"
      />

      {/* Top accent dot */}
      <circle
        cx="32"
        cy="16"
        r="2.5"
        fill="#0ea5e9"
      />
    </svg>
  );
};

export default Logo;
