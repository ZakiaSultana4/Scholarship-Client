
import { MdModeComment } from "react-icons/md";

const Article = () => {
  const articles = [
    {
      title: "The Future of Remote Work",
      description:
        "Explore the evolving landscape of remote work and its impact on the modern workplace.",

      date: "2023-01-15",
      auth_name: "John Doe",
      auth_img: "john_doe.jpg",
      tag: "Remote Work",
      comments: 42,
      i:"https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Ffrelancer%2Ff5.png&w=256&q=75"
    },
    {
      title: "Navigating Career Transitions",
      description:
        "Learn effective strategies for successfully navigating career transitions and making informed decisions.",

      date: "2023-02-10",
      auth_name: "Jane Smith",
      auth_img: "jane_smith.jpg",
      tag: "Career Advice",
      comments: 28,
      i:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
    },
    {
      title: "Tech Trends in the Job Market",
      description:
        "Discover the latest technological trends that are reshaping the job market and influencing career paths.",

      date: "2023-03-05",
      auth_name: "Alex Johnson",
      auth_img: "alex_johnson.jpg",
      tag: "Technology",
      comments: 35,
      i:"https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Ffrelancer%2Ff9.png&w=256&q=75"
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl pb-10 font-bold">Latest Articles</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <div className="shadow-md rounded-b-lg" key={idx}>
            <img
              className="h-80 w-full object-cover rounded-t-lg"
              src={article.image}
              alt=""
            />
            <div className="lx:py-6 py-4 xl:px-10 px-6">
              <div className="">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-sm pt-2">{article.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex pt-6">
                  <div className="">
                    <img
                      className="w-10 h-10 rounded-full me-2"
                      src={article.i}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h4 className="font-semibold">{article.auth_name}</h4>
                    <p className="text-xs">{article.date}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <MdModeComment className="text-xl inline" />{" "}
                  {article.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
