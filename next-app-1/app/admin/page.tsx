'use client'
import ReactPaginate from "react-paginate";
import { useEffect, useState, React } from "react";
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  body: string;
}


const AdminHomePage = async () => {

  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`, { cache: 'no-store' });
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };
    getBlogs();
  },
    [limit]);
  const fetchBlogs = async (currentPage) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`, { cache: 'no-store' });
    const data = await res.json();
    return data;
  };
  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const blogsFormServer = await fetchBlogs(currentPage);
    setItems(blogsFormServer);
  };


  return (
    <div>
      <h1 className='my-5 text-center'>Admin Home Page</h1>
      <div className='flex flex-wrap gap-10 align-center justify-center'>
        {items.slice(0, 10).map(blog =>
          <div key={blog.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className='badge badge-primary badge-lg'>{blog.id}</div>
              <h2 className="card-title">{blog.title}</h2>
              <p className='text-ellipsis overflow-hidden line-clamp-3'>{blog.body}</p>
              <div className="card-actions justify-start mb-5">
                <Link href={'/admin/' + blog.id} className="btn btn-primary">open</Link>
              </div>
            </div>
          </div>
        )}
      </div>
     
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  )
}

export default AdminHomePage

