"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Clock, User, Filter } from "lucide-react"
import Image from "next/image"

const tutorials = [
  {
    id: "stripe-integration",
    title: "Building a Payment System with Stripe API",
    description:
      "Learn how to integrate Stripe payments into your React application with webhooks and subscription handling.",
    author: "Stripe Doc",
    readTime: "15 min read",
    difficulty: "Intermediate",
    language: "JavaScript",
    category: "Payment",
    image: "/stripe.png",
    tags: ["React", "Stripe", "Payments"],
    publishDate: "2024-01-15",
    url: "https://stripe.com/docs/payments/quickstart",
  },
  {
    id: "google-maps-react",
    title: "Adding Interactive Maps with Google Maps API",
    description:
      "Step-by-step guide to implementing Google Maps in React with custom markers and location search.",
    author: "Mayur Upadhyay",
    readTime: "12 min read",
    difficulty: "Beginner",
    language: "JavaScript",
    category: "Maps",
    image: "/map.avif",
    tags: ["React", "Google Maps", "Location"],
    publishDate: "2024-Oct-11",
    url: "https://wpwebinfotech.com/blog/integrate-google-maps-in-react/?wp=google",
  },
  {
    id: "openai-chatbot",
    title: "Creating a Chatbot with OpenAI GPT API",
    description:
      "Build an intelligent chatbot using OpenAI's GPT API with conversation memory and context handling.",
    author: "GarryPas",
    readTime: "4 min read",
    difficulty: "Advanced",
    language: "Python",
    category: "AI",
    image: "/openai.avif",
    tags: ["Python", "OpenAI", "AI", "Chatbot"],
    publishDate: "2024-01-10",
    url: "https://medium.com/@garry.passarella/building-a-chatgpt-chatbot-with-openai-4eab7b4c1041",
  },
  {
    id: "twilio-notifications",
    title: "SMS Notifications with Twilio API",
    description:
      "Implement SMS notifications in your Node.js application using Twilio's messaging API.",
    author: "Emma Davis",
    readTime: "10 min read",
    difficulty: "Beginner",
    language: "Node.js",
    category: "Communication",
    image: "/twilio.png",
    tags: ["Node.js", "Twilio", "SMS"],
    publishDate: "DOC",
    url: "https://www.twilio.com/docs/usage/api",
  },
  {
    id: "aws-s3-upload",
    title: "File Upload to AWS S3 with Node.js",
    description:
      "Complete guide to uploading files to Amazon S3 with proper security and error handling.",
    author: "David Kim",
    readTime: "18 min read",
    difficulty: "Intermediate",
    language: "Node.js",
    category: "Cloud",
    image: "/AWS.jpeg",
    tags: ["Node.js", "AWS", "S3", "File Upload"],
    publishDate: "2024-01-05",
    url: "https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-photo-album.html", // Replace with blog article if needed
  },
  {
    id: "rest-api-design",
    title: "RESTful API Design Best Practices",
    description:
      "Learn the principles of designing clean, scalable REST APIs with proper HTTP methods and status codes.",
    author: "Jean-Marc Möckel",
    readTime: "25 min read",
    difficulty: "Intermediate",
    language: "General",
    category: "API Design",
    image: "/api.jpg",
    tags: ["REST", "API Design", "HTTP"],
    publishDate: "2022-May-04",
    url: "https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/",
  },
]

const categories = [
  "All Categories",
  "Payment",
  "Maps",
  "AI",
  "Communication",
  "Cloud",
  "API Design",
]
const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced"]
const languages = ["All Languages", "JavaScript", "Python", "Node.js", "General"]

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
}

export default function TutorialsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels")
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages")
  const [filteredTutorials, setFilteredTutorials] = useState(tutorials)

  const handleSearch = () => {
    let filtered = tutorials

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutorial.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      )
    }

    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        (tutorial) => tutorial.category === selectedCategory,
      )
    }

    if (selectedDifficulty !== "All Levels") {
      filtered = filtered.filter(
        (tutorial) => tutorial.difficulty === selectedDifficulty,
      )
    }

    if (selectedLanguage !== "All Languages") {
      filtered = filtered.filter(
        (tutorial) => tutorial.language === selectedLanguage,
      )
    }

    setFilteredTutorials(filtered)
  }

  useState(() => {
    handleSearch()
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tutorials</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Step-by-step guides to help you integrate APIs into your projects.
          Learn from practical examples with code snippets and best practices.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search tutorials, topics, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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

            <Select
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
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
          Showing {filteredTutorials.length} tutorial
          {filteredTutorials.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <a
            key={tutorial.id}
            href={tutorial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="relative">
                <Image
                  src={tutorial.image || "/placeholder.svg"}
                  alt={tutorial.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge
                  className={`absolute top-3 right-3 ${
                    difficultyColors[
                      tutorial.difficulty as keyof typeof difficultyColors
                    ]
                  }`}
                >
                  {tutorial.difficulty}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2">
                  {tutorial.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {tutorial.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {tutorial.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{tutorial.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tutorial.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            No tutorials found matching your criteria.
          </p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All Categories")
              setSelectedDifficulty("All Levels")
              setSelectedLanguage("All Languages")
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
