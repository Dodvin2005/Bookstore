import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminDashboard() {
  return (
    <div>
      <AdminHeader/>
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
<AdminSidebar/>
        </div>
        <div className="col-span-4">
          Admin Dashboard
        </div>
        
      </div>

    </div>
  )
}

export default AdminDashboard