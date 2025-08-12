"use client";

import { useRef } from "react";
import { Modal } from "@/components/Modal";
import { IconButton } from "@/components/IconButton";
import { Chat } from "@/components/icons/Chat";
import { Subheading } from "@/components/Subheading";
import { Textarea } from "@/components/Textarea";
import { SubmitButton } from "@/components/SubmitButton";
import styles from "@/components/ModalComment/modalComment.module.css";

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <form className={styles.form} action={action}>
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <Textarea
            name="text"
            placeholder="Digite seu comentário"
            rows={8}
            required
          ></Textarea>
          <footer>
            <SubmitButton>Comentar</SubmitButton>
          </footer>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
