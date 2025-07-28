import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ExternalLink, Code, Copy, ThumbsUp, ThumbsDown } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
const apiData = {
  "stripe-payments": {
    name: "Stripe Payments API",
    description:
      "Accept payments online with a comprehensive suite of APIs and tools for handling credit cards, subscriptions, and more.",
    category: "Payment",
    rating: 4.9,
    reviews: 1250,
    pricing: "Freemium",
    website: "https://stripe.com",
    documentation: "https://stripe.com/docs",
    features: ["Credit Cards", "Subscriptions", "Webhooks", "Mobile SDKs"],
    endpoints: [
      {
        method: "POST",
        path: "/v1/payment_intents",
        description: "Create a payment intent",
        parameters: [
          { name: "amount", type: "integer", required: true, description: "Amount in cents" },
          { name: "currency", type: "string", required: true, description: "Three-letter ISO currency code" },
          { name: "customer", type: "string", required: false, description: "Customer ID" },
        ],
      },
      {
        method: "GET",
        path: "/v1/payment_intents/{id}",
        description: "Retrieve a payment intent",
        parameters: [{ name: "id", type: "string", required: true, description: "Payment intent ID" }],
      },
    ],
    codeExamples: {
      javascript: `// Create a payment intent
const stripe = require('stripe')('sk_test_...');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  customer: 'cus_...',
});

console.log(paymentIntent.client_secret);`,
      python: `import stripe
stripe.api_key = "sk_test_..."

# Create a payment intent
payment_intent = stripe.PaymentIntent.create(
    amount=2000,
    currency='usd',
    customer='cus_...',
)

print(payment_intent.client_secret)`,
      curl: `curl https://api.stripe.com/v1/payment_intents \\
  -u sk_test_...: \\
  -d amount=2000 \\
  -d currency=usd \\
  -d customer=cus_...`,
    },
    authentication: {
      type: "API Key",
      description: "Use your secret API key in the Authorization header",
      example: "Authorization: Bearer sk_test_...",
    },
    reviews: [
      {
        id: 1,
        author: "John Doe",
        rating: 5,
        comment: "Excellent API with great documentation. Easy to integrate and very reliable.",
        date: "2024-01-15",
        helpful: 24,
      },
      {
        id: 2,
        author: "Jane Smith",
        rating: 4,
        comment: "Good API but pricing can get expensive for high volume. Great for startups.",
        date: "2024-01-10",
        helpful: 18,
      },
    ],
  },
}

export default function APIDetailPage({ params }: { params: { id: string } }) {
  const api = apiData[params.id as keyof typeof apiData]

  if (!api) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold text-gray-900">{api.name}</h1>
              <Badge variant="secondary">{api.category}</Badge>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl">{api.description}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Website
            </Button>
            <Button>
              <Code className="h-4 w-4 mr-2" />
              Get Started
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold">{api.rating}</span>
              </div>
              <p className="text-sm text-gray-600">{api.reviews} reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{api.pricing}</div>
              <p className="text-sm text-gray-600">Pricing Model</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{api.endpoints.length}</div>
              <p className="text-sm text-gray-600">Endpoints</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{api.features.length}</div>
              <p className="text-sm text-gray-600">Features</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="documentation" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="examples">Code Examples</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="documentation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {api.endpoints.map((endpoint, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant={endpoint.method === "GET" ? "default" : "destructive"}>{endpoint.method}</Badge>
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Parameters</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Name</th>
                            <th className="text-left py-2">Type</th>
                            <th className="text-left py-2">Required</th>
                            <th className="text-left py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.parameters.map((param, paramIndex) => (
                            <tr key={paramIndex} className="border-b">
                              <td className="py-2 font-mono">{param.name}</td>
                              <td className="py-2">{param.type}</td>
                              <td className="py-2">
                                <Badge variant={param.required ? "destructive" : "secondary"}>
                                  {param.required ? "Required" : "Optional"}
                                </Badge>
                              </td>
                              <td className="py-2">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript">
                <TabsList>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>

                {Object.entries(api.codeExamples).map(([language, code]) => (
                  <TabsContent key={language} value={language}>
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                      <Button size="sm" variant="outline" className="absolute top-2 right-2 bg-transparent">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Authentication Type</h4>
                  <Badge>{api.authentication.type}</Badge>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-600">{api.authentication.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example</h4>
                  <div className="relative">
                    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                      <code>{api.authentication.example}</code>
                    </pre>
                    <Button size="sm" variant="outline" className="absolute top-2 right-2 bg-transparent">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {api.reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{review.author}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{review.comment}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-green-600">
                        <ThumbsUp className="h-4 w-4" />
                        Helpful ({review.helpful})
                      </button>
                      <button className="flex items-center gap-1 hover:text-red-600">
                        <ThumbsDown className="h-4 w-4" />
                        Not helpful
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Rating Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{
                              width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`,
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-500 w-8">
                          {stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
