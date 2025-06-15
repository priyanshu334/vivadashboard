"use client";   
import React, { useState } from 'react';
import { Upload, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductFormData {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  brand: string;
  stock: number;
  category: string;
  price: number;
  discountedRate: number;
  discountedPrice: number;
  about: string;
  fabric: string;
  care: string;
  disclaimer: string;
  shipping: string;
  returnPolicy: string;
  tags: string[];
  colors: string[];
  sizes: string[];
  images: File[];
  thumbnail: File | null;
  videos: File[];
  isActive: boolean;
}

type SizeOption = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
type CategoryOption = 'clothing' | 'electronics' | 'accessories' | 'home' | 'beauty' | 'sports';

const AddProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    slug: '',
    description: '',
    shortDescription: '',
    brand: '',
    stock: 0,
    category: '',
    price: 0,
    discountedRate: 0,
    discountedPrice: 0,
    about: '',
    fabric: '',
    care: '',
    disclaimer: '',
    shipping: '',
    returnPolicy: '',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    colors: [],
    sizes: [],
    images: [],
    thumbnail: null,
    videos: [],
    isActive: true,
  });

  const [newTag, setNewTag] = useState<string>('');

  const availableColors: string[] = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57',
    '#FF9FF3', '#54A0FF', '#5F27CD', '#00D2D3', '#FF9F43',
    '#6C5CE7', '#A29BFE', '#FD79A8', '#FDCB6E', '#E17055'
  ];

  const availableSizes: SizeOption[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const categories: { value: CategoryOption; label: string }[] = [
    { value: 'clothing', label: 'Clothing' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'beauty', label: 'Beauty & Personal Care' },
    { value: 'sports', label: 'Sports & Outdoors' },
  ];

  const updateFormData = <K extends keyof ProductFormData>(
    key: K,
    value: ProductFormData[K]
  ): void => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const addTag = (): void => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      updateFormData('tags', [...formData.tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string): void => {
    updateFormData('tags', formData.tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files || []);
    const remainingSlots = 8 - formData.images.length;
    const newImages = files.slice(0, remainingSlots);
    updateFormData('images', [...formData.images, ...newImages]);
  };

  const removeImage = (index: number): void => {
    updateFormData('images', formData.images.filter((_, i) => i !== index));
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    updateFormData('thumbnail', file);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files || []);
    updateFormData('videos', [...formData.videos, ...files]);
  };

  const toggleColor = (color: string): void => {
    const newColors = formData.colors.includes(color)
      ? formData.colors.filter(c => c !== color)
      : [...formData.colors, color];
    updateFormData('colors', newColors);
  };

  const toggleSize = (size: SizeOption): void => {
    const newSizes = formData.sizes.includes(size)
      ? formData.sizes.filter(s => s !== size)
      : [...formData.sizes, size];
    updateFormData('sizes', newSizes);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleNumberInput = (
    key: 'stock' | 'price' | 'discountedRate' | 'discountedPrice',
    value: string
  ): void => {
    const numValue = parseFloat(value) || 0;
    updateFormData(key, numValue);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <Card>
        {/* Header */}
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-semibold">Add New Product</CardTitle>
            <div className="flex items-center space-x-2">
              <Label htmlFor="active-toggle" className="text-sm font-medium">
                Active
              </Label>
              <Switch
                id="active-toggle"
                checked={formData.isActive}
                onCheckedChange={(checked) => updateFormData('isActive', checked)}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Basic Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => updateFormData('title', e.target.value)}
                          placeholder="Product title"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                          id="slug"
                          value={formData.slug}
                          onChange={(e) => updateFormData('slug', e.target.value)}
                          placeholder="product-slug"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Product Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => updateFormData('description', e.target.value)}
                        placeholder="Enter product description..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="short-description">Short Description</Label>
                      <Textarea
                        id="short-description"
                        value={formData.shortDescription}
                        onChange={(e) => updateFormData('shortDescription', e.target.value)}
                        placeholder="Brief product description..."
                        rows={3}
                      />
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {formData.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="gap-1">
                            {tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto"
                              onClick={() => removeTag(tag)}
                            >
                              <X size={14} />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add a tag..."
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        />
                        <Button type="button" onClick={addTag}>
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand</Label>
                      <Input
                        id="brand"
                        value={formData.brand}
                        onChange={(e) => updateFormData('brand', e.target.value)}
                        placeholder="Brand name"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Media */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Media</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Product Images</Label>
                      <div className="grid grid-cols-4 gap-4">
                        {formData.images.map((image, index) => (
                          <div key={index} className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Product ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-1 right-1 p-1 h-auto"
                              onClick={() => removeImage(index)}
                            >
                              <X size={12} />
                            </Button>
                          </div>
                        ))}
                        {formData.images.length < 8 && (
                          <Label className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                            <Upload size={24} className="text-gray-400 mb-2" />
                            <span className="text-sm text-gray-500">Add Image</span>
                            <Input
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                          </Label>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Thumbnail</Label>
                        <Label className="w-24 h-24 bg-gray-50 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                          <Upload size={20} className="text-gray-400 mb-1" />
                          <span className="text-xs text-gray-500">Upload</span>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailUpload}
                            className="hidden"
                          />
                        </Label>
                      </div>

                      <div className="space-y-2">
                        <Label>Product Videos</Label>
                        <Label className="w-24 h-24 bg-gray-50 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                          <Upload size={20} className="text-gray-400 mb-1" />
                          <span className="text-xs text-gray-500">Upload</span>
                          <Input
                            type="file"
                            multiple
                            accept="video/*"
                            onChange={handleVideoUpload}
                            className="hidden"
                          />
                        </Label>
                        <p className="text-xs text-gray-500">You can drop video or click to upload</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal & Policy Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Legal & Policy Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="disclaimer">Disclaimer</Label>
                      <Textarea
                        id="disclaimer"
                        value={formData.disclaimer}
                        onChange={(e) => updateFormData('disclaimer', e.target.value)}
                        placeholder="Product disclaimer..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="shipping">Shipping</Label>
                      <Textarea
                        id="shipping"
                        value={formData.shipping}
                        onChange={(e) => updateFormData('shipping', e.target.value)}
                        placeholder="Shipping information..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="return">Return</Label>
                      <Textarea
                        id="return"
                        value={formData.returnPolicy}
                        onChange={(e) => updateFormData('returnPolicy', e.target.value)}
                        placeholder="Return policy..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Inventory & Classification */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Inventory & Classification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="stock">Stock</Label>
                      <Input
                        id="stock"
                        type="number"
                        min="0"
                        value={formData.stock}
                        onChange={(e) => handleNumberInput('stock', e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Categories</Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={(value: CategoryOption) => updateFormData('category', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Size</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {availableSizes.map((size) => (
                          <Button
                            key={size}
                            type="button"
                            variant={formData.sizes.includes(size) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleSize(size)}
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Colors</Label>
                      <div className="grid grid-cols-5 gap-2">
                        {availableColors.map((color) => (
                          <button
                            key={color}
                            type="button"
                            onClick={() => toggleColor(color)}
                            className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                              formData.colors.includes(color)
                                ? 'border-gray-800 scale-110'
                                : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color }}
                            aria-label={`Select color ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing & Offers */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pricing & Offers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => handleNumberInput('price', e.target.value)}
                        placeholder="0.00"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="discounted-rate">Discounted Rate (%)</Label>
                      <Input
                        id="discounted-rate"
                        type="number"
                        min="0"
                        max="100"
                        step="0.01"
                        value={formData.discountedRate}
                        onChange={(e) => handleNumberInput('discountedRate', e.target.value)}
                        placeholder="0.00"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="discounted-price">Discounted Price</Label>
                      <Input
                        id="discounted-price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.discountedPrice}
                        onChange={(e) => handleNumberInput('discountedPrice', e.target.value)}
                        placeholder="0.00"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Product Attributes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Product Attributes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="about">About</Label>
                      <Textarea
                        id="about"
                        value={formData.about}
                        onChange={(e) => updateFormData('about', e.target.value)}
                        placeholder="Additional product information..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fabric">Fabric</Label>
                      <Input
                        id="fabric"
                        value={formData.fabric}
                        onChange={(e) => updateFormData('fabric', e.target.value)}
                        placeholder="Fabric type"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="care">Care</Label>
                      <Textarea
                        id="care"
                        value={formData.care}
                        onChange={(e) => updateFormData('care', e.target.value)}
                        placeholder="Care instructions..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-6 mt-8 border-t">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                Save Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProductForm;