
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

type Category = 'all' | 'web' | 'mobile' | 'saas' | 'enterprise';

interface PortfolioItem {
  title: string;
  category: Exclude<Category, 'all'>;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22300%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%234A89DC%22%2F%3E%3C%2Fsvg%3E',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Food Delivery App',
    category: 'mobile',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22300%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%239B59B6%22%2F%3E%3C%2Fsvg%3E',
    tags: ['React Native', 'Firebase', 'Google Maps API']
  },
  {
    title: 'Project Management Tool',
    category: 'saas',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22300%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%2319B5FE%22%2F%3E%3C%2Fsvg%3E',
    tags: ['Vue.js', 'Express', 'MongoDB']
  },
  {
    title: 'Healthcare System',
    category: 'enterprise',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22300%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%234ECDC4%22%2F%3E%3C%2Fsvg%3E',
    tags: ['Angular', 'C#', '.NET Core', 'SQL Server']
  },
  {
    title: 'Real Estate Portal',
    category: 'web',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22300%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%233498DB%22%2F%3E%3C%2Fsvg%3E',
    tags: ['Next.js', 'GraphQL', 'AWS']
  },
  {
    title: 'Ride Sharing App',
    category: 'mobile',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22400%22%20height%3D%22300%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%236BB9F0%22%2F%3E%3C%2Fsvg%3E',
    tags: ['Flutter', 'Firebase', 'Google Maps API']
  }
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Applications' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'saas', label: 'SaaS Products' },
  { value: 'enterprise', label: 'Enterprise Solutions' }
];

export function Portfolio() {
  const [filter, setFilter] = useState<Category>('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="portfolio" className="section bg-secondary">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Explore our latest projects and see how we've helped businesses
            across various industries achieve their digital transformation goals.
          </p>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? 'default' : 'outline'}
              onClick={() => setFilter(category.value)}
              className="rounded-full"
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </AnimatedSection>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-all duration-300 aspect-[4/3]"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/20 backdrop-blur-sm text-white text-xs rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    className="mt-4 gap-1 w-fit"
                  >
                    View Project <ArrowUpRight size={14} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
