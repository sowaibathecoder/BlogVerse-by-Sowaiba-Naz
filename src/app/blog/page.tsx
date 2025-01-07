import Card from "../components/Card";

const BlogPage = () => {
  const blogPosts = [
    {
      title:
        "Agentic AI: Redefining Autonomy and Decision-Making",
      description:
        "Artificial Intelligence (AI) is rapidly advancing, and with it comes the development of more autonomous systems that can",
      imageUrl: "/agentic-ai.jpg",
      slug: "agentic-ai-redefining-autonomy",
    },
    {
      title:
        "Cybersecurity: Protecting Your Digital Footprint",
      description:
        "A digital footprint refers to the traces you leave behind while interacting with the internet.",
      imageUrl: "/cyber-security.jpg",
      slug: "cybersecurity",
    },
    {
      title:
        "Climate Change and Its Impact",
      description:
        "Climate change, a global environmental challenge, refers to significant long-term changes in temperature,",
      imageUrl: "/climate-changes.jpg",
      slug: "climate-change-and-its-impact",
    },
    {
      title:
        "Astrology: Understanding the Stars and Their Influence",
      description:
        "For centuries, people across the world have looked to the stars to seek guidance, insights, and understanding of their lives.",
      imageUrl: "/zodiac-sign.jpg",
      slug: "astrology",
    },
    {
      title:
        "Winter Dehydration: Why Hydration Matters",
      description:
        "Dehydration can sneak up on you just as easily in winter. Learn why hydration is crucial during the colder months and how to stay hydrated.",
      imageUrl: "/hydration-winter.jpg",
      slug: "winter-dehydration-dangers",
    },
    {
      title: "The Power of Self-Study: Unlocking Your Potential",
      description:
        "Self-study is a powerful tool that enables individuals to take control of their learning journey.",
      imageUrl: "/self-study.jpg",
      slug: "the-power-of-self-study",
    },
    {
      title: "Mastering Sudoku: A Guide to Solving Puzzles",
      description:
        "Sudoku, meaning “singular number” in Japanese, it is a popular logic-based number puzzle that tests problem-solving skills and sharpens the mind.",
      imageUrl: "/sudoku-image.jpg",
      slug: "mastering-sudoku-guide",
    },
    {
      title: "The Art of Chess: Strategies for Every Player",
      description:
        "Chess, often called the 'game of kings,' has been captivating minds for centuries.",
      imageUrl: "/chess-board-image.jpg",
      slug: "chess-game-strategies",
    },
    
    
  ];

  return (
      <div className="p-8 pb-32">
        <h1 className="text-center text-[40px] font-mono font-bold text-white sm:text-4xl md:text-[40px] tracking-tighter mt-12 mb-8 sm:mb-2 md:mb-16">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-5 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
  );
};

export default BlogPage;
