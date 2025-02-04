const API_KEY = 'ca9d0ef8c6d54ecf807bae7f37e97d53';
const BASE_URL = 'https://newsapi.org/v2'; // or GNews URL

export const fetchNews = async (category = 'general') => {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?category=${category}&apiKey=${API_KEY}&country=us`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};