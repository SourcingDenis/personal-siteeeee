import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  content: string;
  imageUrl: string;
  category: string;
}

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sourcingdenis');
        const { items } = response.data;
        const imageUrls = [
          "https://miro.medium.com/v2/resize:fill:320:214/1*1SoqJgiWbDgEL_rSrXYTpQ.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*VK5JWimXBXq5BtlyRxtECA.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*bdjnk75qiMCmybqddh7IaA.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*t7mMGQaAVGCd__UsDBsZdA.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*6V4vHBRbx7HnI0fcgUJaxg.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*X5r5CML7VxfmNSCDgVPDiw.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*dsZERZLQ27TPGwOSPIMjtw.png",
          "https://miro.medium.com/v2/resize:fill:320:214/0*M4cGPnKVdCv1GM57.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*3KU-2ohmowjFNQoHd2awuw.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*-wqSAHu2Nv2U20JNa0zJpw.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*xbjy8jH3nSdunu3dnb6QgA.jpeg",
          "https://miro.medium.com/v2/resize:fill:320:214/1*yvbdZ5Ga7oI6Q9qCnhooFQ.jpeg",
          "https://miro.medium.com/v2/resize:fill:320:214/1*ZtloxLCG5oc-n7aGSQDSlA.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*Qiz0CwPy_U0tJUeklDe2LA.png",
          "https://miro.medium.com/v2/resize:fill:320:214/1*D7V2xJpwXwmt3sMXc0NXMg.jpeg"
        ];
        const categories = ['AI', 'Talent Sourcing'];
        const processedPosts = items.map((item: any, index: number) => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString(),
          creator: item.author,
          content: item.content,
          imageUrl: imageUrls[index] || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          category: categories[Math.floor(Math.random() * categories.length)]
        }));
        setPosts(processedPosts);
        setFilteredPosts(processedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const filterPosts = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  };

  return (
    <div>
      <div className="mb-8 flex justify-center space-x-4">
        <button
          onClick={() => filterPosts('All')}
          className={`px-4 py-2 rounded ${activeCategory === 'All' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All
        </button>
        <button
          onClick={() => filterPosts('AI')}
          className={`px-4 py-2 rounded ${activeCategory === 'AI' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          AI
        </button>
        <button
          onClick={() => filterPosts('Talent Sourcing')}
          className={`px-4 py-2 rounded ${activeCategory === 'Talent Sourcing' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Talent Sourcing
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <article key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className={`inline-block text-white text-xs px-2 py-1 rounded mb-2 ${post.category === 'AI' ? 'bg-blue-500' : 'bg-green-500'}`}>
                {post.category}
              </span>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span>{post.creator}</span>
                <span className="mx-2">•</span>
                <span>{post.pubDate}</span>
              </div>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;