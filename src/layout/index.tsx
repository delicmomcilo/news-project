import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import "gishka-library/dist/style.css";

export const Layout = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    } else {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className={`${isDarkMode ? "dark" : "light"}`}>
        <hr className="divider" />
        <section className={`flex justify-start flex-col min-h-[100vh] items-center`}>
          <Outlet />
        </section>
      </main>
    </>
  );
};
