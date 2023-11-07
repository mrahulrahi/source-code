import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <ProductCard />
      <div className='hero-container d-flex flex-column align-items-center justify-content-center w-100 vh-50 bg-success text-white py-5'>
        <h1 className='mb-5'>Test App</h1>
        <h3 className='mb-5'>Find out more</h3>
        <button className='btn btn-light'>Open</button>
      </div>
    </main>
  )
}
