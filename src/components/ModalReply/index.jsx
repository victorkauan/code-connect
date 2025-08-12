"use client";

import { useRef } from "react";
import { postReply } from "@/actions";
import { Modal } from "@/components/Modal";
import { Comment } from "@/components/Comment";
import { Textarea } from "@/components/Textarea";
import { SubmitButton } from "@/components/SubmitButton";
import styles from "@/components/ModalReply/modalReply.module.css";

export const ModalReply = ({ comment }) => {
  const modalRef = useRef(null);

  const action = postReply.bind(null, comment);

  return (
    <>
      <Modal ref={modalRef}>
        <form className={styles.form} action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider} />
          <Textarea
            name="text"
            placeholder="Digite aqui..."
            rows={8}
            required
          ></Textarea>
          <footer>
            <SubmitButton>Responder</SubmitButton>
          </footer>
        </form>
      </Modal>
      <button
        onClick={() => modalRef.current.openModal()}
        className={styles.button}
      >
        Responder
      </button>
    </>
  );
};
