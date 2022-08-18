import styles from "./switcher.module.css"
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"

export default function Switcher({ dark, toggle }) {
  const ball = {
    width: "80px",
    height: "80px",

    position: "relative",
    left: !dark ? "0px" : "100px",
    borderRadius: "50%",
    transition: "ease-in-out 0.2s",
    backgroundColor: "#e4e4e4",
  }
  return (
    <button onClick={() => toggle(!dark)} className={styles.toggle}>
      <div style={ball}></div >
      {
        dark ? <img className={styles.moon} src={moon} /> : <img className={styles.sun} src={sun} />
      }
    </button >
  )
}