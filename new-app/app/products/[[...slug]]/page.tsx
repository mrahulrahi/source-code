import Link from 'next/link';
import React from 'react'


interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}


interface Props {
  params: { slug: string[] }
  searchParams: { sortOrder: String }
}



const ProductPage = async ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  const products: Product[] = await res.json();
  return (
    <div>
      <h1 className='my-5 text-dark text-center'>ProductPage {slug} {sortOrder}</h1>
      <div className='flex flex-wrap gap-10 align-center justify-center'>
        {products.map(product =>
          <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className='badge badge-primary badge-lg'>{product.id}</div>
              <h2 className="card-title">{product.title}</h2>
              <p className='text-ellipsis overflow-hidden line-clamp-3'>{product.description}</p>
              <div className='flex justify-between my-5'>
                <div className="badge badge-lg badge-primary badge-outline">{product.category}</div>
                <div className="badge badge-lg badge-primary">{product.price} $</div>
              </div>
              <div className="card-actions justify-start mb-5">
                <Link href={'/products/' + product.id} className="btn btn-primary">open</Link>
              </div>
              <figure className='w-full h-80'><img className='w-full h-full object-contain' src={product.image} alt="Shoes" /></figure>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage