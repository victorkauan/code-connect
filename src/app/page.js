import Link from "next/link";
import logger from "@/logger";
import { PostCard } from "@/components/PostCard";
import db from "../../prisma/db";
import styles from "@/app/page.module.css";

async function getAllPosts(page, searchTerm) {
  try {
    const where = {};
    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const perPage = 6;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      where,
      take: perPage,
      skip,
      orderBy: { createdAt: "desc" },
      include: { author: true },
    });

    return { data: posts, prev, next };
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page ?? 1);
  const searchTerm = searchParams?.q;
  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(currentPage, searchTerm);

  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div className={styles.links}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchTerm } }}>
            Página anterior
          </Link>
        )}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchTerm } }}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
