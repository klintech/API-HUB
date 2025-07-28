import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Central Hub for
          <span className="text-blue-600"> API Integration</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover, learn, and integrate APIs with comprehensive documentation, step-by-step tutorials, and real-world
          code examples. Everything you need to power your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1 w-full">
            <Input
              type="text"
              placeholder="Search for APIs, tutorials, or documentation..."
              className="w-full pl-12 pr-4 py-3 text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <Button size="lg" className="px-8">
            Search
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apis">
            <Button size="lg" variant="outline">
              Browse APIs
            </Button>
          </Link>
          <Link href="/tutorials">
            <Button size="lg" variant="outline">
              View Tutorials
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Curated APIs</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Step-by-step Tutorials</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Developers Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
