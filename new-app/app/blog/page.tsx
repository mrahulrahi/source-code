'use client'
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Link from 'next/link';

interface Blog {
  slice(arg0: number, arg1: number): unknown;
  id: number;
  title: string;
  body: string;
}

const BlogPage = () => {

  const [items, setItems] = useState<Blog[]>([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`, { cache: 'no-store' });
      const data = await res.json();
      const total = parseInt(res.headers.get("x-total-count") || "0", 10);
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };
    getBlogs();
  },
    [limit]);

  const fetchBlogs = async (currentPage: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`, { cache: 'no-store' });
    const data: Blog[] = await res.json();
    return data;
  };

  const handlePageClick = async (data: { selected: number; }) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const blogsFormServer = await fetchBlogs(currentPage);
    setItems(blogsFormServer);
  };

  return (
    <>

      <div className="content-container">
        <div className="container">
          <div className="row g-3">
            {items.slice(0, 10).map(blog =>
              <div className="col-md-6" key={blog.id}>
                <div className="card d-flex flex-column h-100">
                <div className="badge text-bg-dark">{blog.id}</div>
                    <h3 className="card-title line-clamp-2">{blog.title}</h3>
                    <p className='card-text line-clamp-3'>{blog.body}</p>
                    <div className="card-actions justify-start mt-auto">
                      <Link href={'/blog/' + blog.id} className="btn btn-primary">open</Link>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <ReactPaginate
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
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
    </>
  )
}

export default BlogPage

