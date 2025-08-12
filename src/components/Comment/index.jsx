import Image from "next/image";
import styles from "@/components/Comment/comment.module.css";

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Image
        src={comment.author.avatar}
        width={32}
        height={32}
        alt={`Avatar do(a) ${comment.author.name}`}
      />
      <strong>@{comment.author.username}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
