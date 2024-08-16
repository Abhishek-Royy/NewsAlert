import React, { useEffect, useState } from "react";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=b66193c116ae41acac9d84e8a6998dd4`
      );
      const data = await res.json();
      setArticles(data.articles); // Store articles in state
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="w-full min-h-[100vh] lg:px-40 bg-[#EEEEEE]">
      <div className="container lg:w-full w-[90%] m-auto h-full flex flex-wrap items-center justify-between gap-5 py-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="box lg:w-[350px] w-full h-auto p-4 bg-white rounded-lg mb-4"
          >
            <div className="image w-full h-[150px]">
              <img
                className="w-full h-full object-cover object-center"
                src="https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-600nw-723749530.jpg"
                alt={article.title}
              />
            </div>
            <p className="my-2">{article.author}</p>
            <div className="brief w-full h-auto mb-5">
              <p className="w-full font-semibold">{article.title}</p>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br rounded-lg text-sm px-10 py-2.5 text-center font-medium"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
