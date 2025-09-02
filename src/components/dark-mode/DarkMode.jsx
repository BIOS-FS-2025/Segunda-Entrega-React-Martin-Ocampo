import "./DarkMode.css";
import { useEffect, useState } from "react";
const DarkMode = () => {
  const [mode, setMode] = useState("light");

  // cuando el componente se monta, leo LS
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setMode(saved);
    document.body.classList.toggle("dark", saved === "dark");
  }, []);

  const changeIt = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    document.body.classList.toggle("dark", newMode === "dark");
  };

  return (
    <button className="dark-mode-button" onClick={changeIt}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <circle
            cx={12}
            cy={12}
            r={8.5}
            stroke="currentColor"
            strokeWidth={1.7}
          ></circle>
          <path
            fill="currentColor"
            d="M16.243 7.757a6 6 0 1 0-8.486 8.486L12 12z"
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default DarkMode;
