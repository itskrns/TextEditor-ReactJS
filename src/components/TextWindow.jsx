import styles from "./TextWindow.module.css";

export default function TextWindow({ text, onText }) {
  return (
    <div className={styles.textWindow}>
      <textarea
        rows={15}
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => onText(e.target.value)}
      ></textarea>
    </div>
  );
}
