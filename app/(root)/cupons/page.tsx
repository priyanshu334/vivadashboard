// page.tsx or coupons.tsx
'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Plus, Search, Edit, Eye, Trash2, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Coupon {
  id: string
  title: string
  code: string
  discount: string
  status: 'Active' | 'Inactive'
  autoApplied: boolean
  expirationDate: string
}

const CouponsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1)
  
  // Sample data
  const coupons: Coupon[] = [
    {
      id: '1',
      title: 'WELCOME10',
      code: 'WELCOME10',
      discount: '10%',
      status: 'Active',
      autoApplied: true,
      expirationDate: '31-05-2025'
    },
    {
      id: '2',
      title: 'WELCOME10',
      code: 'WELCOME10',
      discount: '10%',
      status: 'Active',
      autoApplied: true,
      expirationDate: '31-05-2025'
    },
    {
      id: '3',
      title: 'WELCOME10',
      code: 'WELCOME10',
      discount: '10%',
      status: 'Active',
      autoApplied: true,
      expirationDate: '31-05-2025'
    }
  ]

  const totalCoupons = coupons.length
  const itemsPerPage = 10
  const totalPages = Math.ceil(totalCoupons / itemsPerPage)

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchTerm)
  }

  const handleEdit = (couponId: string) => {
    console.log('Edit coupon:', couponId)
  }

  const handleView = (couponId: string) => {
    console.log('View coupon:', couponId)
  }

  const handleDelete = (couponId: string) => {
    console.log('Delete coupon:', couponId)
  }

  const handleAddNewCoupon = () => {
    router.push('/cupons/add');
  
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600">
              Search
            </Button>
          </div>
          <Button onClick={handleAddNewCoupon} className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Add New Coupon
          </Button>
        </div>

        {/* Coupons Status Card */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Coupons Status</h2>
            
            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium text-gray-700">Title</TableHead>
                    <TableHead className="font-medium text-gray-700">Code</TableHead>
                    <TableHead className="font-medium text-gray-700">Discount</TableHead>
                    <TableHead className="font-medium text-gray-700">Status</TableHead>
                    <TableHead className="font-medium text-gray-700">Auto-Applied</TableHead>
                    <TableHead className="font-medium text-gray-700">Expiration-Date</TableHead>
                    <TableHead className="font-medium text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coupons.map((coupon) => (
                    <TableRow key={coupon.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{coupon.title}</TableCell>
                      <TableCell>{coupon.code}</TableCell>
                      <TableCell>{coupon.discount}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={coupon.status === 'Active' ? 'default' : 'secondary'}
                          className={coupon.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                        >
                          {coupon.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className={`${coupon.autoApplied ? 'text-green-600' : 'text-red-600'}`}>
                          {coupon.autoApplied ? 'Yes' : 'No'}
                        </span>
                      </TableCell>
                      <TableCell>{coupon.expirationDate}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-32">
                            <DropdownMenuItem onClick={() => handleEdit(coupon.id)}>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleView(coupon.id)}>
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleDelete(coupon.id)}
                              className="text-red-600 focus:text-red-600"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4 pt-4">
              <div className="text-sm text-gray-600">
                Showing {Math.min(10, totalCoupons)} of {totalCoupons} Coupons
              </div>
              
              {/* Pagination */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex gap-1">
                  {[1, 2, 3].map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-blue-500 hover:bg-blue-600" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponsPage