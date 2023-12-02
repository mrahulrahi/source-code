import React from 'react'
import UserTable from './UserTable';
import Link from 'next/link';
import { Suspense } from 'react';

interface Props {
  searchParams: { sortOrder: String }
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
    <div className="hero h-96 bg-base-200 hero-container w-100 vh-50 text-white py-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Users Page</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link className='btn btn-success' href="/users/new">New User</Link>
          </div>
        </div>
      </div>

      <h1>Users Table</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UserPage;