import { useState } from 'react';
import './HomePage.css';
import '../../index.css';

export default function HomePage({ setPage}) {
  const [nav, setNav] = useState({});

  function handleClick(e) {
    setPage(e.target.name);
  }

  const newsData = ['bennett', 'cat']

  return (
    <>
      <div className="homeDiv">
        <h1 className="title">Home Page</h1>
        <h3 className="second">Welcome to the main page</h3>
        <div className="btt">
          <button name="index" onClick={handleClick}>
            Click here to see all articles
          </button>
          <button name="postForm" onClick={handleClick}>
            Click here to add an article
          </button>
          
        </div>
      </div>
  
      {/* News Section */}
      <div className="newsSection">
        <h2 className="trending">!Latest News here just HERE!</h2>
        <div className="slider">
          {newsData.map((news, index) => (
            <div key={index} className="newsItem">
              {news}
            </div>
          ))}
        </div>
      </div>
  
      {/* Fake info */}
      <div>
        <p className="footer">
          Help | Contact us | Become a writer | Privacy | Terms | About | Ads
        </p>
      </div>
    </>
  );
}
