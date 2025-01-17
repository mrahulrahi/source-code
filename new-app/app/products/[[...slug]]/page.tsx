import Link from 'next/link';
import Image from 'next/image';
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
    <>
      <h1 title={`Product Page ${slug ? slug[0] : ''} ${sortOrder ? sortOrder : ''}`} ></h1>

      <div className="content-container">
        <div className="container">
          <div className="row g-4">
            {products.map(product =>
              <div className="col-md-6 col-lg-4" key={product.id}>
                <div className="card d-flex flex-column h-100 shadow-xl">
                  <figure className='w-100 ratio ratio-1x1'>
                    <Image className="card-img-top object-fit-contain" src={product.image} alt="Shoes" fill />
                  </figure>
                  <div className='badge text-bg-dark'>{product.id}</div>
                  <h3 className="card-title line-clamp-3">{product.title}</h3>
                  <p className='card-text line-clamp-3'>{product.description}</p>
                  <div className='d-flex justify-content-between mb-5'>
                    <div className="badge text-bg-dark">{product.category}</div>
                    <div className="badge text-bg-dark">{product.price} $</div>
                  </div>
                  <div className="card-actions mt-auto">
                    <Link href={'/products/' + product.id} className="btn btn-primary">open</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage