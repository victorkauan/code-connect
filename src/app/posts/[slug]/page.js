import { remark } from "remark"
import html from "remark-html"
import logger from "@/logger"
import { PostCard } from "@/components/PostCard"
import styles from "@/app/posts/[slug]/page.module.css"
import db from "../../../../prisma/db"

async function getPostBySlug(slug) {
  const post = await db.post.findFirst({
    where: { slug },
    include: { author: true }
  })
  logger.info("Post obtido com sucesso.")

  const processedContent = await remark()
    .use(html)
    .process(post.markdown)
  const contentHtml = processedContent.toString()

  post.markdown = contentHtml

  return post
}

const Post = async ({ params }) => {
  const post = await getPostBySlug(params.slug)

  return (
    <div className={styles.content}>
      <PostCard post={post} highlight />
      <div>
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
          <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
      </div>
    </div>
  )
}

export default Post
