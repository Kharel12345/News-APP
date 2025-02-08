"use client";

import React from "react";
import Layout from "../../../components/Layout";
import { Share2, Bookmark, Clock, Eye, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";

const NewsDetail = () => {
  const newsItem = {
    id: "1",
    title: "Breaking: Major Technology Innovation Revealed",
    date: "March 15, 2024",
    content:
      "नयाँदिल्ली — भारतीय प्रधानमन्त्री मोदीले दिल्ली विधानसभा चुनावमा विपक्षी दल कंग्रेसको बिजोग भएको बताएका छन् । दिल्ली विधानसभा चुनावको मतपरिणामपछि बोल्दै मोदीले देशको सबैभन्दा पुरानो दलले राजधानीमा नै कुनै सिट जित्न नसकेको भन्दै कटाक्ष गरेका हुन् । 'भारतको राजधानीमा देशको सबैभन्दा पुरानो पार्टीले लगातार ६ पटक आफ्नो खाता खोल्न सकेको छैन,' भाजपा मुख्यालयमा कार्यकर्तालाई सम्बोधन गर्दै मोदीले भनेका छन् । कंग्रेसले आफ्ना सहयोगीहरूलाई एकपछि अर्को गर्दै अन्त्य गरिरहेको मोदीको दाबी छ । ‘कंग्रेस पार्टी परजीवी बनेको छ । यो आफू मात्र पतन हुँदैन, अरूलाई पनि सँगै लैजान्छ । तिनीहरूले एक-एक गरेर आफ्ना सबै सहयोगीहरूलाई समाप्त गर्दैछन् । कंग्रेसीहरूले आफ्ना सहयोगीका मुद्दा चोर्छन् र उनीहरूकै भोट बैंक खत्तम पार्छन्,' प्रधानमन्त्री मोदीले भनेका छन् ।",
    addiditionalcontent:
      "'आज कंग्रेस स्वतन्त्रताको समयमा जस्तो छैन । कंग्रेसले सहरी नक्सलवादीको राजनीति गरिरहेको छ,' मोदीले भने, 'भारतीय राज्यहरूमा लडिरहेको भन्ने कंग्रेस नेताहरूको भाषा सहरी नक्सलवादीहरूको भाषा हो ।' राजनीतिमा सफलता र असफलता दुवै क्षणिक भएको तर देशलाई छल र मूर्खताको राजनीति नचाहिएको उनको भनाइ छ ।",
    image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
    image2: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
    author: "John Doe",
    category: "Technology",
    readTime: "5 min",
    views: "2.5k",
    likes: 342,
  };

  const sidebarNews = [
    {
      id: 2,
      title: "New Climate Change Report Released",
      date: "March 14, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Environment",
    },
    {
      id: 3,
      title: "Global Economic Summit Concludes",
      date: "March 13, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Business",
    },
    {
      id: 4,
      title: "Breakthrough in Medical Research",
      date: "March 12, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Health",
    },
    {
      id: 5,
      title: "Tech Giants Announce Collaboration",
      date: "March 14, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Technology",
    },
    {
      id: 6,
      title: "Space Exploration Milestone Reached",
      date: "March 13, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Science",
    },
    {
      id: 7,
      title: "New Digital Currency Regulations",
      date: "March 12, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Finance",
    },
  ];

  const relatedNews = [
    {
      id: 5,
      title: "Tech Giants Announce Collaboration",
      date: "March 14, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Technology",
    },
    {
      id: 6,
      title: "Space Exploration Milestone Reached",
      date: "March 13, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Science",
    },
    {
      id: 7,
      title: "New Digital Currency Regulations",
      date: "March 12, 2024",
      image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
      category: "Finance",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:grid-areas-layout">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:grid-in-main">
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-96 object-cover"
              />

              {/* Article Header */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                    {newsItem.category}
                  </span>
                  <div className="flex items-center text-gray-600 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {newsItem.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {newsItem.views}
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {newsItem.likes}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/api/placeholder/40/40"
                      alt={newsItem.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-black">
                        {newsItem.author}
                      </p>
                      <p className="text-sm text-black">{newsItem.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="text-black">
                      <Share2 className="w-4 h-4 mr-2 text-black" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="text-black">
                      <Bookmark className="w-4 h-4 mr-2 text-black" />
                      Save
                    </Button>
                  </div>
                </div>

                {/* Advertisement Banner */}
                <Alert className="mb-6">
                  <div className="w-full h-24 bg-gray-100 flex items-center justify-center">
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="object-cover"
                    />
                  </div>
                </Alert>

                {/* Article Content */}
                <div className="prose max-w-none">
                  <p className="mb-4 text-black">{newsItem.content}</p>
                </div>

                {newsItem.image2 && (
                  <div className="prose max-w-none">
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="w-full h-96 object-cover"
                    />
                    <p className="mb-4 text-black font-lg">
                      {newsItem.addiditionalcontent}
                    </p>
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:grid-in-sidebar">
            {/* Sidebar Advertisement */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-6">Trending News</h2>
            <div className="space-y-6">
              {sidebarNews.map((item) => (
                <Card key={item.id}>
                  <div className="flex space-x-4 p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <span className="text-sm text-blue-600 font-medium">
                        {item.category}
                      </span>
                      <h3 className="font-semibold mt-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{item.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </aside>

          {/* Related News - Will expand to full width when sidebar is shorter */}
          <section className="lg:col-span-3 mt-8">
            <h2 className="text-2xl font-bold mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <span className="text-sm text-blue-600 font-medium">
                      {item.category}
                    </span>
                    <h3 className="font-semibold mt-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;

// "use client";
// import Layout from "../../../components/Layout";
// // import BackButton from "../../../components/backButton";
// import styles from "../../../styles/NewsDetail.module.css";

// const NewsDetail = () => {
//   const newsItem = {
//     id: "1",
//     title: "Breaking: Major Technology Innovation Revealed",
//     date: "March 15, 2024",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
//     image: "https://i.ytimg.com/vi/5qap5aO4i9A/sddefault.jpg",
//   };

//   const sidebarNews = [
//     {
//       id: 2,
//       title: "New Climate Change Report Released",
//       date: "March 14, 2024",
//       image: "https://source.unsplash.com/random/800x600?nature",
//     },
//     {
//       id: 3,
//       title: "Global Economic Summit Concludes",
//       date: "March 13, 2024",
//       image: "https://source.unsplash.com/random/800x600?business",
//     },
//     {
//       id: 4,
//       title: "Breakthrough in Medical Research",
//       date: "March 12, 2024",
//       image: "https://source.unsplash.com/random/800x600?health",
//     },
//   ];

//   const relatedNews = [
//     {
//       id: 5,
//       title: "Tech Giants Announce Collaboration",
//       date: "March 14, 2024",
//       image: "https://source.unsplash.com/random/800x600?tech",
//     },
//     {
//       id: 6,
//       title: "Space Exploration Milestone Reached",
//       date: "March 13, 2024",
//       image: "https://source.unsplash.com/random/800x600?space",
//     },
//     {
//       id: 7,
//       title: "New Digital Currency Regulations",
//       date: "March 12, 2024",
//       image: "https://source.unsplash.com/random/800x600?finance",
//     },
//   ];

//   return (
//     <Layout>
//       <div className={styles.detailContainer}>
//         {/* <BackButton /> */}

//         <div className={styles.mainContent}>
//           <article className={styles.newsDetail}>
//             <img
//               src={newsItem.image}
//               alt={newsItem.title}
//               className={styles.detailImage}
//             />
//             <div className={styles.metaInfo}>
//               <span className={styles.detailDate}>{newsItem.date}</span>
//               <span className={styles.readTime}>5 min read</span>
//             </div>
//             <h1 className={styles.detailTitle}>{newsItem.title}</h1>
//             <div className={styles.detailContent}>
//               <p>{newsItem.content}</p>
//               <p>Additional content paragraphs...</p>
//             </div>
//           </article>

//           <section className={styles.relatedNews}>
//             <h2 className={styles.sectionTitle}>Latest News</h2>
//             <div className={styles.relatedGrid}>
//               {relatedNews.map((item) => (
//                 <div key={item.id} className={styles.relatedCard}>
//                   <img src={item.image} alt={item.title} />
//                   <div className={styles.relatedInfo}>
//                     <h3>{item.title}</h3>
//                     <span>{item.date}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>

//         <aside className={styles.sidebar}>
//           <h2 className={styles.sectionTitle}>Relevant News</h2>
//           {sidebarNews.map((item) => (
//             <div key={item.id} className={styles.sidebarItem}>
//               <img src={item.image} alt={item.title} />
//               <div className={styles.sidebarContent}>
//                 <h3>{item.title}</h3>
//                 <span>{item.date}</span>
//               </div>
//             </div>
//           ))}
//         </aside>
//       </div>
//     </Layout>
//   );
// };

// export default NewsDetail;
