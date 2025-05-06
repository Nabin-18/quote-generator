const toggleTheme = document.getElementById("toggle-theme");

let isDark = false;

const toggleThemeFunction = () => {
  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  isDark = !isDark;
};

toggleTheme.addEventListener("click", toggleThemeFunction);
