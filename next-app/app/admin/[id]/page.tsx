import React from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    params: { id: number }
}

const BlogPage = async ({ params: { id } }: Props) => {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post: Post = await res.json();
    return (

        <main>
            <h1 className='my-5 text-center'>{post.id} - {post.title}</h1>
            <h1 className='text-uppercase'></h1>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='badge badge-primary badge-lg'>{post.id}</div>
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </main>

    );
}

export default BlogPage