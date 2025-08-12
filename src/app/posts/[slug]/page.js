import { redirect } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import logger from "@/logger";
import { PostCard } from "@/components/PostCard";
import { CommentList } from "@/components/CommentList";
import db from "../../../../prisma/db";
import styles from "@/app/posts/[slug]/page.module.css";

async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: { slug },
      include: {
        author: true,
        comments: { where: { parentId: null }, include: { author: true } },
      },
    });

    if (!post) {
      throw new Error(`Post com o slug ${slug} não foi encontrado`);
    }

    logger.info("Post obtido com sucesso.");

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
  } catch (error) {
    logger.error("Falha ao obter post com o slug", { slug, error });
  }

  redirect("/not-found");
}

const Post = async ({ params }) => {
  const post = await getPostBySlug(params.slug);

  return (
    <div className={styles.content}>
      <PostCard post={post} highlight />
      <div>
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
          <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
      </div>
      <div className={styles.comments}>
        <h2>Comentários</h2>
        <CommentList comments={post.comments} />
      </div>
    </div>
  );
};

export default Post;
