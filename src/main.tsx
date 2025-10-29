import { createRoot } from "react-dom/client"
import { ThemeProvider } from "./contexts/ThemeContext"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
