import React from 'react'

interface Props {
    children : ReactNode;
}

const AdminLayout = ({children}: Props) => {
  return (
  <div className='flex'>
    <aside className='bg-accent p-5 mr-5'>
        Admin Sidebar
    </aside>
    <div>{children}</div>
  </div>
  )
}

export default AdminLayout