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

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  createdAt: Date
  published: boolean
}

export function BlogContent() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Understanding Credit Scores in India",
      slug: "understanding-credit-scores-india",
      excerpt: "Learn how credit scores work in India and how to improve yours.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=100&width=100",
      author: "Priya Patel",
      createdAt: new Date(2023, 4, 15),
      published: true,
    },
    {
      id: "2",
      title: "Home Loan Options for First-Time Buyers",
      slug: "home-loan-options-first-time-buyers",
      excerpt: "A comprehensive guide to home loan options for first-time homebuyers.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=100&width=100",
      author: "Rahul Sharma",
      createdAt: new Date(2023, 5, 22),
      published: true,
    },
    {
      id: "3",
      title: "Business Loans: What You Need to Know",
      slug: "business-loans-what-you-need-to-know",
      excerpt: "Everything you need to know about getting a business loan in India.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=100&width=100",
      author: "Amit Kumar",
      createdAt: new Date(2023, 6, 10),
      published: false,
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "/placeholder.svg?height=100&width=100",
    author: "",
    published: false,
  })

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddPost = () => {
    const post: BlogPost = {
      id: Math.random().toString(36).substring(7),
      title: newPost.title,
      slug: newPost.slug || newPost.title.toLowerCase().replace(/\s+/g, "-"),
      excerpt: newPost.excerpt,
      content: newPost.content,
      image: newPost.image,
      author: newPost.author,
      createdAt: new Date(),
      published: newPost.published,
    }
    setPosts([...posts, post])
    setNewPost({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      image: "/placeholder.svg?height=100&width=100",
      author: "",
      published: false,
    })
    toast({
      title: "Blog post created",
      description: `"${post.title}" has been created successfully.`,
    })
  }

  const handleUpdatePost = () => {
    if (editingPost) {
      setPosts(posts.map((post) => (post.id === editingPost.id ? editingPost : post)))
      setEditingPost(null)
      toast({
        title: "Blog post updated",
        description: `"${editingPost.title}" has been updated successfully.`,
      })
    }
  }

  const handleDeletePost = (id: string) => {
    const post = posts.find((p) => p.id === id)
    setPosts(posts.filter((post) => post.id !== id))
    toast({
      title: "Blog post deleted",
      description: `"${post?.title}" has been deleted successfully.`,
      variant: "destructive",
    })
  }

  const handleTogglePublished = (id: string) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, published: !post.published } : post)))
    const post = posts.find((p) => p.id === id)
    toast({
      title: post?.published ? "Blog post unpublished" : "Blog post published",
      description: `"${post?.title}" has been ${post?.published ? "unpublished" : "published"}.`,
    })
  }

  return (
    <AdminLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Blog Posts</h2>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Add New Blog Post</DialogTitle>
                  <DialogDescription>Create a new blog post for your website.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newPost.title}
                      onChange={(e) => {
                        setNewPost({
                          ...newPost,
                          title: e.target.value,
                          slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                        })
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={newPost.slug}
                      onChange={(e) => setNewPost({ ...newPost, slug: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      This will be used in the URL: /blog/{newPost.slug || "example-slug"}
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={newPost.author}
                      onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      rows={8}
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="published">Published</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="published"
                        checked={newPost.published}
                        onChange={(e) => setNewPost({ ...newPost, published: e.target.checked })}
                      />
                      <Label htmlFor="published">Publish immediately</Label>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleAddPost}>
                    Create Post
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Search blog posts..."
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
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                      <div>
                        <div className="font-medium">{post.title}</div>
                        <div className="text-sm text-muted-foreground truncate max-w-[300px]">{post.excerpt}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    {post.createdAt.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        post.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
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
                        <Link href={`/blog/${post.slug}`} target="_blank">
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
                                setEditingPost(post)
                              }}
                            >
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Edit Blog Post</DialogTitle>
                              <DialogDescription>Make changes to the blog post.</DialogDescription>
                            </DialogHeader>
                            {editingPost && (
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-title">Title</Label>
                                  <Input
                                    id="edit-title"
                                    value={editingPost.title}
                                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-slug">Slug</Label>
                                  <Input
                                    id="edit-slug"
                                    value={editingPost.slug}
                                    onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-author">Author</Label>
                                  <Input
                                    id="edit-author"
                                    value={editingPost.author}
                                    onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-excerpt">Excerpt</Label>
                                  <Textarea
                                    id="edit-excerpt"
                                    value={editingPost.excerpt}
                                    onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-content">Content</Label>
                                  <Textarea
                                    id="edit-content"
                                    rows={8}
                                    value={editingPost.content}
                                    onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-published">Published</Label>
                                  <div className="flex items-center space-x-2">
                                    <input
                                      type="checkbox"
                                      id="edit-published"
                                      checked={editingPost.published}
                                      onChange={(e) =>
                                        setEditingPost({
                                          ...editingPost,
                                          published: e.target.checked,
                                        })
                                      }
                                    />
                                    <Label htmlFor="edit-published">Published</Label>
                                  </div>
                                </div>
                              </div>
                            )}
                            <DialogFooter>
                              <Button type="submit" onClick={handleUpdatePost}>
                                Save Changes
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <DropdownMenuItem onClick={() => handleTogglePublished(post.id)}>
                          {post.published ? "Unpublish" : "Publish"}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={() => handleDeletePost(post.id)}>
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
