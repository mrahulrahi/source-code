import Link from 'next/link'
import Hero from './components/Hero'

export default function Home() {
  const cards = [
    { title: 'User', href: '/users' },
    { title: 'Products', href: '/products' },
    { title: 'Blog', href: '/blog' },
  ]
  return (
    <>
      <Hero subTitle='Online Library Management' title='Welcome' para='All members are Welcome to the Online Library Management Portal.' >
        <Link className='btn btn-primary' href="/styleguide">Styleguide</Link>
      </Hero>

      <div className="content-container">
        <div className="container">
          <div className="row g-5">
            {cards.map((card, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <h2 className="card-title mb-4">{card.title}</h2>
                  <div className="card-actions">
                    <Link className='btn btn-primary' href={card.href}>Open</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
