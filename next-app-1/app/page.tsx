import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div className="hero h-96 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello World!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <ProductCard />
          </div>
        </div>
      </div>

      <div className='w-full p-10 bg-green-200 flex flex-wrap gap-5 justify-between'>
        <div className="card w-96 glass">
          <div className="card-body">
            <h2 className="card-title">User</h2>
            <div className="card-actions justify-end">
            <Link className='btn btn-primary' href="/users">Open</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <div className="card-body">
            <h2 className="card-title">Products</h2>
            <div className="card-actions justify-end">
            <Link className='btn btn-primary' href="/products">Open</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <div className="card-body">
            <h2 className="card-title">Admin</h2>
            <div className="card-actions justify-end">
            <Link className='btn btn-primary' href="/admin">Open</Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
