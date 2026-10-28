import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

import { FaBook, FaUser } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BarChart, Bar } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts'

const data = generateMockData(6, 823);

function AdminDashboard() {

  

  // Pie chart data
  const pieData = [
    { name: 'Approved', value: 45 },
    { name: 'Pending', value: 30 },
    { name: 'Rejected', value: 15 },
    { name: 'Sold', value: 10 },
  ]

  const COLORS = ['#22c55e', '#f59e0b', '#ef4444', '#3b82f6']

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <AdminHeader />

      <div className="md:grid grid-cols-5 gap-2">

        {/* Sidebar */}
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        {/* Dashboard content */}
        <div className="col-span-4 p-4 md:p-8">

          <h1 className="text-2xl font-bold mb-2">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mb-6">
            Welcome to your Book Library dashboard
          </p>

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">

            {/* Books */}
            <div className="bg-orange-200 px-4 py-8 flex justify-center items-center text-5xl rounded-2xl shadow">

              <FaBook className="text-orange-600" />

              <div className="text-center ms-8">
                <h3 className="text-lg">Books</h3>
                <h3 className="text-2xl font-bold">100+</h3>
              </div>

            </div>

            {/* Users */}
            <div className="bg-blue-200 px-4 py-8 flex justify-center items-center text-5xl rounded-2xl shadow">

              <FaUser className="text-blue-600" />

              <div className="text-center ms-8">
                <h3 className="text-lg">Users</h3>
                <h3 className="text-2xl font-bold">100+</h3>
              </div>

            </div>

            {/* Employees */}
            <div className="bg-green-200 px-4 py-8 flex justify-center items-center text-5xl rounded-2xl shadow">

              <FaPeopleGroup className="text-green-600" />

              <div className="text-center ms-8">
                <h3 className="text-lg">Employees</h3>
                <h3 className="text-2xl font-bold">20+</h3>
              </div>

            </div>

          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
 <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="x" radius={[10, 10, 0, 0]} />
      <Bar dataKey="y" radius={[10, 10, 0, 0]} />
      <RechartsDevtools />
    </BarChart>
            

            {/* Pie Chart */}
            <div className="bg-white p-5 rounded-2xl shadow">

              <h2 className="text-xl font-bold mb-5">
                Book Status Overview
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                  <Pie
                    data={pieData}
                    
                  >

                    {pieData.map((entry, index) => (

                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard