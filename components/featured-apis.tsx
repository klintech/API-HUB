import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, Code } from "lucide-react"
import Link from "next/link"

const featuredAPIs = [
  {
    id: "stripe-payments",
    name: "Stripe Payments API",
    description: "Accept payments online with a comprehensive suite of APIs and tools.",
    category: "Payment",
    rating: 4.9,
    reviews: 1250,
    pricing: "Freemium",
    documentation: "/apis/stripe-payments",
    features: ["Credit Cards", "Subscriptions", "Webhooks", "Mobile SDKs"],
  },
  {
    id: "google-maps",
    name: "Google Maps API",
    description: "Add maps, geocoding, and location services to your applications.",
    category: "Maps & Location",
    rating: 4.8,
    reviews: 2100,
    pricing: "Pay-per-use",
    documentation: "/apis/google-maps",
    features: ["Maps", "Geocoding", "Directions", "Places"],
  },
  {
    id: "openai-gpt",
    name: "OpenAI GPT API",
    description: "Integrate powerful AI language models into your applications.",
    category: "AI & Machine Learning",
    rating: 4.7,
    reviews: 890,
    pricing: "Pay-per-token",
    documentation: "/apis/openai-gpt",
    features: ["Text Generation", "Chat", "Embeddings", "Fine-tuning"],
  },
  {
    id: "twilio-sms",
    name: "Twilio SMS API",
    description: "Send and receive SMS messages programmatically worldwide.",
    category: "Communication",
    rating: 4.6,
    reviews: 1580,
    pricing: "Pay-per-message",
    documentation: "/apis/twilio-sms",
    features: ["SMS", "MMS", "WhatsApp", "Voice"],
  },
]

export default function FeaturedAPIs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredAPIs.map((api) => (
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
  )
}
