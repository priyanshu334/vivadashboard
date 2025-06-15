"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  MapPin, 
  Heart, 
  ShoppingCart, 
  Phone, 
  Mail, 
  Calendar,
  Edit,
  Plus,
  Trash2
} from 'lucide-react';

const UserProfilePage = () => {
  const [isBlocked, setIsBlocked] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const personalInfo = {
    firstName: "Charles",
    lastName: "James",
    gender: "Male",
    dateOfBirth: "11/04/2014",
    email: "Example123@gmail.com",
    mobile: "+91 9949123456",
    phoneNumber: "1234567890"
  };

  const addressInfo = {
    firstName: "Charles",
    lastName: "James",
    phoneNumber: "1234567890",
    address1: "Army chowk se white sabzi karne waagaon bali",
    address2: "Chathargram",
    city: "Hyderabad",
    country: "INDIA",
    postalCode: "487751"
  };

  const wishlistItems = [
    {
      id: 1,
      name: "Kurti",
      color: "Blue",
      price: "₹500/-",
      size: "S",
      addedAt: "22/03/24",
      image: "/api/placeholder/150/200"
    }
  ];

  const cartItems = [
    {
      id: 1,
      name: "Kurti",
      color: "Blue",
      price: "₹500/-",
      size: "S",
      addedAt: "22/03/24",
      coupons: "Applied",
      image: "/api/placeholder/150/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/api/placeholder/64/64" alt="Charles James" />
              <AvatarFallback className="bg-blue-500 text-white text-xl">CJ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Data</h1>
              <p className="text-gray-600">Manage your profile information</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="block-toggle" className="text-sm font-medium">
              Block
            </Label>
            <Switch
              id="block-toggle"
              checked={isBlocked}
              onCheckedChange={setIsBlocked}
              className="data-[state=checked]:bg-red-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-blue-500" />
                <span>Personal Information</span>
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditMode(!editMode)}
              >
                <Edit className="h-4 w-4 mr-2" />
                {editMode ? 'Save' : 'Edit'}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">First Name</Label>
                  {editMode ? (
                    <Input defaultValue={personalInfo.firstName} className="mt-1" />
                  ) : (
                    <p className="mt-1 text-gray-900">{personalInfo.firstName}</p>
                  )}
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Last Name</Label>
                  {editMode ? (
                    <Input defaultValue={personalInfo.lastName} className="mt-1" />
                  ) : (
                    <p className="mt-1 text-gray-900">{personalInfo.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Gender</Label>
                  <p className="mt-1 text-gray-900">{personalInfo.gender}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Date of Birth</Label>
                  <p className="mt-1 text-gray-900">{personalInfo.dateOfBirth}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Email</Label>
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 text-gray-400 mr-2" />
                  <p className="text-gray-900">{personalInfo.email}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Mobile</Label>
                <div className="flex items-center mt-1">
                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                  <p className="text-gray-900">{personalInfo.mobile}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Phone Number</Label>
                <p className="mt-1 text-gray-900">{personalInfo.phoneNumber}</p>
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>Address Information</span>
              </CardTitle>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Address
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">First Name</Label>
                  <p className="mt-1 text-gray-900">{addressInfo.firstName}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Last Name</Label>
                  <p className="mt-1 text-gray-900">{addressInfo.lastName}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Phone Number</Label>
                <p className="mt-1 text-gray-900">{addressInfo.phoneNumber}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Address Line 1</Label>
                <p className="mt-1 text-gray-900 text-sm">{addressInfo.address1}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Address Line 2</Label>
                <p className="mt-1 text-gray-900">{addressInfo.address2}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">City</Label>
                  <p className="mt-1 text-gray-900">{addressInfo.city}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Country</Label>
                  <p className="mt-1 text-gray-900">{addressInfo.country}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Postal Code</Label>
                <p className="mt-1 text-gray-900">{addressInfo.postalCode}</p>
              </div>

              <Button className="w-full mt-4">
                Save More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Wishlist Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Wishlist Information</span>
            </CardTitle>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 space-y-3">
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{item.name}</h4>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Color:</span>
                        <p className="font-medium">{item.color}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Price:</span>
                        <p className="font-medium">{item.price}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Size:</span>
                        <p className="font-medium">{item.size}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Added At:</span>
                        <p className="font-medium">{item.addedAt}</p>
                      </div>
                    </div>
                    <Button className="w-full" size="sm">
                      See More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cart Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-green-500" />
              <span>Cart Information</span>
            </CardTitle>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 space-y-3">
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{item.name}</h4>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Color:</span>
                        <p className="font-medium">{item.color}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Price:</span>
                        <p className="font-medium">{item.price}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Size:</span>
                        <p className="font-medium">{item.size}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Added At:</span>
                        <p className="font-medium">{item.addedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-600 text-sm">Coupons:</span>
                        <Badge variant="secondary" className="ml-1 text-xs">
                          {item.coupons}
                        </Badge>
                      </div>
                    </div>
                    <Button className="w-full" size="sm">
                      See More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfilePage;