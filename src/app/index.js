"use client";
import { useEffect, useState } from 'react';
import { fetchNews } from '../lib/api';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const articles = await fetchNews();
      setNews(articles);
    };
    getNews();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Top Headlines</h1>
      <NewsList news={news} />
    </Layout>
  );
}