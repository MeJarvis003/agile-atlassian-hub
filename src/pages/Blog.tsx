
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/layout/SEOHead';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Jira Tips', 'Atlassian Cloud', 'Automation', 'DevOps', 'ITSM', 'Agile'];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Jira Automation Rules Every Team Should Use",
      excerpt: "Discover powerful automation rules that can save your team hours of manual work and improve project efficiency.",
      category: "Automation",
      author: "AtlassianPro",
      date: "2024-01-15",
      readTime: "5 min read",
      slug: "jira-automation-rules-every-team-should-use",
      featured: true,
      linkedinAuthor: null
    },
    {
      id: 2,
      title: "Atlassian Cloud vs Server: Complete Migration Guide",
      excerpt: "Everything you need to know about migrating from Atlassian Server to Cloud, including timelines, costs, and best practices.",
      category: "Atlassian Cloud",
      author: "AtlassianPro", 
      date: "2024-01-10",
      readTime: "8 min read",
      slug: "atlassian-cloud-vs-server-migration-guide",
      featured: true,
      linkedinAuthor: null
    },
    {
      id: 3,
      title: "DevOps Best Practices with Jira and Bitbucket Integration",
      excerpt: "Learn how to create seamless CI/CD workflows by integrating Jira with Bitbucket and other DevOps tools.",
      category: "DevOps",
      author: "Sarah Chen",
      date: "2024-01-08",
      readTime: "6 min read", 
      slug: "devops-best-practices-jira-bitbucket",
      featured: false,
      linkedinAuthor: "Sarah Chen - DevOps Lead at TechCorp"
    },
    {
      id: 4,
      title: "ITSM Excellence: Jira Service Management Advanced Features",
      excerpt: "Explore advanced JSM features including asset management, change management, and custom service portals.",
      category: "ITSM",
      author: "Michael Rodriguez",
      date: "2024-01-05",
      readTime: "7 min read",
      slug: "itsm-excellence-jira-service-management-advanced",
      featured: false,
      linkedinAuthor: "Michael Rodriguez - ITSM Consultant"
    },
    {
      id: 5,
      title: "Scaling Agile with Atlassian: Enterprise Success Stories",
      excerpt: "Real-world case studies of how enterprise teams successfully scaled agile practices using Atlassian tools.",
      category: "Agile",
      author: "AtlassianPro",
      date: "2024-01-03",
      readTime: "10 min read",
      slug: "scaling-agile-atlassian-enterprise-success-stories",
      featured: false,
      linkedinAuthor: null
    },
    {
      id: 6,
      title: "Confluence Templates: Streamlining Documentation Workflows",
      excerpt: "Create consistent, professional documentation with these proven Confluence templates and best practices.",
      category: "Jira Tips",
      author: "Emma Thompson",
      date: "2024-01-01",
      readTime: "4 min read",
      slug: "confluence-templates-streamlining-documentation",
      featured: false,
      linkedinAuthor: "Emma Thompson - Technical Writer"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEOHead 
        title="Atlassian Blog - Jira Tips, DevOps, and ITSM Best Practices"
        description="Expert insights on Jira automation, Atlassian Cloud migration, DevOps integration, ITSM best practices, and agile transformation strategies."
        keywords="Jira blog, Atlassian tips, DevOps with Jira, ITSM best practices, agile transformation, Jira automation, Confluence tips"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Atlassian Insights 
                <span className="text-gradient block">& Best Practices</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Expert tips, automation strategies, and real-world insights to help you 
                maximize your Atlassian investment and transform your workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary to-accent"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <Calendar className="w-4 h-4 ml-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              <span className="text-gray-500">{filteredPosts.length} articles found</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg mb-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        {post.linkedinAuthor && (
                          <div className="text-xs text-blue-600 mt-1">
                            Originally by {post.linkedinAuthor}
                          </div>
                        )}
                        <div className="flex items-center space-x-1 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Read
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest Atlassian tips, automation strategies, and industry insights 
              delivered directly to your inbox.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
