import { useState } from 'react'
import Switcher from "../src/components/Switcher"

export default function App() {
  const [dark, setDark] = useState(1)
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    width: "100%",
    height: "100vh",
    backgroundColor: dark ? "#292C35" : "#e4e4e4",
    color: dark ? "#e4e4e4" : "#292C35",
    transition: "ease-in-out .2s",
  }

  return (
    <main style={styles}>
      <h1>Theme Switcher</h1>
      <Switcher toggle={setDark} dark={dark} />
    </main>
  )
}
