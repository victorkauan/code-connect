"use client";

import { useState } from "react";
import styles from "@/components/Replies/replies.module.css";

export const Replies = () => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.button}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
      </div>
    </div>
  );
};
