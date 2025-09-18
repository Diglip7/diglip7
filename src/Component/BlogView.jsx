import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BlogView() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/publishedblogs`
        );
        // Mock categories for demonstration; replace with actual data from API if available
        const blogsWithCategories = res.data.map((blog) => ({
          ...blog,
          category:
            blog.category ||
            ["Technology", "Lifestyle", "Business"][
              Math.floor(Math.random() * 3)
            ],
        }));
        setBlogs(blogsWithCategories);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  const getPreviewContent = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    const text = div.textContent || div.innerText || "";
    return text.split(".")[0] + (text.includes(".") ? "." : "");
  };

  const getBlogImage = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    const img = div.querySelector("img");
    return img ? img.src : "https://via.placeholder.com/120";
  };

  if (loading) {
    return (
      <div className="w-full mx-auto  pt-20 pb-8 min-h-screen relative overflow-y-auto"
           style={{
             background: 'linear-gradient(145deg, #fef7f6 0%, #f7e9e7 100%)'
           }}>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30 z-0"
             style={{
               backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(28, 73, 66, 0.1)"/></svg>')`
             }}></div>

        <h1 className="text-6xl font-extrabold text-center mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-emerald-700 animate-[fadeInDown_1s_ease-out]"
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
          Latest Blogs
        </h1>
        <p className="text-xl text-emerald-700 text-center mb-12 italic"
           style={{ fontFamily: 'Inter, sans-serif' }}>
          Discover our latest insights and updates
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 relative z-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 shadow-lg relative overflow-hidden animate-[slideIn_0.5s_ease-out]">
              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <div className="h-6 bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 rounded-lg mb-3 animate-[skeleton-loading_1.5s_ease-in-out_infinite] w-3/5"
                       style={{ backgroundSize: '200% 100%' }}></div>
                  <div className="h-4 bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 rounded-lg mb-3 animate-[skeleton-loading_1.5s_ease-in-out_infinite] w-1/2"
                       style={{ backgroundSize: '200% 100%' }}></div>
                  <div className="h-8 bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 rounded-lg mb-3 animate-[skeleton-loading_1.5s_ease-in-out_infinite] w-11/12"
                       style={{ backgroundSize: '200% 100%' }}></div>
                  <div className="h-9 bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 rounded-lg w-32 animate-[skeleton-loading_1.5s_ease-in-out_infinite]"
                       style={{ backgroundSize: '200% 100%' }}></div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 rounded-xl animate-[skeleton-loading_1.5s_ease-in-out_infinite]"
                       style={{ backgroundSize: '200% 100%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-8 pt-20 pb-8 min-h-screen relative overflow-y-auto scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-emerald-900 scrollbar-thumb-rounded hover:scrollbar-thumb-emerald-700"
         style={{
           background: 'linear-gradient(145deg, #fef7f6 0%, #f7e9e7 100%)'
         }}>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 z-0"
           style={{
             backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(28, 73, 66, 0.1)"/></svg>')`
           }}></div>

      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold text-center mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-emerald-700 animate-[fadeInDown_1s_ease-out]"
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
          Latest Blogs
        </h1>
        <p className="text-xl text-emerald-700 text-center mb-12 italic"
           style={{ fontFamily: 'Inter, sans-serif' }}>
          Discover our latest insights and updates
        </p>
        
        {blogs.length === 0 ? (
          <div className="text-center py-16 px-8 bg-gradient-to-br from-white to-rose-50 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-3xl font-bold text-emerald-900 mb-4"
               style={{ fontFamily: 'Inter, sans-serif' }}>
              No published blogs yet.
            </p>
            <p className="text-lg text-emerald-700"
               style={{ fontFamily: 'Inter, sans-serif' }}>
              Check back soon for new content!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
            {blogs.map((blog, index) => (
              <div
                key={blog._id}
                className="bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group animate-[slideIn_0.5s_ease-out]"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(28, 73, 66, 0.05)',
                  border: '2px solid transparent'
                }}
                onClick={() => openBlogModal(blog)}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-br from-emerald-900 to-emerald-700 -z-10">
                  <div className="bg-gradient-to-br from-white to-rose-50 rounded-2xl w-full h-full"></div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold text-rose-50 bg-emerald-700 px-3 py-1 rounded-xl mb-3 uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h2 className="text-2xl font-bold text-emerald-900 mb-2 leading-tight transition-colors duration-300 group-hover:text-emerald-700 overflow-hidden text-ellipsis whitespace-nowrap"
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                      {blog.title}
                    </h2>
                    <p className="text-sm text-emerald-700 mb-3 italic tracking-wide"
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                      Published on {new Date(blog.createdAt).toLocaleString()}
                    </p>
                    <p className="text-base text-emerald-900 leading-relaxed mb-4 line-clamp-2 overflow-hidden"
                       style={{ 
                         fontFamily: 'Inter, sans-serif',
                         display: '-webkit-box',
                         WebkitLineClamp: 2,
                         WebkitBoxOrient: 'vertical'
                       }}>
                      {getPreviewContent(blog.content)}
                    </p>
                    <button className="bg-teal-700 text-teal-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-teal-700 hover:scale-105 hover:shadow-lg"
                            style={{ fontFamily: 'Inter, sans-serif' }}>
                      Read More
                    </button>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-emerald-900/15 opacity-0 rounded-xl transition-opacity duration-300 group-hover:opacity-100"></div>
                    <img
                      src={getBlogImage(blog.content)}
                      alt={blog.title}
                      className="w-32 h-32 object-cover rounded-xl border-2 border-emerald-700 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {selectedBlog && (
          <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/80 to-emerald-900/90 flex items-center justify-center z-50 animate-[fadeIn_0.4s_ease-out]">
            <div className="bg-gradient-to-br from-white to-rose-50 rounded-2xl max-w-4xl w-11/12 max-h-[85vh] overflow-y-auto p-8 shadow-2xl relative animate-[slideUp_0.4s_ease-out] scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-emerald-900 scrollbar-thumb-rounded hover:scrollbar-thumb-emerald-700">
              
              {/* Sticky header */}
              <div className="sticky top-0 bg-gradient-to-br from-white to-rose-50 z-10 py-4 border-b border-rose-200 flex items-center gap-6 mb-6">
                <img
                  src={getBlogImage(selectedBlog.content)}
                  alt={selectedBlog.title}
                  className="w-20 h-20 object-cover rounded-xl border-2 border-emerald-700 shadow-lg"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-emerald-900 mb-2 leading-tight"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                      }}>
                    {selectedBlog.title}
                  </h2>
                  <p className="text-sm text-teal-700 italic tracking-wide"
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                    Published on {new Date(selectedBlog.createdAt).toLocaleString()}
                  </p>
                </div>
                <button 
                  className="absolute top-4 right-4 bg-teal-700 text-teal-700 w-10 h-10 rounded-full text-2xl flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:rotate-90 hover:shadow-lg"
                  onClick={closeBlogModal}
                >
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="text-lg text-emerald-900 leading-relaxed pt-6 blog-modal-content"
                   style={{ fontFamily: 'Inter, sans-serif' }}
                   dangerouslySetInnerHTML={{ __html: selectedBlog.content }}>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Custom scrollbar styles for Webkit browsers */
        .scrollbar-thin::-webkit-scrollbar {
          width: 10px;
        }
        
        .scrollbar-track-rose-200::-webkit-scrollbar-track {
          background: #fecdd3;
          border-radius: 5px;
        }
        
        .scrollbar-thumb-emerald-900::-webkit-scrollbar-thumb {
          background: #064e3b;
          border-radius: 5px;
        }
        
        .scrollbar-thumb-emerald-900:hover::-webkit-scrollbar-thumb,
        .hover\\:scrollbar-thumb-emerald-700:hover::-webkit-scrollbar-thumb {
          background: #047857;
        }
        
        .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
          border-radius: 5px;
        }

        /* Blog modal content styling */
        .blog-modal-content p,
        .blog-modal-content ul,
        .blog-modal-content ol {
          margin-bottom: 1.5rem;
        }

        .blog-modal-content h2,
        .blog-modal-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          color: #064e3b;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-modal-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 2rem auto;
          display: block;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .blog-modal-content img:hover {
          transform: scale(1.02);
        }

        .blog-modal-content a {
          color: #2563eb;
          text-decoration: underline;
          text-decoration-color: #2563eb;
          text-decoration-thickness: 2px;
          transition: color 0.3s ease, text-decoration-color 0.3s ease;
        }

        .blog-modal-content a:hover {
          color: #1d4ed8;
          text-decoration-color: #1d4ed8;
        }
      `}</style>
    </div>
  );
}