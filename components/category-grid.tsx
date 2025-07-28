import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Database,
  Map,
  Share2,
  CreditCard,
  Cloud,
  MessageSquare,
  ImageIcon,
  Music,
  ShoppingCart,
  Zap,
} from "lucide-react"

const categories = [
  {
    name: "Data & Analytics",
    description: "APIs for data processing, analytics, and insights",
    icon: Database,
    count: 45,
    color: "text-blue-600 bg-blue-100",
  },
  {
    name: "Maps & Location",
    description: "Geolocation, mapping, and navigation services",
    icon: Map,
    count: 28,
    color: "text-green-600 bg-green-100",
  },
  {
    name: "Social Media",
    description: "Social platforms and communication APIs",
    icon: Share2,
    count: 32,
    color: "text-purple-600 bg-purple-100",
  },
  {
    name: "Payment",
    description: "Payment processing and financial services",
    icon: CreditCard,
    count: 18,
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    name: "Cloud Services",
    description: "Cloud computing and infrastructure APIs",
    icon: Cloud,
    count: 52,
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    name: "Communication",
    description: "Messaging, email, and notification services",
    icon: MessageSquare,
    count: 24,
    color: "text-red-600 bg-red-100",
  },
  {
    name: "Media & Images",
    description: "Image processing, video, and media APIs",
    icon: ImageIcon,
    count: 36,
    color: "text-pink-600 bg-pink-100",
  },
  {
    name: "Music & Audio",
    description: "Audio processing and music streaming APIs",
    icon: Music,
    count: 15,
    color: "text-orange-600 bg-orange-100",
  },
  {
    name: "E-commerce",
    description: "Shopping, inventory, and retail APIs",
    icon: ShoppingCart,
    count: 29,
    color: "text-teal-600 bg-teal-100",
  },
  {
    name: "Utilities",
    description: "General purpose and utility APIs",
    icon: Zap,
    count: 41,
    color: "text-gray-600 bg-gray-100",
  },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {categories.map((category) => {
        const IconComponent = category.icon
        return (
          <Link key={category.name} href={`/apis?category=${encodeURIComponent(category.name.toLowerCase())}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color} mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="text-sm font-medium text-blue-600">{category.count} APIs</div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
