import { Comment } from "@/components/Comment";
import { ModalReply } from "@/components/ModalReply";
import { Replies } from "@/components/Replies";
import styles from "@/components/CommentList/comments.module.css";

export const CommentList = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
          <ModalReply comment={comment} />
          <Replies />
        </li>
      ))}
    </ul>
  );
};
