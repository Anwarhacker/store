import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admindash = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const stats = {
    totalUsers: 150,
    totalOrders: 1240,
    totalRevenue: "$15,680",
    pendingOrders: 25,
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      // Add your logout API call here if needed
      localStorage.removeItem('user');
      navigate("/login", { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      

      <main className="max-w-7xl  mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-20">
          {[
            { label: "Total Users", value: stats.totalUsers, color: "from-blue-500 to-blue-600" },
            { label: "Total Orders", value: stats.totalOrders, color: "from-green-500 to-green-600" },
            { label: "Total Revenue", value: stats.totalRevenue, color: "from-purple-500 to-purple-600" },
            { label: "Pending Orders", value: stats.pendingOrders, color: "from-amber-500 to-amber-600" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
              <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <div className="border-b border-gray-700 mb-8">
            <nav className="flex space-x-6 overflow-x-auto">
              {["dashboard", "users", "orders", "settings"].map((tab) => (
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

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 text-white">Recent Activity</h3>
                  <div className="space-y-4">
                    {["New order received - #12345", "User registration - John Doe", "Payment confirmed - #12342"].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <p>{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-6 text-white">Quick Actions</h3>
                  <div className="space-y-4">
                    {[
                      { text: "Add New Product", color: "from-blue-600 to-blue-700" },
                      { text: "View Orders", color: "from-green-600 to-green-700" },
                      { text: "Manage Users", color: "from-purple-600 to-purple-700" }
                    ].map((action, index) => (
                      <button
                        key={index}
                        className={`w-full py-3 bg-gradient-to-r ${action.color} rounded-xl font-medium hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5`}
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div className="overflow-x-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-white">User Management</h2>
                  <button className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300">
                    Add New User
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
                          User
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-red-500 hover:text-red-400 transition-colors">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admindash;