
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/layout/SEOHead';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { toast } from 'sonner';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app this would come from a CMS or API
  const blogPost = {
    title: "10 Essential Jira Automation Rules Every Team Should Use",
    excerpt: "Discover powerful automation rules that can save your team hours of manual work and improve project efficiency.",
    content: `
      <h2>Introduction</h2>
      <p>Jira automation is one of the most powerful features available to teams looking to streamline their workflows and reduce manual overhead. With the right automation rules, you can save countless hours of repetitive tasks and ensure consistency across your projects.</p>
      
      <h2>1. Auto-assign Issues Based on Components</h2>
      <p>One of the most basic but effective automation rules is to automatically assign issues to team members based on the component selected. This ensures that issues are immediately routed to the right person without manual intervention.</p>
      
      <h3>How to set it up:</h3>
      <ol>
        <li>Go to Project Settings > Automation</li>
        <li>Create a new rule with "Issue created" trigger</li>
        <li>Add condition: "Field value matches" for Component</li>
        <li>Add action: "Assign issue" to specific user</li>
      </ol>
      
      <h2>2. Automatically Transition Issues Based on PR Status</h2>
      <p>When integrated with development tools like Bitbucket or GitHub, you can automatically move issues through your workflow based on pull request status.</p>
      
      <h2>3. Send Slack Notifications for High Priority Issues</h2>
      <p>Keep your team informed about critical issues by automatically sending Slack notifications when high-priority issues are created or updated.</p>
      
      <h2>4. Auto-close Issues After PR Merge</h2>
      <p>Streamline your development workflow by automatically closing issues when the associated pull request is merged to the main branch.</p>
      
      <h2>5. Create Subtasks Based on Issue Type</h2>
      <p>For certain issue types like "Epic" or "Feature", automatically create standard subtasks to ensure nothing is missed in your development process.</p>
      
      <h2>Conclusion</h2>
      <p>These automation rules represent just the beginning of what's possible with Jira automation. Start with these basics and gradually build more complex rules as your team becomes comfortable with the automation features.</p>
      
      <p>Need help implementing these automation rules in your Jira instance? <a href="/contact">Contact me for personalized Jira consulting services</a>.</p>
    `,
    category: "Automation",
    author: "AtlassianPro",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Jira", "Automation", "Productivity", "Workflows"]
  };

  const shareToLinkedIn = () => {
    const url = window.location.href;
    const text = `Check out this great article: ${blogPost.title}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
    window.open(linkedInUrl, '_blank');
  };

  const shareToTwitter = () => {
    const url = window.location.href;
    const text = `${blogPost.title} ${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  return (
    <>
      <SEOHead 
        title={blogPost.title}
        description={blogPost.excerpt}
        keywords={blogPost.tags.join(', ')}
        ogType="article"
        canonicalUrl={window.location.href}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <article className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Back Button */}
            <Button variant="ghost" className="mb-6" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <Badge>{blogPost.category}</Badge>
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {blogPost.excerpt}
              </p>

              {/* Social Share Buttons */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Share:</span>
                <Button variant="outline" size="sm" onClick={shareToLinkedIn}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" onClick={shareToTwitter}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </Button>
                <Button variant="outline" size="sm" onClick={copyLink}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About AtlassianPro</h3>
                    <p className="text-gray-600 mb-3">
                      Certified Atlassian consultant with 4+ years as Community Leader. 
                      Specializing in Jira implementations, cloud migrations, and workflow optimization 
                      for teams of all sizes.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Need Help Implementing These Automation Rules?
                </h3>
                <p className="text-blue-100 mb-6">
                  Get personalized Jira consulting to set up automation rules that work for your specific workflow.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">
                    Book Free Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
