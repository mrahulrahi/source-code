import React from 'react'

interface Post {
  id: number;
  title : string;
  body : string;
}

interface Props {
  params: { id: number }
}

const BlogPage = async ({params: {id} }: Props) => {

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: Post[] = await res.json();
  console.log(res);

  return (

    <main>
      <div className='hero-container d-flex flex-column align-items-center justify-content-center w-100 bg-dark text-white py-5'>
        <h1 className='text-uppercase'>{id} - {post.title}</h1>
      </div>

      <div className='content-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='blog-box'>
                <h3 className='d-flex align-items-center justify-content-center'>{data.id}</h3>
                <h2>{post.title}</h2>
                <p>{data.body}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>

  );
}

export default BlogPage