import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Userdash = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const userInfo = {
    name: "John Doe",
    email: "john@example.com",
    orders: 5,
    wishlist: 3,
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem('user');
      navigate("/login", { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      
      <header className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-10">
       
      </header>
      <div className="flex justify-between items-center mb-2 mt-20">
            <h1 className="text-3xl underline font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 px-6 ">
              My Dashboard
            </h1>
           
          </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Welcome", value: userInfo.name },
            { label: "Total Orders", value: userInfo.orders },
            { label: "Wishlist Items", value: userInfo.wishlist },
            { label: "Reward Points", value: "150" },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs and Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <div className="border-b border-gray-700 mb-8">
            <nav className="flex space-x-6 overflow-x-auto">
              {["profile", "orders", "wishlist", "settings"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Profile Tab Content */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-2xl font-bold">
                  {userInfo.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                  <p className="text-gray-400">{userInfo.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {["Name", "Email"].map((field) => (
                  <div key={field} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">{field}</label>
                    <input
                      type={field === "Email" ? "email" : "text"}
                      value={userInfo[field.toLowerCase()]}
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      readOnly
                    />
                  </div>
                ))}
              </div>

              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300">
                Edit Profile
              </button>
            </div>
          )}

          {/* Orders Tab Content */}
          {activeTab === "orders" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                    <td className="px-6 py-4 whitespace-nowrap">2024-01-20</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                        Delivered
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">₹99.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Continue with other tab contents with similar styling */}
        </div>
      </main>
    </div>
  );
};

export default Userdash;