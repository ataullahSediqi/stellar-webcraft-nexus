
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Layers, Rocket } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Link } from "react-router-dom";

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
  }
];

export function Blog() {
  return (
    <section id="blog" className="section bg-muted/30">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">Latest Insights</h2>
          <p className="section-subtitle text-center mx-auto">
            Expert perspectives on the latest trends and innovations in software development.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post, index) => (
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
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">
              View All Articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
