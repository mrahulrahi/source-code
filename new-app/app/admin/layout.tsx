import React, { ReactNode } from 'react'

interface Props {
    children : ReactNode;
}

const AdminLayout = ({children}: Props) => {
  return (
  <div className="d-flex text-dark">
    <aside className="p-5 mr-5 min-h-screen">
        Admin Sidebar
    </aside>
    <div>{children}</div>
  </div>
  )
}

export default AdminLayout