import Image from "next/image"
import { remark } from "remark"
import html from "remark-html"
import logger from "@/logger"
import { Avatar } from "@/components/Avatar"
import styles from "@/app/posts/[slug]/page.module.css"
import {PostCard} from "@/components/PostCard"

async function getPostBySlug(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${slug}`)

  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal!")
    return {}
  }

  const data = await response.json()

  if (!data.length) {
    logger.error("Ops, alguma coisa correu mal!")
    return {}
  }

  logger.info("Post obtido com sucesso.")

  const post =  data[0]

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
