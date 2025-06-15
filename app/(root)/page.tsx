'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, ShoppingCart, Package, User, AlertTriangle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  // Revenue data for the line chart
  const revenueData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 5000 },
    { month: 'Mar', value: 6500 },
    { month: 'Apr', value: 8000 },
    { month: 'May', value: 9000 },
    { month: 'Jun', value: 7500 },
    { month: 'Jul', value: 8500 },
    { month: 'Aug', value: 9500 },
    { month: 'Sep', value: 7000 },
    { month: 'Oct', value: 8000 },
    { month: 'Nov', value: 10000 },
    { month: 'Dec', value: 12000 }
  ];

  // Order status data for pie chart
  const orderStatusData = [
    { name: 'Completed', value: 45, color: '#8b5cf6' },
    { name: 'Processing', value: 25, color: '#ec4899' },
    { name: 'Pending', value: 20, color: '#3b82f6' },
    { name: 'Cancelled', value: 10, color: '#f97316' }
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'order',
      message: 'John Doe placed an order (#45321)',
      time: '2 mins ago',
      icon: ShoppingCart
    },
    {
      id: 2,
      type: 'order',
      message: 'Order #45320 was cancelled',
      time: '5 mins ago',
      icon: ShoppingCart
    },
    {
      id: 3,
      type: 'inventory',
      message: 'Headphones Marked out of Stock',
      time: '2 mins ago',
      icon: Package
    },
    {
      id: 4,
      type: 'order',
      message: 'Order #45320 was cancelled',
      time: '5 mins ago',
      icon: ShoppingCart
    }
  ];

  // Inventory alerts
  const inventoryAlerts = [
    { category: 'Pending', count: 48, status: 'warning' },
    { category: 'Weekend', count: 670, status: 'info' },
    { category: 'Delivery', count: 126, status: 'success' },
    { category: 'Computer', count: 24, status: 'error' }
  ];

  const formatValue = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Row - Revenue and Order Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">Revenue</CardTitle>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" className="text-xs px-2 py-1 h-6">D</Button>
                  <Button variant="ghost" size="sm" className="text-xs px-2 py-1 h-6">W</Button>
                  <Button variant="default" size="sm" className="text-xs px-2 py-1 h-6 bg-blue-500">M</Button>
                  <Button variant="ghost" size="sm" className="text-xs px-2 py-1 h-6">Y</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#666' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#666' }}
                      tickFormatter={formatValue}
                    />
                    <Tooltip 
                      formatter={(value: number) => [`$${formatValue(value)}`, 'Revenue']}
                      labelStyle={{ color: '#666' }}
                      contentStyle={{ 
                        backgroundColor: '#4f46e5', 
                        color: 'white', 
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#4f46e5" 
                      strokeWidth={3}
                      dot={{ fill: '#4f46e5', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#4f46e5' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Order Status */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900">Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie
                        data={orderStatusData}
                        cx={100}
                        cy={100}
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {orderStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-green-500">5.7%</div>
                    <div className="text-xs text-gray-500 text-center">
                      Improved than<br />Previous Month
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - Recent Activity and Inventory Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-4 w-4 text-gray-400 mt-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Inventory Alerts */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3 border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">Inventory Alerts</CardTitle>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>July 15,2025 - Aug 15,2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-gray-900">Out of Stock</span>
                  </div>
                  <Badge variant="destructive" className="bg-red-500">65</Badge>
                </div>
                
                {inventoryAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        alert.status === 'warning' ? 'bg-yellow-400' :
                        alert.status === 'info' ? 'bg-blue-400' :
                        alert.status === 'success' ? 'bg-green-400' :
                        'bg-red-400'
                      }`} />
                      <span className="text-sm text-gray-700">{alert.category}</span>
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {alert.count}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
                See Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;