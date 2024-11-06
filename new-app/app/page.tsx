import Link from 'next/link'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <Hero subTitle='Online Library Management' title='Welcome' para='All members are Welcome to the Online Library Management Portal.' >
        <Link className='btn btn-primary' href="/login">Add to cart</Link>
      </Hero>
            
      <div className="content-container">
        <div className="container">
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
      </div>
    </main>
  )
}
