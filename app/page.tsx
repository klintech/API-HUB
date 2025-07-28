import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedAPIs from "@/components/featured-apis"
import CategoryGrid from "@/components/category-grid"
import LatestTutorials from "@/components/latest-tutorials"
import NewsSection from "@/components/news-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore API Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover APIs organized by functionality to find exactly what you need for your project
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured APIs</h2>
              <p className="text-lg text-gray-600">Hand-picked APIs that developers love</p>
            </div>
            <Link href="/apis">
              <Button variant="outline">View All APIs</Button>
            </Link>
          </div>
          <Suspense fallback={<div>Loading featured APIs...</div>}>
            <FeaturedAPIs />
          </Suspense>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Tutorials</h2>
              <p className="text-lg text-gray-600">Step-by-step guides to get you started</p>
            </div>
            <Link href="/tutorials">
              <Button variant="outline">View All Tutorials</Button>
            </Link>
          </div>
          <Suspense fallback={<div>Loading tutorials...</div>}>
            <LatestTutorials />
          </Suspense>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
              <p className="text-lg text-gray-600">Stay updated with API changes and new releases</p>
            </div>
            <Link href="/blog">
              <Button variant="outline">View All Posts</Button>
            </Link>
          </div>
          <Suspense fallback={<div>Loading news...</div>}>
            <NewsSection />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
