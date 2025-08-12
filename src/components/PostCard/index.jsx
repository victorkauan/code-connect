import Link from "next/link";
import Image from "next/image";
import { incrementThumbsUp, postComment } from "@/actions";
import { ThumbsUpButton } from "@/components/PostCard/ThumbsUpButton";
import { Avatar } from "@/components/Avatar";
import { ModalComment } from "@/components/ModalComment";
import styles from "@/components/PostCard/postCard.module.css";

export const PostCard = ({ post, highlight }) => {
  const submitThumbsUp = incrementThumbsUp.bind(null, post);
  const submitComment = postComment.bind(null, post);

  return (
    <article
      className={styles.card}
      style={{ width: highlight ? "100%" : 486 }}
    >
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            src={post.cover}
            alt={`Capa do post de título: ${post.title}`}
            fill
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComment action={submitComment} />
            <p>{post.comments.length}</p>
          </div>
        </div>
        <Avatar name={post.author.username} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
};
