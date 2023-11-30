import React, { ReactNode } from 'react'

interface Props {
    children : ReactNode;
}

const AdminLayout = ({children}: Props) => {
  return (
  <div className='flex'>
    <aside className='bg-slate-200 p-10 mr-5 min-h-screen'>
        Admin Sidebar
    </aside>
    <div>{children}</div>
  </div>
  )
}

export default AdminLayout