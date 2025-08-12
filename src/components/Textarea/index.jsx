import styles from "@/components/Textarea/textarea.module.css";

export const Textarea = ({ ...props }) => {
  return <textarea className={styles.textarea} {...props} />;
};
