'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, RefreshCw, ClipboardList, Clock, Ban, Undo2, CheckCircle, ChevronUp, ChevronDown } from "lucide-react";

const stats = [
  {
    icon: <ClipboardList className="w-7 h-7" />,
    value: '34.5K',
    label: 'Total Orders',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    value: '5,296',
    label: 'Completed',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: <Clock className="w-7 h-7" />,
    value: '1,726',
    label: 'Pending',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    icon: <Ban className="w-7 h-7" />,
    value: '123',
    label: 'Cancelled',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    icon: <Undo2 className="w-7 h-7" />,
    value: '55',
    label: 'Returned',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
];

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-blue-500 text-white p-8 rounded-b-2xl shadow-md relative overflow-hidden transition-all duration-500 ease-in-out">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Header Section */}
      <div className="relative flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Product Management
          </h1>
          <p className="text-blue-100 text-sm mt-1 opacity-80">
            Dashboard Overview
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
            <RefreshCw className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/15 transition-colors duration-200 cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">John Doe</span>
            <span className="text-blue-200">▼</span>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="relative z-10 flex justify-center mb-4">
        <button
          onClick={toggleExpanded}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105"
          aria-label={isExpanded ? "Collapse stats" : "Expand stats"}
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Hide Stats' : 'Show Stats'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Stats Cards with Collapse Animation */}
      <div 
        className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pb-2">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`group bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out hover:scale-105 ${
                isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
              }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Icon Container */}
                  <div className={`${stat.bgColor} p-3 rounded-xl ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  {/* Value */}
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </div>
                  
                  {/* Decorative gradient line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
    </div>
  );
}