import { PostCard } from "@/components/PostCard";

async function getAllPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)

  if (!response.ok) {
    console.log('Ops, alguma coisa correu mal!')
  }

  return response.json()
}

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </main>
  );
}
