import styles from "@/components/Button/button.module.css"

export const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}
