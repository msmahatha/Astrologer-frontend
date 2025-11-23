// BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// Demo API Service (same as above)
const createDemoAPI = () => {
  const generateRandomBlog = (id) => {
    // Same generation function as above
    const titles = ["🌞 Why Your Sun Sign Isn't Enough...", /* ... other titles */];
    const excerpts = ["Discover the hidden truths...", /* ... other excerpts */];
    const authors = ["Master Astrologer", /* ... other authors */];
    const categories = ['education', 'predictions', 'moon', 'spirituality', 'relationships'];
    const images = [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546564472-90b0b0632c1c?w=800&h=400&fit=crop"
    ];

    const title = titles[id % titles.length];
    const excerpt = excerpts[id % excerpts.length];
    const author = authors[id % authors.length];
    const category = categories[id % categories.length];
    const image = images[id % images.length];
    const readTime = `${Math.floor(Math.random() * 8) + 3} min read`;

    const content = `
      <h2>${title}</h2>
      <p><em>${excerpt}</em></p>
      <p>This comprehensive guide explores the depths of astrological wisdom and its practical applications in daily life. Through careful analysis of celestial patterns and planetary movements, we uncover insights that can transform your understanding of personal destiny.</p>
      
      <h3>Key Astrological Concepts</h3>
      <p>The foundation of Vedic astrology rests upon several core principles that work together to create a complete picture of an individual's life path and potential.</p>
      
      <h4>Planetary Influences</h4>
      <p>Each planet in our solar system carries specific energies that influence different aspects of our lives. Understanding their positions and relationships is crucial for accurate astrological interpretation.</p>
      
      <h4>House System Analysis</h4>
      <p>The twelve houses represent various life domains, from personal identity to career, relationships, and spiritual growth. Their planetary occupants shape our experiences in each area.</p>
      
      <h3>Practical Applications</h3>
      <ul>
        <li>Personal growth and self-awareness</li>
        <li>Relationship compatibility analysis</li>
        <li>Career path guidance</li>
        <li>Health and wellness insights</li>
        <li>Timing important life decisions</li>
      </ul>

      <p>By integrating these astrological principles, you can gain profound insights into your life's purpose and navigate challenges with greater clarity and confidence.</p>
    `;

    return {
      id,
      title,
      excerpt,
      content,
      author,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      category,
      image,
      readTime,
      tags: ['Astrology', 'Birth Chart', 'Vedic', 'Zodiac']
    };
  };

  return {
    getBlogById: (id) => new Promise((resolve, reject) => {
      setTimeout(() => {
        const blog = generateRandomBlog(parseInt(id));
        if (blog) {
          resolve({
            data: blog,
            status: 200,
            message: "Blog post fetched successfully"
          });
        } else {
          reject({
            status: 404,
            message: "Blog post not found"
          });
        }
      }, 800);
    })
  };
};

const blogAPI = createDemoAPI();

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await blogAPI.getBlogById(id);
        setBlog(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch blog post');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#F9F9EF] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading cosmic wisdom...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#F9F9EF] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🔮</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Blog Post Not Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the cosmic insights you're looking for.</p>
            <button 
              onClick={() => navigate('/blog')}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full"
            >
              Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F9F9EF] font-sans">
        {/* Blog Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <button onClick={() => navigate('/blog')} className="hover:text-amber-600">Blog</button>
              <span>›</span>
              <span className="text-amber-600">{blog.category}</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {blog.excerpt}
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-semibold">
                    {blog.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{blog.author}</p>
                  <p className="text-gray-500 text-sm">
                    {formatDate(blog.date)} · {blog.readTime}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {blog.tags?.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Share Section */}
          {/* <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-gray-600">Found this helpful? Share with others:</p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Share on Facebook
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors">
                  Share on Twitter
                </button>
              </div>
            </div>
          </div> */}
        </div>

        {/* Related Articles */}
        {/* <div className="bg-amber-50 border-y border-amber-200 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              More Cosmic Insights
            </h2>
            <div className="text-center">
              <button 
                onClick={() => navigate('/blog')}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
              >
                Explore All Articles
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;