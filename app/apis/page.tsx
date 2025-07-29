"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, ExternalLink, Code, Filter, Globe, Database, Zap, MessageSquare, Image, Shield, BarChart3, Music } from "lucide-react"

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
    documentation: "https://stripe.com/docs/api",
    tryItUrl: "https://dashboard.stripe.com/register",
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
    documentation: "https://developers.google.com/maps/documentation",
    tryItUrl: "https://console.cloud.google.com/apis/library/maps-backend.googleapis.com",
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
    documentation: "https://platform.openai.com/docs",
    tryItUrl: "https://platform.openai.com/playground",
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
    documentation: "https://www.twilio.com/docs/sms",
    tryItUrl: "https://console.twilio.com/",
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
    documentation: "https://docs.aws.amazon.com/s3/",
    tryItUrl: "https://aws.amazon.com/console/",
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
    documentation: "https://docs.sendgrid.com/",
    tryItUrl: "https://app.sendgrid.com/",
    features: ["Transactional Email", "Templates", "Analytics", "SMTP"],
    popularity: "medium",
  },
  {
    id: "firebase-firestore",
    name: "Firebase Firestore API",
    description: "NoSQL document database built for automatic scaling, high performance, and ease of application development.",
    category: "Database",
    rating: 4.6,
    reviews: 1840,
    pricing: "Freemium",
    documentation: "https://firebase.google.com/docs/firestore",
    tryItUrl: "https://console.firebase.google.com/",
    features: ["Real-time Database", "Offline Support", "Scalable", "Security Rules"],
    popularity: "high",
  },
  {
    id: "github-api",
    name: "GitHub REST API",
    description: "Integrate with GitHub repositories, issues, pull requests, and user data for powerful development workflows.",
    category: "Developer Tools",
    rating: 4.5,
    reviews: 2850,
    pricing: "Free",
    documentation: "https://docs.github.com/en/rest",
    tryItUrl: "https://github.com/settings/tokens",
    features: ["Repositories", "Issues", "Pull Requests", "Actions"],
    popularity: "high",
  },
  {
    id: "unsplash-api",
    name: "Unsplash API",
    description: "Access millions of high-quality photos from Unsplash for your applications with powerful search capabilities.",
    category: "Media & Images",
    rating: 4.7,
    reviews: 650,
    pricing: "Free",
    documentation: "https://unsplash.com/documentation",
    tryItUrl: "https://unsplash.com/developers",
    features: ["Photo Search", "Collections", "User Data", "Statistics"],
    popularity: "medium",
  },
  {
    id: "auth0-api",
    name: "Auth0 Authentication API",
    description: "Universal authentication & authorization platform for web, mobile and legacy applications.",
    category: "Authentication",
    rating: 4.6,
    reviews: 1320,
    pricing: "Freemium",
    documentation: "https://auth0.com/docs/api",
    tryItUrl: "https://manage.auth0.com/",
    features: ["SSO", "Multi-factor Auth", "Social Login", "User Management"],
    popularity: "high",
  },
  {
    id: "slack-api",
    name: "Slack Web API",
    description: "Build custom Slack apps, bots, and integrations to enhance team communication and productivity.",
    category: "Communication",
    rating: 4.4,
    reviews: 1150,
    pricing: "Free",
    documentation: "https://api.slack.com/web",
    tryItUrl: "https://api.slack.com/apps",
    features: ["Messaging", "Channels", "Bots", "Workflows"],
    popularity: "medium",
  },
  {
    id: "weather-api",
    name: "OpenWeatherMap API",
    description: "Get current weather, forecasts, and historical weather data for any location worldwide.",
    category: "Weather & Environment",
    rating: 4.3,
    reviews: 890,
    pricing: "Freemium",
    documentation: "https://openweathermap.org/api",
    tryItUrl: "https://openweathermap.org/appid",
    features: ["Current Weather", "Forecasts", "Historical Data", "Weather Maps"],
    popularity: "medium",
  },
  {
    id: "mongodb-atlas",
    name: "MongoDB Atlas API",
    description: "Manage MongoDB Atlas clusters, databases, and collections programmatically with comprehensive API access.",
    category: "Database",
    rating: 4.5,
    reviews: 1650,
    pricing: "Freemium",
    documentation: "https://www.mongodb.com/docs/atlas/api/",
    tryItUrl: "https://cloud.mongodb.com/",
    features: ["Cluster Management", "Database Operations", "Monitoring", "Backup"],
    popularity: "high",
  },
  {
    id: "cloudinary-api",
    name: "Cloudinary API",
    description: "Cloud-based image and video management with automatic optimization, transformation, and delivery.",
    category: "Media & Images",
    rating: 4.8,
    reviews: 720,
    pricing: "Freemium",
    documentation: "https://cloudinary.com/documentation",
    tryItUrl: "https://cloudinary.com/console",
    features: ["Image Optimization", "Video Processing", "AI Transformation", "CDN"],
    popularity: "medium",
  },
  {
    id: "spotify-api",
    name: "Spotify Web API",
    description: "Access Spotify's music catalog, user playlists, and playback controls to build music applications.",
    category: "Entertainment",
    rating: 4.6,
    reviews: 1280,
    pricing: "Free",
    documentation: "https://developer.spotify.com/documentation/web-api/",
    tryItUrl: "https://developer.spotify.com/dashboard",
    features: ["Music Catalog", "Playlists", "User Data", "Playback Control"],
    popularity: "medium",
  },
  {
    id: "vercel-api",
    name: "Vercel API",
    description: "Deploy and manage your applications on Vercel's edge network with programmatic control.",
    category: "Cloud Services",
    rating: 4.7,
    reviews: 940,
    pricing: "Freemium",
    documentation: "https://vercel.com/docs/rest-api",
    tryItUrl: "https://vercel.com/dashboard",
    features: ["Deployments", "Domains", "Analytics", "Edge Functions"],
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
  "Database",
  "Developer Tools",
  "Media & Images",
  "Authentication",
  "Weather & Environment",
  "Entertainment",
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

  const handleDocumentationClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleTryItClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">API Directory</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Discover and integrate powerful APIs into your projects. Browse our curated collection of {apis.length} APIs with
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 bg-transparent"
                  onClick={() => handleDocumentationClick(api.documentation)}
                >
                  <Code className="h-4 w-4 mr-1" />
                  Docs
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleTryItClick(api.tryItUrl)}
                >
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