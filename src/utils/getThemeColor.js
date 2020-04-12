const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#e8e7db"
  if (theme === "dark") return "#211b1fb0"
}

export default getThemeColor
