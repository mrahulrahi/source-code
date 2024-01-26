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

      <div className="container-xxl">
        <div className="row g-4">
          {products.map(product =>
            <div className="col-4">
              <div key={product.id} className="card h-100 shadow-xl">
                <div className="card-body">
                  <div className='badge text-bg-dark'>{product.id}</div>
                  <h2 className="card-title line-clamp">{product.title}</h2>
                  <p className='card-text line-clamp'>{product.description}</p>
                  <div className='flex justify-between my-5'>
                    <div className="badge text-bg-dark">{product.category}</div>
                    <div className="badge text-bg-dark">{product.price} $</div>
                  </div>
                  <div className="card-actions justify-start mb-5">
                    <Link href={'/products/' + product.id} className="btn btn-primary">open</Link>
                  </div>
                  <figure className='w-100 h-50'><img className="card-img-top w-100 h-100 object-fit-contain" src={product.image} alt="Shoes" /></figure>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  )
}

export default ProductPage