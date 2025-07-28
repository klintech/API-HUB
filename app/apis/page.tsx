"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, ExternalLink, Code, Filter } from "lucide-react"
import Link from "next/link"

const apis = [
  {
    id: "stripe-payments",
    name: "Stripe Payments API",
    description:
      "Accept payments online with a comprehensive suite of APIs and tools for handling credit cards, subscriptions, and more.",
    category: "Payment",
    rating: 4.9,
    reviews: 1250,
    pricing: "Freemium",
    documentation: "/apis/stripe-payments",
    features: ["Credit Cards", "Subscriptions", "Webhooks", "Mobile SDKs"],
    popularity: "high",
  },
  {
    id: "google-maps",
    name: "Google Maps API",
    description:
      "Add maps, geocoding, directions, and location services to your applications with Google's mapping platform.",
    category: "Maps & Location",
    rating: 4.8,
    reviews: 2100,
    pricing: "Pay-per-use",
    documentation: "/apis/google-maps",
    features: ["Maps", "Geocoding", "Directions", "Places"],
    popularity: "high",
  },
  {
    id: "openai-gpt",
    name: "OpenAI GPT API",
    description: "Integrate powerful AI language models into your applications for text generation, chat, and more.",
    category: "AI & Machine Learning",
    rating: 4.7,
    reviews: 890,
    pricing: "Pay-per-token",
    documentation: "/apis/openai-gpt",
    features: ["Text Generation", "Chat", "Embeddings", "Fine-tuning"],
    popularity: "high",
  },
  {
    id: "twilio-sms",
    name: "Twilio SMS API",
    description: "Send and receive SMS messages programmatically worldwide with reliable delivery and global reach.",
    category: "Communication",
    rating: 4.6,
    reviews: 1580,
    pricing: "Pay-per-message",
    documentation: "/apis/twilio-sms",
    features: ["SMS", "MMS", "WhatsApp", "Voice"],
    popularity: "medium",
  },
  {
    id: "aws-s3",
    name: "AWS S3 API",
    description: "Store and retrieve any amount of data from anywhere with Amazon S3 cloud storage service.",
    category: "Cloud Services",
    rating: 4.5,
    reviews: 3200,
    pricing: "Pay-per-use",
    documentation: "/apis/aws-s3",
    features: ["Object Storage", "CDN", "Backup", "Static Hosting"],
    popularity: "high",
  },
  {
    id: "sendgrid-email",
    name: "SendGrid Email API",
    description: "Send transactional and marketing emails at scale with reliable delivery and detailed analytics.",
    category: "Communication",
    rating: 4.4,
    reviews: 980,
    pricing: "Freemium",
    documentation: "/apis/sendgrid-email",
    features: ["Transactional Email", "Templates", "Analytics", "SMTP"],
    popularity: "medium",
  },
]

const categories = [
  "All Categories",
  "Payment",
  "Maps & Location",
  "AI & Machine Learning",
  "Communication",
  "Cloud Services",
  "Data & Analytics",
  "Social Media",
]

const sortOptions = [
  { value: "popularity", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "name", label: "Name (A-Z)" },
  { value: "reviews", label: "Most Reviews" },
]

export default function APIsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("popularity")
  const [filteredAPIs, setFilteredAPIs] = useState(apis)

  const handleSearch = () => {
    let filtered = apis

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (api) =>
          api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          api.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          api.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((api) => api.category === selectedCategory)
    }

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "name":
          return a.name.localeCompare(b.name)
        case "reviews":
          return b.reviews - a.reviews
        case "popularity":
        default:
          const popularityOrder = { high: 3, medium: 2, low: 1 }
          return (
            popularityOrder[b.popularity as keyof typeof popularityOrder] -
            popularityOrder[a.popularity as keyof typeof popularityOrder]
          )
      }
    })

    setFilteredAPIs(filtered)
  }

  // Update results when filters change
  useState(() => {
    handleSearch()
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">API Directory</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Discover and integrate powerful APIs into your projects. Browse our curated collection of APIs with
          comprehensive documentation and code examples.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search APIs, features, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredAPIs.length} API{filteredAPIs.length !== 1 ? "s" : ""}
          {selectedCategory !== "All Categories" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAPIs.map((api) => (
          <Card key={api.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{api.category}</Badge>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{api.rating}</span>
                  <span>({api.reviews})</span>
                </div>
              </div>
              <CardTitle className="text-lg">{api.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">{api.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {api.features.slice(0, 3).map((feature) => (
                  <Badge key={feature} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {api.features.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{api.features.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-green-600">{api.pricing}</span>
              </div>

              <div className="flex space-x-2">
                <Link href={api.documentation} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Code className="h-4 w-4 mr-1" />
                    Docs
                  </Button>
                </Link>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Try It
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAPIs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No APIs found matching your criteria.</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All Categories")
              handleSearch()
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
