// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { fetchNews } from "../lib/api";
import Layout from "../components/Layout";
import NewsList from "../components/Newslist";
import HeaderSlider from "../components/features/home/Headerslider";
import LatestNewsSection from "../components/features/home/LatestNewsSection";
import NewsSection from "../components/features/home/newsSection";
import PhotoGallery from "../components/features/home/PhotoGallery";
import VideoGallery from "../components/features/home/VideoGallery";

export default function Home() {
  const [news, setNews] = useState([]);

  const sportsNews = [
    {
      headline: "Team A Wins the Championship",
      content:
        "Team A secured a thrilling victory in the finals against Team B.",
      date: "October 10, 2023",
      image: "https://via.placeholder.com/400x200",
    },
    {
      headline: "New Record Set in Marathon",
      content: "Athlete X broke the world record in the annual city marathon.",
      date: "October 9, 2023",
    },
  ];

  const entertainmentNews = [
    {
      headline: "Blockbuster Movie Release",
      content: 'The highly anticipated movie "XYZ" hits theaters this Friday.',
      date: "October 11, 2023",
      image: "https://via.placeholder.com/400x200",
    },
    {
      headline: "Celebrity Wedding Announcement",
      content: "Famous actors Y and Z announced their engagement.",
      date: "October 8, 2023",
    },
  ];
  useEffect(() => {
    const getNews = async () => {
      const articles = await fetchNews();
      setNews(articles);
    };
    getNews();
  }, []);

  return (
    <Layout>
      <HeaderSlider />
      <LatestNewsSection />
      {/* <h1 className="text-3xl font-bold mb-6">Top Headlines</h1> */}
      {/* <NewsList news={news} /> */}

      <NewsSection
        title="Here We Come: Sports News"
        category="Sports"
        newsItems={news}
      />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slider"
            style={styles.adimage}
          />
        </div>
      </div>
      <NewsSection
        title="Entertainment Buzz"
        category="Entertainment"
        // newsItems={entertainmentNews}
        newsItems={news}
      />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slider"
            style={styles.adimage}
          />
        </div>
      </div>
      <PhotoGallery />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slider"
            style={styles.adimage}
          />
        </div>
      </div>
      <VideoGallery />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slider"
            style={styles.adimage}
          />
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "90%",
    margin: "20px auto",
  },
  text: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    borderRadius: "8px",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    display: "block",
  },
  adimage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
  },
};
