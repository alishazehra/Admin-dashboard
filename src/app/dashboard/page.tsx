// 'use client'

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const DashboardPage = () => {
//   const [user, setUser] = useState<any>(null);
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalPosts: 0,
//     activeUsers: 0,
//   });
//   const router = useRouter();

//   useEffect(() => {
//     // Check if the user is logged in
//     if (typeof window !== "undefined") {
//       const userInfo = localStorage.getItem("user");

//       if (!userInfo) {
//         // If no user data, redirect to signup page
//         router.push("/auth/signup");
//       } else {
//         setUser(JSON.parse(userInfo));
//       }

//       // Simulate fetching admin stats
//       setStats({
//         totalUsers: 100,       // Example stat: total users
//         totalPosts: 25,       // Example stat: total posts
//         activeUsers: 35,       // Example stat: active users in the last month
//       });
//     }
//   }, [router]);

//   const handleLogout = () => {
//     // Clear user data from localStorage and redirect to signup page
//     localStorage.removeItem("user");
//     router.push("/auth/signup");
//   };

//   if (!user) {
//     return <div>Loading...</div>; // Show a loading message until user info is available
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
//       <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Admin Dashboard</h2>

//         {/* Welcome Section */}
//         <div className="text-center mb-6">
//           <h3 className="text-xl font-medium text-gray-700">Welcome, {user.name}!</h3>
//           <p className="text-sm text-gray-500">{user.email}</p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-3 gap-6 mb-6">
//           <div className="p-6 bg-blue-50 rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-blue-700">Total Users</h4>
//             <p className="text-2xl font-bold text-blue-800">{stats.totalUsers}</p>
//           </div>

//           <div className="p-6 bg-green-50 rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-green-700">Total Posts</h4>
//             <p className="text-2xl font-bold text-green-800">{stats.totalPosts}</p>
//           </div>

//           <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-700">Active Users</h4>
//             <p className="text-2xl font-bold text-yellow-800">{stats.activeUsers}</p>
//           </div>
//         </div>

        // {/* Recent Activity */}
        // <div className="mb-6">
        //   <h4 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h4>
        //   <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        //     <ul>
        //       <li className="text-gray-700">User Alisha Zehra signed up</li>
        //       <li className="text-gray-700">User Neha opened the website</li>
        //       <li className="text-gray-700">Admin updated the website settings</li>
        //       <li className="text-gray-700">New user registration from admin dashboard</li>
        //     </ul>
        //   </div>
        // </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
// 'use client'

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// // Define a User interface for better type safety
// interface User {
//   name: string;
//   email: string;
// }

// interface Stats {
//   totalUsers: number;
//   totalPosts: number;
//   activeUsers: number;
// }

// const DashboardPage = () => {
//   const [user, setUser] = useState<User | null>(null); // User type or null
//   const [stats, setStats] = useState<Stats>({
//     totalUsers: 0,
//     totalPosts: 0,
//     activeUsers: 0,
//   });
//   const router = useRouter();

//   useEffect(() => {
//     // Check if the user is logged in
//     if (typeof window !== "undefined") {
//       const userInfo = localStorage.getItem("user");

//       if (!userInfo) {
//         // If no user data, redirect to signup page
//         router.push("/auth/signup");
//       } else {
//         setUser(JSON.parse(userInfo)); // Assuming the structure matches the User interface
//       }

//       // Simulate fetching admin stats
//       setStats({
//         totalUsers: 100,       // Example stat: total users
//         totalPosts: 25,        // Example stat: total posts
//         activeUsers: 35,       // Example stat: active users in the last month
//       });
//     }
//   }, [router]);

//   const handleLogout = () => {
//     // Clear user data from localStorage and redirect to signup page
//     localStorage.removeItem("user");
//     router.push("/auth/signup");
//   };

//   if (!user) {
//     return <div>Loading...</div>; // Show a loading message until user info is available
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
//       <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Admin Dashboard</h2>

//         {/* Welcome Section */}
//         <div className="text-center mb-6">
//           <h3 className="text-xl font-medium text-gray-700">Welcome, {user.name}!</h3>
//           <p className="text-sm text-gray-500">{user.email}</p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-3 gap-6 mb-6">
//           <div className="p-6 bg-blue-50 rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-blue-700">Total Users</h4>
//             <p className="text-2xl font-bold text-blue-800">{stats.totalUsers}</p>
//           </div>

//           <div className="p-6 bg-green-50 rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-green-700">Total Posts</h4>
//             <p className="text-2xl font-bold text-green-800">{stats.totalPosts}</p>
//           </div>

//           <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-700">Active Users</h4>
//             <p className="text-2xl font-bold text-yellow-800">{stats.activeUsers}</p>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="mb-6">
//           <h4 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h4>
//           <div className="bg-gray-50 p-4 rounded-lg shadow-md">
//             <ul>
//               <li className="text-gray-700">User Alisha Zehra signed up</li>
//               <li className="text-gray-700">User Neha opened the website</li>
//               <li className="text-gray-700">Admin updated the website settings</li>
//               <li className="text-gray-700">New user registration from admin dashboard</li>
//             </ul>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// "use client"

// import React, { useState } from 'react';

// const AdminDashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>('dashboard');

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white">
//         <div className="p-5">
//           <h2 className="text-2xl font-semibold text-center">Admin Panel</h2>
//         </div>
//         <ul>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${
//               activeTab === 'dashboard' ? 'bg-teal-600' : ''
//             }`}
//             onClick={() => setActiveTab('dashboard')}
//           >
//             Dashboard
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${
//               activeTab === 'users' ? 'bg-teal-600' : ''
//             }`}
//             onClick={() => setActiveTab('users')}
//           >
//             Users
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${
//               activeTab === 'analytics' ? 'bg-teal-600' : ''
//             }`}
//             onClick={() => setActiveTab('analytics')}
//           >
//             Analytics
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${
//               activeTab === 'performance' ? 'bg-teal-600' : ''
//             }`}
//             onClick={() => setActiveTab('performance')}
//           >
//             Performance
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${
//               activeTab === 'settings' ? 'bg-teal-600' : ''
//             }`}
//             onClick={() => setActiveTab('settings')}
//           >
//             Settings
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           {activeTab === 'dashboard' && <Dashboard />}
//           {activeTab === 'users' && <Users />}
//           {activeTab === 'analytics' && <Analytics />}
//           {activeTab === 'performance' && <Performance />}
//           {activeTab === 'settings' && <Settings />}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Dashboard Component
// const Dashboard: React.FC = () => (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
//     <p>Here is your general dashboard overview...</p>
//   </div>
// );

// // Users Component
// const Users: React.FC = () => (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Users Management</h2>
//     <p>Manage users here...</p>
//   </div>
// );

// // Analytics Component
// const Analytics: React.FC = () => (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Analytics</h2>
//     <p>Track your data analytics...</p>
//   </div>
// );

// // Performance Component
// const Performance: React.FC = () => (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
//     <p>Monitor performance here...</p>
//   </div>
// );

// // Settings Component
// const Settings: React.FC = () => (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Settings</h2>
//     <p>Configure your settings...</p>
//   </div>
// );

// export default AdminDashboard;
// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react';

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>('dashboard');

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white">
//         <div className="p-5">
//           <h2 className="text-2xl font-semibold text-center">Admin Panel</h2>
//         </div>
//         <ul>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'dashboard' ? 'bg-teal-600' : ''}`}
//             onClick={() => setActiveTab('dashboard')}
//           >
//             Dashboard
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'users' ? 'bg-teal-600' : ''}`}
//             onClick={() => setActiveTab('users')}
//           >
//             Users
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'analytics' ? 'bg-teal-600' : ''}`}
//             onClick={() => setActiveTab('analytics')}
//           >
//             Analytics
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'performance' ? 'bg-teal-600' : ''}`}
//             onClick={() => setActiveTab('performance')}
//           >
//             Performance
//           </li>
//           <li
//             className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'sales' ? 'bg-teal-600' : ''}`}
//             onClick={() => setActiveTab('sales')}
//           >
//             Sales
//           </li>
//         </ul>
//       </div>

//       {/* Content Area */}
//       <div className="flex-1 p-6">
//         {activeTab === 'dashboard' && (
//           <div>
//             <h1 className="text-3xl font-semibold mb-4">Dashboard Overview</h1>
//             <p className="text-lg text-gray-600 mb-4">
//               Welcome to your Admin Panel! Below is a quick overview of key stats.
//             </p>
//             <div className="grid grid-cols-3 gap-6">
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold">Total Users</h3>
//                 <p className="text-3xl font-bold">55</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold">Active Users</h3>
//                 <p className="text-3xl font-bold">25</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold">New Signups</h3>
//                 <p className="text-3xl font-bold">100</p>
             
                
         
                
//                 </div>
//             </div>
//             <br />
//          {/* Recent Activity */}
//         <div className="mb-6">
//           <h4 className="text-2xl font-semibold text-black-700 mb-4">Recent Activity</h4>
//           <div className="bg-gray-50 p-4 rounded-lg shadow-md">
//             <ul>
//               <li className="text-gray-700">User Alisha Zehra signed up</li>
//               <li className="text-gray-700">User Neha opened the website</li>
//               <li className="text-gray-700">Admin updated the website settings</li>
//               <li className="text-gray-700">New user registration from admin dashboard</li>
//             </ul>
//           </div>
//           <Link href={"/auth/signup"}> <h1 className='w-full py-2 px-4  text-white rounded-lg bg-green-600 text-center'>Log out</h1> </Link>
//         </div>
//           </div>
//         )}
        
            
          
        
//                 {activeTab === 'users' && (
//           <div>
//             <h1 className="text-3xl font-semibold mb-4">User Management</h1>
//             <p className="text-lg text-gray-600 mb-4">Manage and review user activity.</p>
//             <div className="bg-white p-4 rounded-lg shadow-md mb-8">
//               <h3 className="text-xl font-semibold">User Statistics</h3>
//               <p className="text-lg">We currently have a total of 150 users. This includes registered and active users. 70% of them are active on a daily basis.</p>
//             </div>

//             <div className="bg-white p-4 rounded-lg shadow-md mb-8">
//               <h3 className="text-xl font-semibold">Active Users</h3>
//               <p className="text-lg"> Currently 45 to 50 users are active. This includes registered and active users. 70% of them are active on a daily basis.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md mb-8">
//               <h3 className="text-xl font-semibold">User Feedback</h3>
//               <p className="text-lg">Around 20% of users gave positive feedback about performance of the website and its features.</p>
//             </div>
//             <Link href={"/auth/signup"}> <h1 className='w-full py-2 px-4  text-white rounded-lg bg-green-600 text-center'>Log out</h1> </Link>
//           </div>
//         )}

//         {activeTab === 'analytics' && (
//           <div>
//             <h2 className="text-xl font-semibold ">Analytics Overview</h2>
//             <p className="text-gray-700 ">
//               This section shows growth trends of users, page views, and more over time.
//             </p>
//             <div >
//               {/* <canvas id="analyticsChart" className="w-full h-64"></canvas> */}
//             </div>
//             <br />
//             <div>
//               <img src="https://img.freepik.com/premium-vector/ui-dashboard-modern-infographic-with-gradient-finance-graphs-statistics-chart-column-diagrams-analysis-internet-vector-report_53562-9183.jpg?w=2000" alt="hi" />
//          <br />     <h3 className="font-semibold text-lg">Key Insights</h3>
//               <ul className="list-disc pl-5 mt-2">
//                 <li>User growth has been accelerating steadily.</li>
//                 <li>Page views increased by 20% month-over-month, reflecting better user engagement.</li>
//               </ul>
             
//             </div>
//           </div>
//         )}

//         {activeTab === 'performance' && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
            
//             {/* SEO Performance */}
//             <div className="mb-8">
//               <h3 className="font-semibold text-lg">SEO Performance (100%)</h3>
//               <p className="text-gray-700">SEO has seen significant improvement, now at 90%, which is crucial for organic search traffic.</p>
//               <div className="mt-4">
//                 <img src="performance.png" alt="hi" />
//               </div>
//             </div>

//             {/* Web Performance */}
//             <div className="mb-8">
//               <h3 className="font-semibold text-lg">Web Performance (80%)</h3>
//               <p className="text-gray-700">Web performance is key to a great user experience, and we have made strides, reaching an 80% performance score.</p>
//               <div className="mt-4">
//                 <canvas id="performanceChart" className="w-full h-64"></canvas>
//               </div>
//             </div>
          
//             {/* Sales Performance
//             <div>
//               <h3 className="font-semibold text-lg">Sales Performance</h3>
//               <p className="text-gray-700">Sales revenue has grown by 15% over the last quarter, showing a positive trend.</p>
//               <div className="mt-4">
//                 <canvas id="salesChart" className="w-full h-64"></canvas>
//               </div>
//             </div> */}
//           </div>
//         )}

//         {activeTab === 'sales' && (
//           <div>
//             <h1 className="text-3xl font-semibold mb-4">Sales Overview</h1>
//             <p className="text-lg text-gray-600 mb-4">Track sales data and revenue trends.</p>
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Total Sales</h3>
//               <p className="text-3xl font-bold">Rs.50,000</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md mt-4">
//               <h3 className="text-xl font-semibold">Sales Growth</h3>
//               <p className="text-3xl font-bold">+15% in the last quarter</p>
              
//             </div> 
//             <br />
//             <Link href={"/auth/signup"}> <h1 className='w-full py-2 px-4  text-white rounded-lg bg-green-600 text-center'>Log out</h1> </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-800 text-white">
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-center">Admin Panel</h2>
        </div>
        <ul>
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'dashboard' ? 'bg-teal-600' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'users' ? 'bg-teal-600' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </li>
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'analytics' ? 'bg-teal-600' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </li>
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'performance' ? 'bg-teal-600' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            Performance
          </li>
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${activeTab === 'sales' ? 'bg-teal-600' : ''}`}
            onClick={() => setActiveTab('sales')}
          >
            Sales
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Dashboard Overview</h1>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to your Admin Panel! Below is a quick overview of key stats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Total Users</h3>
                <p className="text-3xl font-bold">55</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Active Users</h3>
                <p className="text-3xl font-bold">25</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">New Signups</h3>
                <p className="text-3xl font-bold">100</p>
              </div>
            </div>
            <br />
            {/* Recent Activity */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-black-700 mb-4">Recent Activity</h4>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <ul>
                  <li className="text-gray-700">User Alisha Zehra signed up</li>
                  <li className="text-gray-700">User Neha opened the website</li>
                  <li className="text-gray-700">Admin updated the website settings</li>
                  <li className="text-gray-700">New user registration from admin dashboard</li>
                </ul>
              </div>
              <Link href={"/auth/signup"}>
                <h1 className='w-full py-2 px-4 text-white rounded-lg bg-green-600 text-center'>
                  Log out
                </h1>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">User Management</h1>
            <p className="text-lg text-gray-600 mb-4">Manage and review user activity.</p>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold">User Statistics</h3>
              <p className="text-lg">We currently have a total of 150 users. This includes registered and active users. 70% of them are active on a daily basis.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold">Active Users</h3>
              <p className="text-lg">Currently 45 to 50 users are active. This includes registered and active users. 70% of them are active on a daily basis.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold">User Feedback</h3>
              <p className="text-lg">Around 20% of users gave positive feedback about performance of the website and its features.</p>
            </div>
            <Link href={"/auth/signup"}>
              <h1 className='w-full py-2 px-4 text-white rounded-lg bg-green-600 text-center'>
                Log out
              </h1>
            </Link>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <h2 className="text-xl font-semibold">Analytics Overview</h2>
            <p className="text-gray-700">
              This section shows growth trends of users, page views, and more over time.
            </p>
            <div>
              {/* <canvas id="analyticsChart" className="w-full h-64"></canvas> */}
            </div>
            <br />
            <div>
              <img
                src="https://img.freepik.com/premium-vector/ui-dashboard-modern-infographic-with-gradient-finance-graphs-statistics-chart-column-diagrams-analysis-internet-vector-report_53562-9183.jpg?w=2000"
                alt="hi"
              />
              <br />
              <h3 className="font-semibold text-lg">Key Insights</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>User growth has been accelerating steadily.</li>
                <li>Page views increased by 20% month-over-month, reflecting better user engagement.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>

            {/* SEO Performance */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg">SEO Performance (100%)</h3>
              <p className="text-gray-700">SEO has seen significant improvement, now at 90%, which is crucial for organic search traffic.</p>
              <div className="mt-4">
                <img src="performance.png" alt="hi" />
              </div>
            </div>

            {/* Web Performance */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg">Web Performance (80%)</h3>
              <p className="text-gray-700">Web performance is key to a great user experience, and we have made strides, reaching an 80% performance score.</p>
              <div className="mt-4">
                <canvas id="performanceChart" className="w-full h-64"></canvas>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sales' && (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Sales Overview</h1>
            <p className="text-lg text-gray-600 mb-4">Track sales data and revenue trends.</p>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Total Sales</h3>
              <p className="text-3xl font-bold">Rs.50,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
              <h3 className="text-xl font-semibold">Sales Growth</h3>
              <p className="text-3xl font-bold">+15% in the last quarter</p>
            </div>
            <br />
            <Link href={"/auth/signup"}>
              <h1 className='w-full py-2 px-4 text-white rounded-lg bg-green-600 text-center'>
                Log out
              </h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

