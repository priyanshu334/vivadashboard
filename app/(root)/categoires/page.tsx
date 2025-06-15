import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ChevronUp, ChevronDown, Pencil, Eye, Trash2, Plus } from "lucide-react";
import Link from "next/link";

export default function CategoryCatalogPage() {
  return (
    <div className="p-6 space-y-4">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Input placeholder="Search" className="w-64" />
          <Button>Search</Button>
        </div>
        <Link href="/categories/add">
        <Button className="flex items-center gap-2">
          <Plus size={16} /> Add New Category
        </Button>
        
        </Link>
        
      </div>

      {/* Table container */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Category Catalog</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Category</th>
                  <th className="p-2">Parent Category</th>
                  <th className="p-2">Child Category</th>
                  <th className="p-2">Sort</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((_, idx) => (
                  <tr className="border-b" key={idx}>
                    <td className="p-2 flex gap-2 items-center">
                      <Image
                        src="/placeholder.jpg"
                        alt="Product"
                        width={40}
                        height={60}
                        className="rounded-md border"
                      />
                      <div>
                        <div className="font-medium">P-Name</div>
                        <div className="text-xs text-gray-500">ID: bth121552555mns256</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                          Size = S
                        </span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                          Type = Female
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                          Fabric = Cotton
                        </span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                          Size = S
                        </span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                          Type = Female
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                          Fabric = Cotton
                        </span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-col items-center">
                        <ChevronUp className="cursor-pointer" />
                        <span>{idx + 1}</span>
                        <ChevronDown className="cursor-pointer" />
                      </div>
                    </td>
                    <td className="p-2 flex gap-2">
                      <Button variant="outline" size="sm">
                        <Pencil size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye size={14} />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        <Trash2 size={14} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <div>Showing 10 of 2 Category</div>
            <div className="flex gap-1">
              <Button size="sm" variant="outline">&lt;</Button>
              {[1, 2, 3].map((num) => (
                <Button
                  size="sm"
                  key={num}
                  variant={num === 1 ? "default" : "outline"}
                >
                  {num}
                </Button>
              ))}
              <Button size="sm" variant="outline">&gt;</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
