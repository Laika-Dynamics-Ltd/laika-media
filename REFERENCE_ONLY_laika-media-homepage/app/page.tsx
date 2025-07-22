import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Code, Github, Twitter, Youtube, Play, ArrowRight, Star, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">Laika Media</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#episodes" className="text-slate-300 hover:text-blue-400 transition-colors">
              Episodes
            </Link>
            <Link href="#tutorials" className="text-slate-300 hover:text-blue-400 transition-colors">
              Tutorials
            </Link>
            <Link href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
              About
            </Link>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/10">
                <Star className="w-3 h-3 mr-1" />
                Trusted by 10K+ developers
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Explore the Universe of Code
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              High-quality video tutorials and deep dives into modern AI, cloud, and software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Watch the Latest Episode
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
              >
                Browse All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Episodes</h2>
            <p className="text-slate-400 text-lg">Dive into our most recent content</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-t-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    24 min
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  Building AI Agents with Claude
                </CardTitle>
                <CardDescription className="text-slate-400 mb-4">
                  Learn how to create intelligent agents using Anthropic's Claude API for complex workflows.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    Claude
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    AI
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    Python
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-t-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    32 min
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  Next.js 15 Deep Dive
                </CardTitle>
                <CardDescription className="text-slate-400 mb-4">
                  Explore the latest features in Next.js 15 including the new App Router improvements.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    TypeScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-t-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    28 min
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  CLI Tools with Go
                </CardTitle>
                <CardDescription className="text-slate-400 mb-4">
                  Build powerful command-line interfaces using Go's robust standard library.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    Go
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    CLI
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                    DevTools
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Laika Media Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Laika Media?</h2>
            <p className="text-slate-400 text-lg">Experience the next evolution of developer education</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/30 border-slate-700 text-center p-8">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl">Expert-Led Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  In-depth tutorials from industry professionals with years of real-world experience building production
                  systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700 text-center p-8">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl">Hands-On Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Full source code and project files available for every episode. Learn by building real applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700 text-center p-8">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-xl">Community Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Join a community of developers learning together. Share projects, get feedback, and grow your network.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest tutorials, industry insights, and exclusive content delivered straight to your inbox.
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold">Laika Media</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Professional video production and media content that inspires, educates, and entertains. Join our
                community of creators and learners.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-slate-400">hello@laikamedia.com</li>
                <li className="text-slate-400">Studio Location</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Laika Media. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
