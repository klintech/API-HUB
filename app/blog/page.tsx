import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: "openai-gpt4-turbo",
    title: "OpenAI Releases GPT-4 Turbo with Enhanced API Features",
    excerpt:
      "New model offers improved performance, lower costs, and extended context window for developers building AI applications.",
    content:
      "OpenAI has announced the release of GPT-4 Turbo, bringing significant improvements to their API offerings...",
    category: "AI & ML",
    author: "Tech Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "stripe-payment-links",
    title: "Stripe Introduces No-Code Payment Links",
    excerpt: "Create payment pages without writing code, perfect for quick integrations and testing payment flows.",
    content: "Stripe has launched a new feature that allows developers and businesses to create payment links...",
    category: "Payments",
    author: "Sarah Chen",
    date: "2024-01-12",
    readTime: "3 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: "google-maps-new-features",
    title: "Google Maps API Adds Advanced Route Optimization",
    excerpt: "New routing algorithms help developers build more efficient delivery and navigation applications.",
    content: "Google has enhanced their Maps API with new route optimization capabilities...",
    category: "Maps",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: "api-security-best-practices",
    title: "API Security Best Practices for 2024",
    excerpt: "Essential security measures every developer should implement when building and consuming APIs.",
    content: "As APIs become increasingly central to modern applications, security considerations...",
    category: "Security",
    author: "Alex Rodriguez",
    date: "2024-01-08",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "twilio-whatsapp-business",
    title: "Twilio Expands WhatsApp Business API Capabilities",
    excerpt: "Enhanced messaging features and better integration options for business communications.",
    content: "Twilio has announced significant updates to their WhatsApp Business API...",
    category: "Communication",
    author: "Emma Davis",
    date: "2024-01-05",
    readTime: "3 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: "rest-vs-graphql-2024",
    title: "REST vs GraphQL: Choosing the Right API Architecture in 2024",
    excerpt: "A comprehensive comparison to help you decide between REST and GraphQL for your next project.",
    content: "The debate between REST and GraphQL continues to evolve as both technologies mature...",
    category: "API Design",
    author: "David Kim",
    date: "2024-01-03",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
]

const featuredPosts = blogPosts.filter((post) => post.featured)
const regularPosts = blogPosts.filter((post) => !post.featured)

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">API Hub Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Stay updated with the latest API news, updates, and insights from the developer community. Learn about new
          features, best practices, and industry trends.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.slice(0, 2).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">Featured</Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
