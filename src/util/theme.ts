const changeTheme = (theme: "light" | "dark" | "system") => {
  if (theme === "dark") {
    document.documentElement.className = "dark"
  } else {
    document.documentElement.classList.remove("dark")
  }
}

const setupTheme = () => {
  const themeObj = localStorage.getItem("theme")
  if (themeObj) {
    const theme = JSON.parse(themeObj)
    changeTheme(theme.theme)
  }
}

export { changeTheme, setupTheme }
