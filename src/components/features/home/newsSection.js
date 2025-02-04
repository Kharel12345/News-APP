"use client";
import React from "react";
import "./NewsSection.css"; // Import your CSS file for styling
import Link from "next/link";

const NewsSection = ({ title, category, newsItems }) => {
  return (
    <div className="news-section">
      <div className="news-header">
        <h2>{title}</h2>
        <span className="category">{category}</span>
      </div>
      <div className="news-content">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <div className="news-item-image">
              <img src={item.urlToImage} alt={item.title} className="news-image" />
            </div>
            <div className="news-item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="news-date">{new Date(item.publishedAt).toLocaleDateString()}</span>
              {/* <Link href={item.url} className="read-more">
                Read More
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;