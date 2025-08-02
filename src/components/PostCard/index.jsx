import Image from "next/image"
import { Avatar } from "@/components/Avatar"
import styles from "@/components/PostCard/postCard.module.css"

export const PostCard = ({ post }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post de título: ${post.title}`}
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={styles.footer}>
        <Avatar
          name={post.author.username}
          imageSrc={post.author.avatar}
        />
      </footer>
    </article>
  )
}
