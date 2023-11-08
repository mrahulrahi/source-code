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
      <div className='hero-container d-flex flex-column align-items-center justify-content-center w-100 bg-info text-white py-5'>
        <h1 className='mb-5'>Blog Page</h1>
        <h3 className='mb-5'>Read latest blog</h3>
        <button className='btn btn-light'>Open</button>
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