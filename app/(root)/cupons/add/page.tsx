'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon } from 'lucide-react'

export default function AddNewCouponPage() {
  const [formData, setFormData] = useState({
    title: '',
    code: '',
    type: '',
    value: '',
    maxValue: '',
    productDescription: '',
    usageLimit: '',
    perUserLimit: '',
    usedCount: '',
    minimumOrderValue: '',
    products: '',
    categories: '',
    users: '',
    startDate: '',
    endDate: '',
    isActive: true,
    isAuto: false,
    isPublic: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Form cancelled')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Add New Coupon</h1>
          <p className="text-gray-600 mt-1">Create a new discount coupon by filling out the details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="code">Code</Label>
                    <Input
                      id="code"
                      value={formData.code}
                      onChange={(e) => handleInputChange('code', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="fixed">Fixed Amount</SelectItem>
                        <SelectItem value="free-shipping">Free Shipping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="value">Value</Label>
                    <Input
                      id="value"
                      value={formData.value}
                      onChange={(e) => handleInputChange('value', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxValue">Max Value</Label>
                    <Input
                      id="maxValue"
                      value={formData.maxValue}
                      onChange={(e) => handleInputChange('maxValue', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="productDescription">Product Description</Label>
                  <Textarea
                    id="productDescription"
                    value={formData.productDescription}
                    onChange={(e) => handleInputChange('productDescription', e.target.value)}
                    className="mt-1 min-h-[100px]"
                    placeholder="Enter product description..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Limits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Limits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="usageLimit">Usage Limit</Label>
                  <Input
                    id="usageLimit"
                    value={formData.usageLimit}
                    onChange={(e) => handleInputChange('usageLimit', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="perUserLimit">per User Limit</Label>
                  <Input
                    id="perUserLimit"
                    value={formData.perUserLimit}
                    onChange={(e) => handleInputChange('perUserLimit', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="usedCount">Used Count</Label>
                  <Input
                    id="usedCount"
                    value={formData.usedCount}
                    onChange={(e) => handleInputChange('usedCount', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="minimumOrderValue">Minimum Order Value</Label>
                  <Input
                    id="minimumOrderValue"
                    value={formData.minimumOrderValue}
                    onChange={(e) => handleInputChange('minimumOrderValue', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Coupon Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Coupon Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <Label htmlFor="active" className="text-green-600 font-medium">Active</Label>
                  </div>
                  <Switch
                    id="active"
                    checked={formData.isActive}
                    onCheckedChange={(checked) => handleInputChange('isActive', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <Label htmlFor="auto" className="text-blue-600 font-medium">Auto</Label>
                  </div>
                  <Switch
                    id="auto"
                    checked={formData.isAuto}
                    onCheckedChange={(checked) => handleInputChange('isAuto', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <Label htmlFor="public" className="text-purple-600 font-medium">Public</Label>
                  </div>
                  <Switch
                    id="public"
                    checked={formData.isPublic}
                    onCheckedChange={(checked) => handleInputChange('isPublic', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Coupon Duration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Coupon Duration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <div className="relative mt-1">
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="pr-10"
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <div className="relative mt-1">
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      className="pr-10"
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Applicability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Applicability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="products">Products</Label>
                  <Select onValueChange={(value) => handleInputChange('products', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select products" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Products</SelectItem>
                      <SelectItem value="specific">Specific Products</SelectItem>
                      <SelectItem value="category">By Category</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="categories">Categories</Label>
                  <Select onValueChange={(value) => handleInputChange('categories', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="users">Users</Label>
                  <Select onValueChange={(value) => handleInputChange('users', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select users" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="new">New Users</SelectItem>
                      <SelectItem value="returning">Returning Users</SelectItem>
                      <SelectItem value="vip">VIP Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 bg-blue-600 hover:bg-blue-700"
            >
              Save Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}