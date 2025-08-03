import logger from "@/logger";
import { PostCard } from "@/components/PostCard";
import styles from "@/app/page.module.css"
import Link from "next/link";

const DEFAULT_PER_PAGE = 6

async function getAllPosts(page) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_page=${page}&_per_page=${DEFAULT_PER_PAGE}`)

  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal!")
    return []
  }

  logger.info("Posts obtidos com sucesso.")
  return response.json()
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page ?? 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <main className={styles.grid}>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
