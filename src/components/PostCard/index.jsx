import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@/components/Avatar";
import styles from "@/components/PostCard/postCard.module.css";

export const PostCard = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
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
        </section>
        <footer className={styles.footer}>
          <Avatar name={post.author.username} imageSrc={post.author.avatar} />
        </footer>
      </article>
    </Link>
  );
};
