import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Post({post}) {
    const router = useRouter();
  return (
    <div style={{
        marginTop: "1rem"
    }}>
        <span onClick={() => router.back()}>Geri git</span>
        <p>{post.title}</p>
        <div style={{
            position: "relative",
            width: "250px",
            height: "200px"
        }}>
        <Image 
        src="https://img.freepik.com/free-vector/hand-drawn-international-youth-day-instagram-posts-collection-with-photo_23-2149020906.jpg?w=2000"
        layout="fill"
        alt=""
        />
        </div>
    </div>
  )
}

export async function getStaticProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await res.json();
    return{
        props:{
            post
        }
    }
}

export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const ids = posts.map((post) => post.id)
    const paths = ids.map(id => ({params:{id: id.toString()}}));
    return{
            paths,
            fallback: false
    }
}