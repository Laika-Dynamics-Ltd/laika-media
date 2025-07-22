import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Code, Github, Twitter, Youtube, Play, ArrowRight, Star, Zap, Heart } from "lucide-react"
import Link from "next/link"
import { episodes } from "@/lib/episodes"

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
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        <div className="gradient-background">
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>
            <div className="glow"></div>
            <div className="grid-overlay"></div>
            <div className="noise-overlay"></div>
        </div>

        <div className="content-container">
            <h1>Explore the Universe of Code</h1>
            <p>High-quality video tutorials and deep dives into modern AI, cloud, and software development.</p>
            <button className="btn">Explore More</button>
        </div>
      </section>

      {/* Featured Episodes Section */}
      <section id="episodes" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Episodes</h2>
            <p className="text-slate-400 text-lg">Dive into our most recent content</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <Card key={episode.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-t-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                      {episode.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors">
                    {episode.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 mb-4">
                    {episode.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {episode.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Laika Media Section */}
      <section id="about" className="py-20">
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
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative">
        <div className="absolute inset-0" style={{backgroundImage:"url(/grain.png)",backgroundSize:"100px 100px",backgroundRepeat:"repeat",backgroundPosition:"left top",backgroundBlendMode:"overlay",mixBlendMode:"overlay",opacity:0.8}}></div>
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
                  <Link href="#tutorials" className="text-slate-400 hover:text-blue-400 transition-colors">
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
