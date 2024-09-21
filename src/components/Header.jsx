import styles from "./Header.module.css";

export default function Header({ darkMode, onMode }) {
  return (
    <div className={`${styles.header} ${darkMode ? styles["dark"] : ""}`}>
      <h1>
        <img src="images/logo.png" alt="logo" />
        Text Editor
      </h1>
      <span onClick={onMode}>
        <img src={`images/${darkMode ? "light" : "dark"}.png`} />
      </span>
    </div>
  );
}
