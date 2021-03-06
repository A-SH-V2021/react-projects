import React, { useState, useEffect } from "react";

let element = document.getElementsByTagName("html")[0];

const getThemeFromLS = () => {
  let theme = "light-mode";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  let [theme, setTheme] = useState(getThemeFromLS());

  const changeModeHandle = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    element.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <button
        className={`btn ${
          theme === "light-mode" ? "btn-light btn-light:hover" : ""
        }`}
        onClick={changeModeHandle}
      >
        change mode
      </button>
      <div className="section-center">
        <div className="text-section">
          <h2>hello world</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            tempora quam fuga quod tempore veniam.
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
