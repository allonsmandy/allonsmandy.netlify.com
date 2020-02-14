const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#ffffff"
  if (theme === "dark") return "#271b25"
}

export default getThemeColor
