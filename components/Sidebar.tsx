'use client'

import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import {
  LayoutDashboard,
  Box,
  ShoppingCart,
  Users,
  Megaphone,
  BarChart,
  FileText,
  Settings,
  Wrench,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Product", icon: Box, href: "/products" },
  // { label: "Order", icon: ShoppingCart, href: "/orders" },
  { label: "Customer", icon: Users, href: "/users" },
  // { label: "Marketing", icon: Megaphone, href: "/marketing" },
  // { label: "Reports & Analytics", icon: BarChart, href: "/reports" },
  // { label: "Content Management", icon: FileText, href: "/content" },
  // { label: "Setting", icon: Settings, href: "/settings" },
  {label:"Cupons",icon:Settings, href:"/cupons"},
  {label:"Categories",icon:Settings, href:"/categories"},

]

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleMobileMenu = () => setIsOpen(!isOpen)
  const toggleCollapse = () => setIsCollapsed(!isCollapsed)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-md shadow-lg border"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r bg-gray-50 transition-all duration-300 ease-in-out lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
        "lg:translate-x-0",
        isCollapsed ? "lg:w-16" : "lg:w-64"
      )}>
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className={cn(
              "text-xl font-semibold transition-opacity duration-300",
              isCollapsed ? "lg:opacity-0 lg:w-0 lg:overflow-hidden" : "opacity-100"
            )}>
              Viva Boutique
            </h1>

            {/* Collapse Button (Desktop) */}
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-200 transition-colors"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {navItems.map(({ label, icon: Icon, href }) => {
              const isActive = pathname === href
              return (
                <div key={label} className="relative group">
                  <button
                    onClick={() => {
                      router.push(href)
                      setIsOpen(false)
                    }}
                    className={cn(
                      "flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-indigo-100 text-sm font-medium transition-all duration-200",
                      isActive ? "bg-indigo-400 text-white" : "text-gray-800",
                      isCollapsed ? "lg:justify-center lg:px-2" : ""
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className={cn(
                      "transition-all duration-300",
                      isCollapsed ? "lg:opacity-0 lg:w-0 lg:overflow-hidden" : "opacity-100"
                    )}>
                      {label}
                    </span>
                  </button>

                  {/* Tooltip for Collapsed */}
                  {isCollapsed && (
                    <div className="hidden lg:group-hover:block absolute left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">
                      {label}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Footer */}
          <div className={cn(
            "text-xs mt-6 pt-4 border-t transition-all duration-300",
            isCollapsed ? "lg:opacity-0 lg:h-0 lg:overflow-hidden lg:mt-0 lg:pt-0" : "opacity-100"
          )}>
            <p className="text-gray-500">Powered by:-</p>
            <p className="mt-1 font-semibold text-blue-600">
              <a href="mailto:support@dataslime.com" className="hover:underline">
                © Data Slime
              </a>
            </p>
            <p>
              <a href="mailto:support@dataslime.com" className="text-blue-500 hover:underline">
                support@dataslime.com
              </a>
            </p>
          </div>
        </div>
      </aside>

      {/* Desktop Content Spacer */}
      <div className={cn(
        "hidden lg:block flex-shrink-0 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )} />
    </>
  )
}
