"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchNews } from '../../lib/api';
import Layout from '../../components/Layout';
import NewsList from '../../components/NewsList';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (category) {
      const getNews = async () => {
        const articles = await fetchNews(category);
        setNews(articles);
      };
      getNews();
    }
  }, [category]);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'Loading...'}
      </h1>
      <NewsList news={news} />
    </Layout>
  );
}