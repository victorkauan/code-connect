import styles from "@/components/Button/button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
