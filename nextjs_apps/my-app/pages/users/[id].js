import { useRouter } from 'next/router';
import React from 'react'

const UserItem = ({user}) => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <span onClick={() => router.back()}>Geri</span>
            <span style={{
                display:"block"
            }}>Name: {user.name}</span>
            <span style={{
                display:"block"
            }}>Email: {user.email}</span>
            <span style={{
                display:"block"
            }}>User Name: {user.username}</span>
        </div>
    )
}

export async function getStaticProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const user = await res.json();
    return{
        props:{
            user
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await res.json();
    const ids = users.map((user) => user.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback:false
    }
}

export default UserItem