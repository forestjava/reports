import styles from "./this.module.css";

export const Theme: React.FunctionComponent = ({ children }) => (
  <main className={styles.main}>
    { children }
  </main>
)