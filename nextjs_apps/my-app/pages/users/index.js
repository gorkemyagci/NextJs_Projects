import React from 'react'
import { useRouter } from 'next/router'

const Users = ({ users }) => {
    console.log(users);
    const router = useRouter();
    console.log(router);
    return (
        <div>
            {users.map((user, index) => {
                return (
                    <div onClick={() => router.push(`/users/${user.id}`)} key={index} style={{
                        margin: "10px"
                    }}>
                        <span style={{
                            display: "block"
                        }}>Name: {user.name}</span>
                        <span style={{
                            display: "block"
                        }}>Email: {user.email}</span>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: {
            users
        }
    }
}

export default Users