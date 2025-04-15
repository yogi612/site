"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Plus, MoreHorizontal, Pencil, Trash, Eye } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

type Product = {
  id: string
  name: string
  slug: string
  description: string
  image: string
  featured: boolean
}

export function ProductsContent() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Credit Score",
      slug: "credit-score",
      description: "Check and improve your credit score with our expert tools and guidance.",
      image: "/placeholder.svg?height=100&width=100",
      featured: true,
    },
    {
      id: "2",
      name: "Home & Vehicle Loans",
      slug: "home-vehicle-loans",
      description: "Get the best rates on home and vehicle loans with our personalized service.",
      image: "/placeholder.svg?height=100&width=100",
      featured: true,
    },
    {
      id: "3",
      name: "Loan Assistance",
      slug: "loan-assistance",
      description: "Get expert help navigating the loan process from start to finish.",
      image: "/placeholder.svg?height=100&width=100",
      featured: false,
    },
    {
      id: "4",
      name: "Investment & Wealth",
      slug: "investment-wealth",
      description: "Grow your wealth with our expert investment advisory services.",
      image: "/placeholder.svg?height=100&width=100",
      featured: true,
    },
  ])

  const [newProduct, setNewProduct] = useState({
    name: "",
    slug: "",
    description: "",
    image: "/placeholder.svg?height=100&width=100",
    featured: false,
  })

  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddProduct = () => {
    const product: Product = {
      id: Math.random().toString(36).substring(7),
      name: newProduct.name,
      slug: newProduct.slug || newProduct.name.toLowerCase().replace(/\s+/g, "-"),
      description: newProduct.description,
      image: newProduct.image,
      featured: newProduct.featured,
    }
    setProducts([...products, product])
    setNewProduct({
      name: "",
      slug: "",
      description: "",
      image: "/placeholder.svg?height=100&width=100",
      featured: false,
    })
    toast({
      title: "Product added",
      description: `${product.name} has been added successfully.`,
    })
  }

  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(products.map((product) => (product.id === editingProduct.id ? editingProduct : product)))
      setEditingProduct(null)
      toast({
        title: "Product updated",
        description: `${editingProduct.name} has been updated successfully.`,
      })
    }
  }

  const handleDeleteProduct = (id: string) => {
    const product = products.find((p) => p.id === id)
    setProducts(products.filter((product) => product.id !== id))
    toast({
      title: "Product deleted",
      description: `${product?.name} has been deleted successfully.`,
      variant: "destructive",
    })
  }

  const handleToggleFeatured = (id: string) => {
    setProducts(products.map((product) => (product.id === id ? { ...product, featured: !product.featured } : product)))
    const product = products.find((p) => p.id === id)
    toast({
      title: product?.featured ? "Product unfeatured" : "Product featured",
      description: `${product?.name} has been ${product?.featured ? "removed from" : "added to"} featured products.`,
    })
  }

  return (
    <AdminLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                  <DialogDescription>Add a new product or service to your website.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newProduct.name}
                      onChange={(e) => {
                        setNewProduct({
                          ...newProduct,
                          name: e.target.value,
                          slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                        })
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={newProduct.slug}
                      onChange={(e) => setNewProduct({ ...newProduct, slug: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      This will be used in the URL: /products/{newProduct.slug || "example-slug"}
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="featured">Featured</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={newProduct.featured}
                        onChange={(e) => setNewProduct({ ...newProduct, featured: e.target.checked })}
                      />
                      <Label htmlFor="featured">Show on homepage</Label>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleAddProduct}>
                    Add Product
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Search products..."
              className="w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">/products/{product.slug}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md truncate">{product.description}</TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        product.featured ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {product.featured ? "Featured" : "Not Featured"}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={`/products/${product.slug}`} target="_blank">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                        </Link>
                        <Dialog>
                          <DialogTrigger asChild>
                            <DropdownMenuItem
                              onSelect={(e) => {
                                e.preventDefault()
                                setEditingProduct(product)
                              }}
                            >
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Product</DialogTitle>
                              <DialogDescription>Make changes to the product information.</DialogDescription>
                            </DialogHeader>
                            {editingProduct && (
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-name">Name</Label>
                                  <Input
                                    id="edit-name"
                                    value={editingProduct.name}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-slug">Slug</Label>
                                  <Input
                                    id="edit-slug"
                                    value={editingProduct.slug}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-description">Description</Label>
                                  <Textarea
                                    id="edit-description"
                                    value={editingProduct.description}
                                    onChange={(e) =>
                                      setEditingProduct({
                                        ...editingProduct,
                                        description: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-featured">Featured</Label>
                                  <div className="flex items-center space-x-2">
                                    <input
                                      type="checkbox"
                                      id="edit-featured"
                                      checked={editingProduct.featured}
                                      onChange={(e) =>
                                        setEditingProduct({
                                          ...editingProduct,
                                          featured: e.target.checked,
                                        })
                                      }
                                    />
                                    <Label htmlFor="edit-featured">Show on homepage</Label>
                                  </div>
                                </div>
                              </div>
                            )}
                            <DialogFooter>
                              <Button type="submit" onClick={handleUpdateProduct}>
                                Save Changes
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <DropdownMenuItem onClick={() => handleToggleFeatured(product.id)}>
                          {product.featured ? "Remove from featured" : "Add to featured"}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteProduct(product.id)}>
                          <Trash className="mr-2 h-4 w-4" />
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
      </div>
    </AdminLayout>
  )
}
