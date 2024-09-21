import styles from "./Navigation.module.css";

export default function Navigation({ children }) {
  return <div className={styles.navigation}>{children}</div>;
}
