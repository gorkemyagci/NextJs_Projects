import { useRouter } from 'next/dist/client/router';
import React from 'react'

export default function posts({ posts }) {
  const router = useRouter();
  return (
    <div style={{
      color: "white"
    }}>
      {posts.map((item, index) => {
        return (
          <div onClick={() => router.push(`/posts/${item.id}`)} key={index} style={{
            margin: "10px"
          }}>
            <span>{item.id}</span>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}
