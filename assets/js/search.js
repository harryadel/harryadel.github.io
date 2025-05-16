// Search functionality for Jekyll site
(function() {
  // Initialize search index
  const searchIndex = [];
  
  // Function to extract post data from archive page
  async function extractPostsFromArchive() {
    try {
      // First try to load the archive page
      const response = await fetch('/archive/');
      if (!response.ok) {
        throw new Error('Could not load archive page');
      }
      
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Extract posts from the archive page
      const postItems = doc.querySelectorAll('.post-item');
      
      postItems.forEach(item => {
        const titleElement = item.querySelector('.post-item-title a');
        const dateElement = item.querySelector('.post-item-date');
        
        if (titleElement) {
          // Extract post data
          const title = titleElement.textContent.trim();
          const url = titleElement.getAttribute('href');
          const date = dateElement ? dateElement.textContent.trim() : '';
          
          // Get post content by fetching the post page
          fetchPostContent(url).then(content => {
            // Extract tags from post content if available
            const tags = extractTagsFromContent(content);
            
            // Add to search index
            searchIndex.push({
              title: title,
              url: url,
              date: date,
              tags: tags,
              content: content,
              searchableContent: `${title} ${tags.join(' ')} ${content}`.toLowerCase()
            });
          });
        }
      });
      
      // Initialize search functionality
      initSearch();
    } catch (error) {
      console.error('Error extracting posts:', error);
    }
  }
  
  // Function to fetch post content
  async function fetchPostContent(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) return '';
      
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Extract content from post
      const contentElement = doc.querySelector('.post-content');
      return contentElement ? contentElement.textContent.trim() : '';
    } catch (error) {
      console.error('Error fetching post content:', error);
      return '';
    }
  }
  
  // Function to extract tags from post content
  function extractTagsFromContent(content) {
    // This is a simple approach - in a real implementation you might want to parse the HTML
    // and extract tags from meta tags or specific elements
    const tags = [];
    const tagMatch = content.match(/tags:\s*\[([^\]]+)\]/i);
    
    if (tagMatch && tagMatch[1]) {
      const tagString = tagMatch[1];
      tagString.split(',').forEach(tag => {
        const trimmed = tag.trim().replace(/['"\,]/g, '');
        if (trimmed) tags.push(trimmed);
      });
    }
    
    return tags;
  }
  
  // Function to initialize search
  function initSearch() {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    
    if (!searchInput || !resultsContainer) return;
    
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      
      if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
      }
      
      const results = searchIndex.filter(item => 
        item.searchableContent.includes(query)
      );
      
      displayResults(results, resultsContainer);
    });
  }
  
  // Function to display search results
  function displayResults(results, container) {
    if (results.length === 0) {
      container.innerHTML = '<p>No results found</p>';
      return;
    }
    
    let html = '';
    results.forEach(item => {
      html += `
        <article class="post-item">
          <span class="post-item-date">${item.date}</span>
          <h3 class="post-item-title">
            <a href="${item.url}">${item.title}</a>
          </h3>
          <div class="post-item-tags">
            ${item.tags.map(tag => `<span class="tag">${tag.toUpperCase()}</span>`).join(' ')}
          </div>
        </article>
      `;
    });
    
    container.innerHTML = html;
  }
  
  // Start extracting posts when DOM is loaded
  document.addEventListener('DOMContentLoaded', extractPostsFromArchive);
})();
