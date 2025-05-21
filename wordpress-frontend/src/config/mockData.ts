export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export const mockPosts: Post[] = [
  {
    id: 1,
    title: { rendered: "Getting Started with React" },
    content: { rendered: "<p>Learn the basics of React and how to build modern web applications.</p>" },
    excerpt: { rendered: "A beginner's guide to React development" },
    date: "2024-03-20T10:00:00",
    featured_media: 1,
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://picsum.photos/800/400"
      }]
    }
  },
  {
    id: 2,
    title: { rendered: "Advanced TypeScript Patterns" },
    content: { rendered: "<p>Explore advanced TypeScript patterns and best practices.</p>" },
    excerpt: { rendered: "Master TypeScript with these advanced techniques" },
    date: "2024-03-19T15:30:00",
    featured_media: 2,
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://picsum.photos/800/401"
      }]
    }
  },
  {
    id: 3,
    title: { rendered: "Building Responsive UIs" },
    content: { rendered: "<p>Learn how to create beautiful and responsive user interfaces.</p>" },
    excerpt: { rendered: "Create stunning responsive designs" },
    date: "2024-03-18T09:15:00",
    featured_media: 3,
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://picsum.photos/800/402"
      }]
    }
  }
]; 