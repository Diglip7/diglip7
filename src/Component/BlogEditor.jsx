import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
export default function BlogEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [drafts, setDrafts] = useState([]);
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [filteredDrafts, setFilteredDrafts] = useState([]);
  const [filteredPublishedBlogs, setFilteredPublishedBlogs] = useState([]);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [selectedPublished, setSelectedPublished] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('drafts');
  const [lastSaved, setLastSaved] = useState(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [toasts, setToasts] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load drafts and published blogs on component mount
  useEffect(() => {
    loadDrafts();
    loadPublishedBlogs();
  }, []);

  // Update filtered lists when drafts, published blogs, or search query change
  useEffect(() => {
    setFilteredDrafts(
      drafts.filter(draft =>
        draft.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredPublishedBlogs(
      publishedBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [drafts, publishedBlogs, searchQuery]);

  // Load ReactQuill CSS after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
      document.head.appendChild(link);
    }
  }, []);

  // Auto-save draft every 30 seconds if there's content and not editing published blog
  useEffect(() => {
    if (!title && !content) return;
    if (selectedPublished) return;

    const autoSaveTimer = setTimeout(() => {
      if (title || content) {
        saveDraft();
      }
    }, 30000);

    return () => clearTimeout(autoSaveTimer);
  }, [title, content, selectedPublished]);

  // Add image click handlers after content changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const editorContainer = document.querySelector('.ql-editor');
      if (editorContainer) {
        const images = editorContainer.querySelectorAll('img');
        images.forEach((img) => {
          img.removeEventListener('dblclick', handleImageDoubleClick);
          img.addEventListener('dblclick', handleImageDoubleClick);
          img.style.cursor = 'pointer';
          img.title = 'Double-click to add/edit link';
        });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [content]);

  // Function to ensure all links in content are underlined
  const ensureLinksUnderlined = (htmlContent) => {
    if (typeof window === 'undefined') return htmlContent;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    const links = tempDiv.querySelectorAll('a');
    links.forEach(link => {
      if (!link.style.textDecoration || link.style.textDecoration === 'none') {
        link.style.textDecoration = 'underline';
        link.style.textDecorationColor = '#2563eb';
        link.style.textDecorationThickness = '2px';
      }
    });
    
    return tempDiv.innerHTML;
  };

  // Custom link handler to automatically underline links
  const handleLinkInsert = (value) => {
    const quillEditor = document.querySelector('.ql-editor')?.parentElement?.querySelector('.ql-editor');
    if (quillEditor) {
      const quill = quillEditor.__quill;
      if (quill) {
        const range = quill.getSelection();
        if (range) {
          quill.formatText(range.index, range.length, 'link', value);
          quill.formatText(range.index, range.length, 'underline', true);
        }
      }
    }
  };

  // Toast functions
  const showToast = (message, type) => {
    const id = Date.now().toString();
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Confirmation modal functions
  const openConfirmModal = (type, id, title) => {
    setConfirmAction({ type, id, title });
    setShowConfirmModal(true);
  };

  const handleConfirmAction = () => {
    if (!confirmAction) return;
    
    if (confirmAction.type === 'deleteDraft') {
      deleteDraft(confirmAction.id);
    } else if (confirmAction.type === 'deletePublished') {
      deletePublishedBlog(confirmAction.id);
    }
    
    setShowConfirmModal(false);
    setConfirmAction(null);
  };

  const handleImageDoubleClick = (e) => {
    e.preventDefault();
    const img = e.target;
    const currentLink = img.parentElement?.tagName === 'A' ? img.parentElement.href : '';
    
    setSelectedImage(img);
    setLinkUrl(currentLink);
    setShowLinkModal(true);
  };

  const handleLinkSubmit = () => {
    if (!selectedImage) return;

    const trimmedUrl = linkUrl.trim();
    
    if (trimmedUrl) {
      if (!trimmedUrl.match(/^https?:\/\//)) {
        showToast('Please enter a valid URL with https:// or http:// protocol', 'error');
        return;
      }
      
      try {
        new URL(trimmedUrl);
      } catch (e) {
        showToast('Please enter a valid URL format (e.g., https://example.com)', 'error');
        return;
      }
      
      const linkElement = document.createElement('a');
      linkElement.href = trimmedUrl;
      linkElement.target = '_blank';
      linkElement.rel = 'noopener noreferrer';
      
      selectedImage.parentNode?.replaceChild(linkElement, selectedImage);
      linkElement.appendChild(selectedImage);
    } else {
      if (selectedImage.parentElement?.tagName === 'A') {
        selectedImage.parentElement.parentNode?.replaceChild(selectedImage, selectedImage.parentElement);
      }
    }
    
    const editorContainer = document.querySelector('.ql-editor');
    if (editorContainer) {
      setContent(editorContainer.innerHTML);
    }
    
    setShowLinkModal(false);
    setSelectedImage(null);
    setLinkUrl('');
    showToast('Image link updated successfully!', 'success');
  };

  const loadDrafts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getdraft`);
      setDrafts(response.data);
    } catch (err) {
      console.error('Failed to load drafts:', err);
      showToast('Failed to load drafts', 'error');
    }
  };

  const loadPublishedBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/publishedblogs`);
      setPublishedBlogs(response.data);
    } catch (err) {
      console.error('Failed to load published blogs:', err);
      showToast('Failed to load published blogs', 'error');
    }
  };

  const saveDraft = async () => {
    if (!title && !content) {
      showToast('Please enter at least a title or content', 'warning');
      return;
    }
    
    setIsLoading(true);
    try {
      if (selectedDraft) {
        await axios.put(`${import.meta.env.VITE_API_URL}/updatedraft/${selectedDraft}`, { 
          title: title || 'Untitled Draft', 
          content: ensureLinksUnderlined(content || '')
        });
        setLastSaved(new Date());
        showToast('Draft updated successfully!', 'success');
      } else {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createdraft`, { 
          title: title || 'Untitled Draft', 
          content: ensureLinksUnderlined(content || '')
        });
        setSelectedDraft(response.data._id);
        setLastSaved(new Date());
        showToast('Draft created successfully!', 'success');
      }
      loadDrafts();
    } catch (err) {
      console.error(err);
      showToast('Failed to save draft', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const publishBlog = async () => {
    if (!title || !content) {
      showToast('Title and content required', 'warning');
      return;
    }
    
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/createpublishedblogs`, { 
        title, 
        content: ensureLinksUnderlined(content)
      });
      showToast('Blog published successfully!', 'success');
      setTitle('');
      setContent('');
      setSelectedDraft(null);
      setSelectedPublished(null);
      loadDrafts();
      loadPublishedBlogs();
    } catch (err) {
      console.error(err);
      showToast('Failed to publish blog', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const loadDraft = async (draftId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getdraft?id=${draftId}`);
      const draft = response.data;
      setTitle(draft.title);
      setContent(ensureLinksUnderlined(draft.content));
      setSelectedDraft(draftId);
      setSelectedPublished(null);
      setActiveTab('drafts');
      showToast('Draft loaded successfully!', 'success');
    } catch (err) {
      console.error('Failed to load draft:', err);
      showToast('Failed to load draft', 'error');
    }
  };

  const loadPublishedBlog = async (blogId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/publishedblogs?id=${blogId}`);
      const blog = response.data;
      setTitle(blog.title);
      setContent(ensureLinksUnderlined(blog.content));
      setSelectedPublished(blogId);
      setSelectedDraft(null);
      setActiveTab('published');
      showToast('Published blog loaded successfully!', 'success');
    } catch (err) {
      console.error('Failed to load published blog:', err);
      showToast('Failed to load published blog', 'error');
    }
  };

  const updatePublishedBlog = async () => {
    if (!selectedPublished) {
      showToast('No blog selected for update', 'warning');
      return;
    }
    if (!title || !content) {
      showToast('Title and content required', 'warning');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/updatePublishedBlog/${selectedPublished}`, { 
        title, 
        content: ensureLinksUnderlined(content)
      });
      
      if (response.data) {
        showToast('Blog updated successfully!', 'success');
        setTitle('');
        setContent('');
        setSelectedPublished(null);
        loadPublishedBlogs();
      } else {
        showToast('Failed to update blog - no response data', 'error');
      }
    } catch (err) {
      console.error('Update error:', err);
      showToast('Failed to update blog: ' + (err.response?.data?.message || err.message), 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDraft = async (draftId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/deletedraft/${draftId}`);
      showToast('Draft deleted successfully!', 'success');
      if (selectedDraft === draftId) {
        setTitle('');
        setContent('');
        setSelectedDraft(null);
      }
      loadDrafts();
    } catch (err) {
      console.error('Failed to delete draft:', err);
      showToast('Failed to delete draft', 'error');
    }
  };

  const deletePublishedBlog = async (blogId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/deletePublishedBlog/${blogId}`);
      showToast('Blog deleted successfully!', 'success');
      if (selectedPublished === blogId) {
        setTitle('');
        setContent('');
        setSelectedPublished(null);
      }
      loadPublishedBlogs();
    } catch (err) {
      console.error('Failed to delete published blog:', err);
      showToast('Failed to delete published blog', 'error');
    }
  };

  // ReactQuill modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <div className="max-w-4xl mx-auto ml-72 px-8 pt-24 pb-8 min-h-screen relative overflow-hidden"
         style={{
           background: 'linear-gradient(145deg, #fef7f6 0%, #f7e9e7 100%)'
         }}>
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0"
           style={{
             background: 'radial-gradient(circle at 10% 20%, rgba(28, 73, 66, 0.15) 0%, transparent 50%)'
           }}></div>

      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg max-w-80 animate-[slideIn_0.3s_ease-out] ${
              toast.type === 'success' ? 'bg-emerald-800 text-white' :
              toast.type === 'error' ? 'bg-red-800 text-white' :
              'bg-amber-600 text-white'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-3 text-xl hover:text-gray-300 transition-colors duration-300"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && confirmAction && (
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/75 to-emerald-900/85 flex items-center justify-center z-40 animate-[fadeIn_0.4s_ease-out]">
          <div className="bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 shadow-2xl max-w-md w-11/12">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Confirm Action</h3>
            <p className="text-emerald-900 mb-6">
              Are you sure you want to delete "{confirmAction.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleConfirmAction}
                className="px-6 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-all duration-300 hover:scale-105"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setConfirmAction(null);
                }}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-emerald-700 tracking-tight animate-[fadeInDown_1s_ease-out]"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            Blog Editor
          </h1>
          <div className="flex flex-col gap-4 items-end">
            <input
              type="text"
              className="w-80 px-3 py-3 border border-rose-200 rounded-lg text-emerald-900 focus:border-emerald-900 focus:ring-4 focus:ring-emerald-900/20 focus:outline-none transition-all duration-300"
              placeholder="Search drafts and published blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('drafts')}
                className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 border border-emerald-900 ${
                  activeTab === 'drafts' 
                    ? 'bg-emerald-900 text-rose-50' 
                    : 'bg-rose-200 text-emerald-900 hover:bg-emerald-900 hover:text-rose-50 hover:scale-105'
                }`}
              >
                Drafts ({filteredDrafts.length})
              </button>
              <button
                onClick={() => setActiveTab('published')}
                className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 border border-emerald-900 ${
                  activeTab === 'published' 
                    ? 'bg-emerald-900 text-rose-50' 
                    : 'bg-rose-200 text-emerald-900 hover:bg-emerald-900 hover:text-rose-50 hover:scale-105'
                }`}
              >
                Published ({filteredPublishedBlogs.length})
              </button>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        {activeTab === 'drafts' && (
          <div className="bg-gradient-to-br from-white to-rose-50 rounded-xl p-6 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-emerald-900 mb-4">Saved Drafts</h2>
            {filteredDrafts.length === 0 ? (
              <p className="text-lg text-emerald-700 text-center">No drafts found</p>
            ) : (
              <div className="relative max-h-96 overflow-hidden">
                <div className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-emerald-900 scrollbar-thumb-rounded">
                  {filteredDrafts.map((draft, index) => (
                    <div key={draft._id} 
                         className="relative flex-shrink-0 h-32 bg-white rounded-lg p-4 border border-rose-200 flex justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-900 animate-[slideIn_0.5s_ease-out] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-emerald-900 before:to-emerald-700 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-emerald-900 transition-colors duration-300 hover:text-emerald-700 overflow-hidden text-ellipsis whitespace-nowrap">
                          {draft.title}
                        </h3>
                        <p className="text-sm text-emerald-700 italic">
                          {new Date(draft.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => loadDraft(draft._id)}
                          className="px-4 py-2 bg-emerald-900 text-rose-50 font-semibold rounded-md transition-all duration-300 hover:bg-emerald-700 hover:scale-105"
                        >
                          Load
                        </button>
                        <button
                          onClick={() => openConfirmModal('deleteDraft', draft._id, draft.title)}
                          className="px-4 py-2 bg-red-800 text-rose-50 font-semibold rounded-md transition-all duration-300 hover:bg-red-900 hover:scale-105"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'published' && (
          <div className="bg-gradient-to-br from-white to-rose-50 rounded-xl p-6 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-emerald-900 mb-4">Published Blogs</h2>
            {filteredPublishedBlogs.length === 0 ? (
              <p className="text-lg text-emerald-700 text-center">No published blogs found</p>
            ) : (
              <div className="relative max-h-96 overflow-hidden">
                <div className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-emerald-900 scrollbar-thumb-rounded">
                  {filteredPublishedBlogs.map((blog, index) => (
                    <div key={blog._id} 
                         className="relative flex-shrink-0 h-32 bg-white rounded-lg p-4 border border-rose-200 flex justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-900 animate-[slideIn_0.5s_ease-out] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-emerald-900 before:to-emerald-700 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-emerald-900 transition-colors duration-300 hover:text-emerald-700 overflow-hidden text-ellipsis whitespace-nowrap">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-emerald-700 italic">
                          Published: {new Date(blog.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => loadPublishedBlog(blog._id)}
                          className="px-4 py-2 bg-emerald-900 text-rose-50 font-semibold rounded-md transition-all duration-300 hover:bg-emerald-700 hover:scale-105"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => openConfirmModal('deletePublished', blog._id, blog.title)}
                          className="px-4 py-2 bg-red-800 text-rose-50 font-semibold rounded-md transition-all duration-300 hover:bg-red-900 hover:scale-105"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Editor */}
        <div className="bg-gradient-to-br from-white to-rose-50 rounded-xl p-8 shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Blog Title</label>
            <input
              className="w-full px-3 py-3 border border-rose-200 rounded-lg text-emerald-900 focus:border-emerald-900 focus:ring-4 focus:ring-emerald-900/20 focus:outline-none transition-all duration-300"
              placeholder="Enter your blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-emerald-900 mb-2">Content</label>
            <div className="text-sm text-emerald-700 mb-2">
              💡 Tip: Double-click on any image to add or edit its link. URLs must include https:// or http:// protocol (e.g., "https://example.com")
            </div>
            <div className="bg-white rounded-lg border border-rose-200">
              <ReactQuill
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder="Write your blog content here..."
                style={{ minHeight: '16rem' }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            {!selectedPublished && (
              <button
                onClick={saveDraft}
                disabled={isLoading}
                className="px-6 py-3 bg-gray-600 text-rose-50 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Saving...' : 'Save Draft'}
              </button>
            )}
            
            {selectedPublished ? (
              <button
                onClick={updatePublishedBlog}
                disabled={isLoading || (!title && !content)}
                className="px-6 py-3 bg-emerald-900 text-rose-50 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Updating...' : 'Update Blog'}
              </button>
            ) : (
              <button
                onClick={publishBlog}
                disabled={isLoading || (!title && !content)}
                className="px-6 py-3 bg-emerald-900 text-rose-50 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Publishing...' : 'Publish Blog'}
              </button>
            )}

            {(title || content) && (
              <button
                onClick={() => {
                  setTitle('');
                  setContent('');
                  setSelectedDraft(null);
                  setSelectedPublished(null);
                  showToast('Editor cleared', 'success');
                }}
                className="px-6 py-3 bg-red-800 text-rose-50 font-semibold rounded-lg transition-all duration-300 hover:bg-red-900 hover:scale-105 hover:shadow-lg"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Indicator */}
          <div className="flex justify-between items-center mt-4">
            {selectedDraft && (
              <div className="px-3 py-3 bg-blue-50 rounded-md">
                <p className="text-sm text-emerald-900">
                  📝 Editing draft: {drafts.find(d => d._id === selectedDraft)?.title}
                </p>
              </div>
            )}
            {selectedPublished && (
              <div className="px-3 py-3 bg-green-50 rounded-md">
                <p className="text-sm text-emerald-900">
                  ✏️ Editing published blog: {publishedBlogs.find(b => b._id === selectedPublished)?.title}
                </p>
              </div>
            )}
            {lastSaved && !selectedPublished && (
              <div className="text-sm text-emerald-700">
                Last saved: {lastSaved.toLocaleTimeString()}
              </div>
            )}
          </div>
        </div>

        {/* Link Modal */}
        {showLinkModal && (
          <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/75 to-emerald-900/85 flex items-center justify-center z-40 animate-[fadeIn_0.4s_ease-out]">
            <div className="bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 shadow-2xl max-w-md w-11/12">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Add/Edit Image Link</h3>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Link URL</label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => {
                    setLinkUrl(e.target.value);
                    const url = e.target.value.trim();
                    if (url && !url.match(/^https?:\/\//)) {
                      e.target.classList.add('border-red-800');
                      e.target.classList.remove('border-emerald-900');
                      e.target.title = 'URL must include https:// or http:// protocol';
                    } else if (url) {
                      try {
                        new URL(url);
                        e.target.classList.add('border-emerald-900');
                        e.target.classList.remove('border-red-800');
                        e.target.title = 'Valid URL format';
                      } catch (err) {
                        e.target.classList.add('border-red-800');
                        e.target.classList.remove('border-emerald-900');
                        e.target.title = 'Invalid URL format';
                      }
                    } else {
                      e.target.classList.remove('border-red-800', 'border-emerald-900');
                      e.target.title = '';
                    }
                  }}
                  placeholder="https://example.com (protocol required)"
                  className="w-full px-3 py-3 border border-rose-200 rounded-lg text-emerald-900 focus:border-emerald-900 focus:outline-none transition-colors duration-300"
                />
                <div className="text-xs text-emerald-700 mt-1">
                  ⚠️ URL must include https:// or http:// protocol to be valid
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleLinkSubmit}
                  className="px-6 py-3 bg-emerald-900 text-rose-50 font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                >
                  Save Link
                </button>
                <button
                  onClick={() => {
                    setShowLinkModal(false);
                    setSelectedImage(null);
                    setLinkUrl('');
                  }}
                  className="px-6 py-3 bg-gray-600 text-rose-50 font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  Cancel
                </button>
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
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .ql-editor a {
          color: #2563eb !important;
          text-decoration: underline !important;
          text-decoration-color: #2563eb !important;
          text-decoration-thickness: 2px !important;
          transition: all 0.2s ease !important;
        }

        .ql-editor a:hover {
          color: #1d4ed8 !important;
          text-decoration-color: #1d4ed8 !important;
          text-decoration-thickness: 3px !important;
        }

        .ql-editor a:visited {
          color: #7c3aed !important;
          text-decoration-color: #7c3aed !important;
        }

        .ql-editor a:visited:hover {
          color: #6d28d9 !important;
          text-decoration-color: #6d28d9 !important;
        }

        /* Custom scrollbar styles for Webkit browsers */
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        
        .scrollbar-track-rose-200::-webkit-scrollbar-track {
          background: #fecdd3;
          border-radius: 4px;
        }
        
        .scrollbar-thumb-emerald-900::-webkit-scrollbar-thumb {
          background: #064e3b;
          border-radius: 4px;
        }
        
        .scrollbar-thumb-emerald-900::-webkit-scrollbar-thumb:hover {
          background: #065f46;
        }
        
        .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}