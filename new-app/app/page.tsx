import Link from 'next/link'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <Hero title='Hello World!' para='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'>
        <ProductCard />
      </Hero>

      <div className="container-xxl">
        <div className="row p-10 bg-accent flex flex-wrap gap-5 justify-between">
          <div className="col">
            <div className="card w-96 glass">
              <div className="card-body">
                <h2 className="card-title">User</h2>
                <div className="card-actions justify-end">
                  <Link className='btn btn-primary' href="/users">Open</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card w-96 glass">
              <div className="card-body">
                <h2 className="card-title">Products</h2>
                <div className="card-actions justify-end">
                  <Link className='btn btn-primary' href="/products">Open</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card w-96 glass">
              <div className="card-body">
                <h2 className="card-title">Admin</h2>
                <div className="card-actions justify-end">
                  <Link className='btn btn-primary' href="/admin">Open</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
