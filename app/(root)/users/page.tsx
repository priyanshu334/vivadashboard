'use client'

import React, { useState } from 'react'
import { Search, Eye, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
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
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useRouter } from 'next/router'

interface User {
  id: number
  name: string
  email: string
  phone: string
  verified: boolean
  role: 'Active' | 'Inactive'
}

const UsersDataPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter();

  // Sample data
  const users: User[] = [
    {
      id: 1,
      name: 'Charles James',
      email: 'Example123@gmail.com',
      phone: '+91 9824352369',
      verified: true,
      role: 'Active'
    },
    {
      id: 2,
      name: 'Charles James',
      email: 'Example123@gmail.com',
      phone: '+91 9824352369',
      verified: true,
      role: 'Inactive'
    },
    {
      id: 3,
      name: 'Charles James',
      email: 'Example123@gmail.com',
      phone: '+91 9824352369',
      verified: true,
      role: 'Active'
    }
  ]

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  )

  const totalPages = Math.ceil(filteredUsers.length / 10) || 1
  const startIndex = (currentPage - 1) * 10
  const endIndex = Math.min(startIndex + 10, filteredUsers.length)
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

  const handleSearch = () => {
    setCurrentPage(1)
  }

  const handleView = (userId: number) => {
    router.push(`/users/view/${userId}`);
    
  }

  const handleDelete = (userId: number) => {
    console.log('Delete user:', userId)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto w-full">
        {/* Search Section */}
        <div className="mb-6 flex items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        </div>

        {/* Users Data Table */}
        <div className="rounded-lg bg-white shadow">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-900">Users Data</h2>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-medium text-gray-900">Name</TableHead>
                <TableHead className="font-medium text-gray-900">Email</TableHead>
                <TableHead className="font-medium text-gray-900">Phone</TableHead>
                <TableHead className="font-medium text-gray-900">Verified</TableHead>
                <TableHead className="font-medium text-gray-900">Role</TableHead>
                <TableHead className="font-medium text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-gray-600">{user.email}</TableCell>
                  <TableCell className="text-gray-600">{user.phone}</TableCell>
                  <TableCell>
                    {user.verified && (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === 'Active' ? 'default' : 'secondary'}
                      className={
                        user.role === 'Active'
                          ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                          : 'bg-red-100 text-red-700 hover:bg-red-100'
                      }
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(user.id)}
                        className="h-8 w-8 p-0 text-gray-600 hover:text-gray-900"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(user.id)}
                        className="h-8 w-8 p-0 text-gray-600 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Footer with pagination info and pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {endIndex} of {filteredUsers.length} Users
            </div>

            {/* Pagination */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) setCurrentPage(currentPage - 1)
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage(pageNumber)
                        }}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersDataPage