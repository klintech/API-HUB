import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: "openai-gpt4-turbo",
    title: "OpenAI Releases GPT-4 Turbo with Enhanced API Features",
    excerpt: "New model offers improved performance, lower costs, and extended context window for developers.",
    category: "AI & ML",
    date: "2024-01-15",
    readTime: "3 min read",
  },
  {
    id: "stripe-payment-links",
    title: "Stripe Introduces No-Code Payment Links",
    excerpt: "Create payment pages without writing code, perfect for quick integrations and testing.",
    category: "Payments",
    date: "2024-01-12",
    readTime: "2 min read",
  },
  {
    id: "google-maps-new-features",
    title: "Google Maps API Adds Advanced Route Optimization",
    excerpt: "New routing algorithms help developers build more efficient delivery and navigation apps.",
    category: "Maps",
    date: "2024-01-10",
    readTime: "4 min read",
  },
  {
    id: "twilio-whatsapp-business",
    title: "Twilio Expands WhatsApp Business API Capabilities",
    excerpt: "Enhanced messaging features and better integration options for business communications.",
    category: "Communication",
    date: "2024-01-08",
    readTime: "3 min read",
  },
]

export default function NewsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsItems.map((item) => (
        <Link key={item.id} href={`/blog/${item.id}`}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{item.readTime}</span>
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
  )
}
