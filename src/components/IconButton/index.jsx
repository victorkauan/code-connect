import styles from "@/components/IconButton/iconButton.module.css";

export const IconButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
