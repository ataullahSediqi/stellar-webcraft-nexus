
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, Calendar, Clock, Layers, Rocket, Zap } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const blogPosts = [
  {
    id: "1",
    title: "The Future of Software Development: AI and Machine Learning Integration",
    excerpt: "Explore how artificial intelligence and machine learning are transforming the software development landscape.",
    content: `
      <p>The integration of artificial intelligence (AI) and machine learning (ML) into software development processes is revolutionizing the industry in unprecedented ways. As we move further into the digital age, developers are increasingly leveraging these technologies to create more intelligent, adaptive, and efficient applications.</p>
      
      <h2>Automated Testing and Quality Assurance</h2>
      <p>One of the most immediate benefits of AI in software development is in testing and quality assurance. AI-powered testing tools can automatically generate test cases, predict where bugs might occur, and even fix certain types of code issues without human intervention. This not only speeds up the development process but also improves code quality by catching issues that might otherwise be overlooked.</p>
      
      <h2>Intelligent Code Completion</h2>
      <p>AI-based code completion tools like GitHub Copilot and TabNine are changing how developers write code. These tools analyze vast repositories of code to suggest completions and entire functions, helping developers work more efficiently and learn new programming patterns.</p>
      
      <h2>Predictive Analytics for Development Teams</h2>
      <p>Machine learning algorithms are being used to analyze development team performance and project data to predict potential bottlenecks, estimate completion times more accurately, and suggest process improvements. This helps project managers make more informed decisions and allocate resources more effectively.</p>
      
      <h2>Natural Language Processing for Requirements Analysis</h2>
      <p>NLP technologies are being applied to analyze and clarify requirements documents, helping to bridge the gap between stakeholder expectations and technical implementation. This can significantly reduce miscommunications and ensure that the final product aligns with business needs.</p>
      
      <h2>Looking Forward</h2>
      <p>As AI and ML technologies continue to evolve, we can expect even deeper integration with software development processes. From AI architects that can design entire system structures to autonomous debugging systems that can maintain and optimize running applications, the possibilities are vast and exciting.</p>
      
      <p>For companies looking to stay competitive, embracing these technologies isn't just an option—it's becoming a necessity. The future of software development is intelligent, automated, and data-driven.</p>
    `,
    category: "Technology",
    date: "May 10, 2025",
    readTime: "5 min read",
    author: {
      name: "Alex Chen",
      role: "Chief Technology Officer",
      avatar: "/placeholder.svg"
    },
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    id: "2",
    title: "Microservices vs. Monolithic Architecture: Making the Right Choice",
    excerpt: "Understanding the pros and cons of different architectural approaches for your next software project.",
    content: `
      <p>In the world of software architecture, the debate between microservices and monolithic approaches continues to challenge developers and architects. Each architecture offers distinct advantages and drawbacks that must be carefully weighed against project requirements.</p>
      
      <h2>Understanding Monolithic Architecture</h2>
      <p>A monolithic architecture encapsulates all application functionality within a single codebase and deployment unit. This traditional approach offers simplicity in development, testing, and deployment for smaller applications. However, as applications grow, monoliths can become unwieldy, difficult to maintain, and challenging to scale.</p>
      
      <h2>The Rise of Microservices</h2>
      <p>Microservices architecture breaks down an application into smaller, independent services that communicate through well-defined APIs. Each service handles a specific business capability and can be developed, deployed, and scaled independently. This approach offers greater flexibility, scalability, and resilience but introduces complexity in service coordination, data consistency, and operational overhead.</p>
      
      <h2>Key Decision Factors</h2>
      <p>When choosing between these architectures, consider:</p>
      <ul>
        <li><strong>Project Size and Complexity:</strong> Simpler applications may benefit from the straightforward nature of monoliths, while complex systems with diverse functionality often work better as microservices.</li>
        <li><strong>Team Structure:</strong> Large organizations with multiple development teams can leverage microservices to work independently, while smaller teams might be more efficient with a monolithic approach.</li>
        <li><strong>Scalability Requirements:</strong> Applications needing to scale specific functions independently are natural candidates for microservices.</li>
        <li><strong>Development Speed vs. Long-term Flexibility:</strong> Monoliths enable faster initial development, while microservices offer more flexibility for future changes.</li>
      </ul>
      
      <h2>Hybrid Approaches</h2>
      <p>Many successful organizations are adopting hybrid approaches that combine elements of both architectures. Starting with a well-structured monolith and gradually extracting microservices as needed can provide a balanced path that avoids premature complexity while enabling future scalability.</p>
      
      <h2>Conclusion</h2>
      <p>There is no one-size-fits-all solution in the microservices vs. monolithic debate. The best architecture depends on your specific business needs, team capabilities, and long-term goals. By carefully assessing these factors, you can make an informed decision that sets your project up for success.</p>
    `,
    category: "Architecture",
    date: "May 5, 2025",
    readTime: "7 min read",
    author: {
      name: "Elena Rodriguez",
      role: "Solutions Architect",
      avatar: "/placeholder.svg"
    },
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: "3",
    title: "DevOps Best Practices for Modern Software Teams",
    excerpt: "Implementing efficient DevOps practices to streamline your development pipeline and improve deployment reliability.",
    content: `
      <p>Modern software development teams are increasingly adopting DevOps methodologies to improve collaboration, increase deployment frequency, and ensure more reliable software releases. DevOps bridges the gap between development and operations, creating a culture and environment where building, testing, and releasing software can happen rapidly, frequently, and more reliably.</p>
      
      <h2>Continuous Integration and Continuous Deployment</h2>
      <p>CI/CD pipelines are the backbone of effective DevOps practices. By automating the process of code integration, testing, and deployment, teams can detect issues early and deliver value to users more quickly. Implementing a robust CI/CD pipeline involves:</p>
      <ul>
        <li>Automated build processes triggered by code commits</li>
        <li>Comprehensive automated testing (unit, integration, performance)</li>
        <li>Deployment automation with rollback capabilities</li>
        <li>Monitoring of deployment success and application health</li>
      </ul>
      
      <h2>Infrastructure as Code</h2>
      <p>Infrastructure as Code (IaC) treats infrastructure provisioning and management as a software development process. Using tools like Terraform, CloudFormation, or Ansible, teams can:</p>
      <ul>
        <li>Version control their infrastructure configurations</li>
        <li>Ensure consistent environments across development, testing, and production</li>
        <li>Rapidly scale resources up or down based on demand</li>
        <li>Automate infrastructure updates and rollbacks</li>
      </ul>
      
      <h2>Monitoring and Observability</h2>
      <p>Effective monitoring is essential for maintaining application reliability and performance. Modern DevOps practices emphasize:</p>
      <ul>
        <li>Real-time monitoring of application performance and user experience</li>
        <li>Comprehensive logging and log aggregation</li>
        <li>Alert systems for proactive issue detection</li>
        <li>Distributed tracing for complex microservices architectures</li>
      </ul>
      
      <h2>Security Integration (DevSecOps)</h2>
      <p>Security must be integrated throughout the development lifecycle, not added as an afterthought. DevSecOps practices include:</p>
      <ul>
        <li>Automated security scanning in CI/CD pipelines</li>
        <li>Dependency vulnerability checking</li>
        <li>Infrastructure security compliance as code</li>
        <li>Regular security training for all team members</li>
      </ul>
      
      <h2>Collaboration and Knowledge Sharing</h2>
      <p>Perhaps most importantly, successful DevOps implementation requires breaking down silos between teams. Foster collaboration through:</p>
      <ul>
        <li>Cross-functional teams with shared responsibilities</li>
        <li>Regular retrospectives to continuously improve processes</li>
        <li>Documentation as code, maintained alongside application code</li>
        <li>Shared dashboards and metrics visible to all stakeholders</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Implementing these DevOps best practices can transform your software delivery process, leading to faster innovation, higher quality code, and more reliable systems. The journey to DevOps maturity is continuous, with teams constantly refining their processes based on feedback and changing requirements.</p>
    `,
    category: "DevOps",
    date: "April 28, 2025",
    readTime: "6 min read",
    author: {
      name: "Michael Johnson",
      role: "DevOps Engineer",
      avatar: "/placeholder.svg"
    },
    icon: <Book className="h-6 w-6" />,
  }
];

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <article className="container py-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center">
                  <Calendar size={14} className="mr-1" /> {post.date}
                </span>
                <span className="text-sm text-muted-foreground flex items-center">
                  <Clock size={14} className="mr-1" /> {post.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden mr-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div 
                className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </AnimatedSection>
            
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-medium mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
