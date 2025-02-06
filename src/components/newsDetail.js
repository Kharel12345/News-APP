// pages/news/[id].js (News Detail Page)
import { useRouter } from 'next/router';
import styles from '../styles/NewsDetail.module.css';
import BackButton from './backbButton';

const NewsDetail = ({ newsItem }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <BackButton />
      <article className={styles.newsDetail}>
        <img 
          src={newsItem.image} 
          alt={newsItem.title} 
          className={styles.detailImage}
        />
        <span className={styles.detailDate}>{newsItem.date}</span>
        <h1 className={styles.detailTitle}>{newsItem.title}</h1>
        <div className={styles.detailContent}>
          <p>{newsItem.content}</p>
        </div>
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch news IDs from your data source
  const paths = [
    { params: { id: '1' } },
    // Add more paths
  ];

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  // Fetch news item by ID
  const newsItem = {
    id: '1',
    title: 'Breaking: Major Technology Innovation Revealed',
    date: 'March 15, 2024',
    content: 'Full article content...',
    image: 'https://source.unsplash.com/random/1200x800'
  };

  return {
    props: {
      newsItem
    }
  };
}

export default NewsDetail;
