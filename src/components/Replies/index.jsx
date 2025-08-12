"use client";

import { useEffect, useState } from "react";
import { Comment } from "@/components/Comment";
import { ModalReply } from "@/components/ModalReply";
import styles from "@/components/Replies/replies.module.css";

export const Replies = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);

  async function fetchData() {
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
  }

  useEffect(() => {
    if (showReplies) {
      fetchData();
    }
  }, [showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.button}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
        {showReplies && (
          <ul>
            {replies.map((reply) => (
              <li key={reply.id} className={styles.item}>
                <Comment comment={reply} />
                <ModalReply comment={reply} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
