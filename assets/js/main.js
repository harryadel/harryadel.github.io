(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const mainContent = document.querySelector(".main-content");
    const author = document.querySelector(".author");
    const themeToggle = document.querySelector(".theme-toggle");
    
    if (this.checked) {
      if (mainContent) mainContent.classList.add("blurry");
      if (author) author.classList.add("blurry");
      if (themeToggle) themeToggle.classList.add("blurry");
    } else {
      if (mainContent) mainContent.classList.remove("blurry");
      if (author) author.classList.remove("blurry");
      if (themeToggle) themeToggle.classList.remove("blurry");
    }
  });
})();
