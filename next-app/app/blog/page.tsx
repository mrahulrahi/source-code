import Link from 'next/link';
import React from 'react'

interface Post {
  id: number;
  title: string;
  body: string;
}


const Blog = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  const posts: Post[] = await res.json();

  return (

    <main>
       <div className="hero h-96 bg-base-200 hero-container w-100 vh-50 text-white py-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Blog Page</h1>
            <p className="py-6">Read latest blog</p>
            <Link className='btn btn-success' href="/users">Open</Link>
          </div>
        </div>
      </div>

      <div className='content-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='blog-list flex flex-wrap'>

                {posts.slice(0, 10).map((post) => {
                  return <div key={post.id} className='blog-item'>
                    <div className='blog-box limit-text'>
                      <h3 className='flex align-items-center justify-content-center'>{post.id}</h3>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                      <Link className='btn btn-info text-white' href={`/blog/${post.id}`}>Read More</Link>
                    </div>

                  </div>;
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}


export default Blog