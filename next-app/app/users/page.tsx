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
      <Link className='btn' href="/users/new">New User</Link>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UserPage;