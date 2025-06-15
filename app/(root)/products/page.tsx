import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-2 items-center w-full md:w-auto">
          <Input placeholder="Search" className="max-w-xs" />
          <Button>Search</Button>
        </div>

        <select className="border p-2 rounded-md">
          <option>Search By Categories</option>
          <option>Clothing</option>
          <option>Accessories</option>
        </select>

        <Link href="/products/add">
             <Button className="flex gap-2 items-center">
          <Plus size={16} /> Add New Product
        </Button>
        
        </Link>

   
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Categories</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2].map((item) => (
                  <TableRow key={item}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="product"
                          className="rounded w-12 h-16 object-cover"
                        />
                        <div>
                          <p className="font-semibold">P-Name</p>
                          <p className="text-xs text-muted-foreground">ID: bh121552555mns256</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="space-x-1 space-y-1">
                      <Badge variant="secondary">Size = S</Badge>
                      <Badge variant="outline">Type = Female</Badge>
                      <Badge variant="secondary">Rate = Rs.450.00/-</Badge>
                    </TableCell>
                    <TableCell className="space-x-1 space-y-1">
                      <Badge variant="secondary">Fabric = Cotton</Badge>
                      <Badge variant="destructive">Care = Machine Wash</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="secondary" size="sm">View</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-between items-center p-4 border-t text-sm text-muted-foreground">
            <span>Showing 10 of 2 products</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft size={16} />
              </Button>
              <div className="flex gap-1">
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="icon"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="icon">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
