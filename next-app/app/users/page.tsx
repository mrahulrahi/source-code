import React from 'react'
import UserTable from './UserTable';
import Link from 'next/link';
import { Suspense } from 'react';
import Hero from '../components/Hero';

interface Props {
  searchParams: { sortOrder: String }
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <Hero title='Users Page' para='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'>
        <Link className='btn btn-success' href="/users/new">New User</Link>
      </Hero>

      <h1>Users Table</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UserPage;