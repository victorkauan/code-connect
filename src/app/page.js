import logger from "@/logger";
import { PostCard } from "@/components/PostCard";
import styles from "@/app/page.module.css"

async function getAllPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)

  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal!")
    return []
  }

  logger.info("Posts obtidos com sucesso.")
  return response.json()
}

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className={styles.grid}>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </main>
  );
}
