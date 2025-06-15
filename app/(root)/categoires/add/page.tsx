import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadIcon } from "lucide-react";

export default function AddCategoryPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Add New Category</h1>
          <p className="text-sm text-gray-500">Define your product structure, one category at a time.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="active" defaultChecked />
          <Label htmlFor="active" className="text-green-600">Active</Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Category Name" />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" placeholder="category-slug" />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Product Description</Label>
              <Textarea id="description" placeholder="Enter category description..." rows={4} />
            </div>
            <div>
              <Label htmlFor="parent">Parent Category</Label>
              <Select>
                <SelectTrigger id="parent">
                  <SelectValue placeholder="Select Parent Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Image</Label>
              <div className="border border-dashed border-gray-400 rounded-md p-4 text-center text-sm text-gray-500 cursor-pointer">
                <UploadIcon className="mx-auto mb-2" />
                <p>Upload Image</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <div>
              <Label htmlFor="seo-title">Title</Label>
              <Input id="seo-title" placeholder="SEO Title" />
            </div>
            <div>
              <Label htmlFor="seo-description">Description</Label>
              <Textarea id="seo-description" placeholder="SEO Description" rows={4} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 text-white">Save Category</Button>
      </div>
    </div>
  );
}
