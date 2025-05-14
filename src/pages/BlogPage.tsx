
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Book, Layers, Rocket, Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/AnimatedSection';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Software Development: AI and Machine Learning Integration",
    excerpt: "Explore how artificial intelligence and machine learning are transforming the software development landscape.",
    category: "Technology",
    date: "May 10, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Microservices vs. Monolithic Architecture: Making the Right Choice",
    excerpt: "Understanding the pros and cons of different architectural approaches for your next software project.",
    category: "Architecture",
    date: "May 5, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "DevOps Best Practices for Modern Software Teams",
    excerpt: "Implementing efficient DevOps practices to streamline your development pipeline and improve deployment reliability.",
    category: "DevOps",
    date: "April 28, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg",
    icon: <Book className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Securing Your Web Applications: Best Practices for 2025",
    excerpt: "Learn the latest techniques to protect your web applications from vulnerabilities and security threats.",
    category: "Security",
    date: "April 22, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Progressive Web Apps: The Future of Web Development",
    excerpt: "How PWAs are changing the way we think about web and mobile application development.",
    category: "Web Development",
    date: "April 15, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg",
    icon: <Book className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Cloud Native Development: Building for Scalability",
    excerpt: "Strategies for designing and deploying applications that leverage the full potential of cloud environments.",
    category: "Cloud Computing",
    date: "April 8, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg",
    icon: <Layers className="h-6 w-6" />,
  }
];

const categories = ["All", "Technology", "Architecture", "DevOps", "Security", "Web Development", "Cloud Computing"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
              Stay updated with the latest trends, insights, and best practices in software development.
            </p>
          </AnimatedSection>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search"
                placeholder="Search articles..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex overflow-x-auto gap-2 pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          {post.category}
                        </span>
                        <div className="p-2 rounded-full bg-primary/10">
                          {post.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {post.date} · {post.readTime}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="py-4 flex-grow">
                      <p>{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full justify-between group" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-lg text-muted-foreground">No articles found matching your search criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
