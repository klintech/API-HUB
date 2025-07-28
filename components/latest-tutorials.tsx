import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const tutorials = [
  {
    id: "stripe-integration",
    title: "Building a Payment System with Stripe API",
    description:
      "Learn how to integrate Stripe payments into your React application with webhooks and subscription handling.",
    author: "Sarah Chen",
    readTime: "15 min read",
    difficulty: "Intermediate",
    language: "JavaScript",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Stripe", "Payments"],
  },
  {
    id: "google-maps-react",
    title: "Adding Interactive Maps with Google Maps API",
    description: "Step-by-step guide to implementing Google Maps in React with custom markers and location search.",
    author: "Mike Johnson",
    readTime: "12 min read",
    difficulty: "Beginner",
    language: "JavaScript",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Google Maps", "Location"],
  },
  {
    id: "openai-chatbot",
    title: "Creating a Chatbot with OpenAI GPT API",
    description: "Build an intelligent chatbot using OpenAI's GPT API with conversation memory and context handling.",
    author: "Alex Rodriguez",
    readTime: "20 min read",
    difficulty: "Advanced",
    language: "Python",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "OpenAI", "AI", "Chatbot"],
  },
  {
    id: "twilio-notifications",
    title: "SMS Notifications with Twilio API",
    description: "Implement SMS notifications in your Node.js application using Twilio's messaging API.",
    author: "Emma Davis",
    readTime: "10 min read",
    difficulty: "Beginner",
    language: "Node.js",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Node.js", "Twilio", "SMS"],
  },
]

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
}

export default function LatestTutorials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tutorials.map((tutorial) => (
        <Link key={tutorial.id} href={`/tutorials/${tutorial.id}`}>
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
                className={`absolute top-3 right-3 ${difficultyColors[tutorial.difficulty as keyof typeof difficultyColors]}`}
              >
                {tutorial.difficulty}
              </Badge>
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg line-clamp-2">{tutorial.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{tutorial.description}</p>

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
        </Link>
      ))}
    </div>
  )
}
