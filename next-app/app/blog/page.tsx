
import Link from 'next/link';
 

export const getStaticProps = async ()=> { 
  
  const res = await fetch( 
      `https://jsonplaceholder.typicode.com/posts` 
  ); 
  const data = await res.json(); 
  return { 
      props: { 
          data, 
      }, 
  }; 
}; 

export default function Blog({data}) {
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
              <div className='blog-list d-flex flex-wrap'>
                
        {data.slice(0,10).map((curElem) => {
              return <div key={curElem.id} className='blog-item'>
                <div className='blog-box limit-text'>
                <h3 className='d-flex align-items-center justify-content-center'>{curElem.id}</h3>
                <h2>{curElem.title}</h2>
                <p>{curElem.body}</p>
                <Link className='btn btn-info text-white' href={`/blog/${curElem.id}`}>Read More</Link>
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