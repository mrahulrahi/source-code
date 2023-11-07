

export const getStaticPaths = async () => {
    const res = await fetch( 
        `https://jsonplaceholder.typicode.com/posts` 
    ); 
    const data = await res.json(); 
const paths = data.map((curElem) => {
    return{
        params: {pageno : curElem.id.toString(),},
    }
})

    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context)=> { 
  
    const id = context.params.pageno;
    const res = await fetch( 
        `https://jsonplaceholder.typicode.com/posts/${id}` 
    ); 
    const data = await res.json(); 
    return { 
        props: { 
            data, 
        }, 
    }; 
  }; 

export default function myData({data}) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main>
          <div className='hero-container d-flex flex-column align-items-center justify-content-center w-100 bg-dark text-white py-5'>
              <h1 className='text-uppercase'>{data.id} - {data.title}</h1>
          </div>
  
          <div className='content-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
            <div className='blog-box'>
                <h3 className='d-flex align-items-center justify-content-center'>{data.id}</h3>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
                </div>
            </div>
          </div>

        </div>
        </div>
          
        </main>
      </Layout>
    );
  }