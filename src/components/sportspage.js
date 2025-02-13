import Link from "next/link";
import SportsNews from "./sportsnews";
import UpcomingMatches from "./upcomingMatch";
export default function SportsPage() {
  // Sample data for news cards
  const newsData = [
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Football: Team Wins Championship",
      excerpt: "The local team clinches the title in a thrilling match.",
      category: "Football",
      date: "October 10, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Basketball: Star Player Injured",
      excerpt: "The star player is out for the season due to an injury.",
      category: "Basketball",
      date: "October 9, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Tennis: New Rising Star",
      excerpt: "A young talent emerges in the tennis world.",
      category: "Tennis",
      date: "October 8, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Football: Team Wins Championship",
      excerpt: "The local team clinches the title in a thrilling match.",
      category: "Football",
      date: "October 10, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Basketball: Star Player Injured",
      excerpt: "The star player is out for the season due to an injury.",
      category: "Basketball",
      date: "October 9, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Tennis: New Rising Star",
      excerpt: "A young talent emerges in the tennis world.",
      category: "Tennis",
      date: "October 8, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Football: Team Wins Championship",
      excerpt: "The local team clinches the title in a thrilling match.",
      category: "Football",
      date: "October 10, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Basketball: Star Player Injured",
      excerpt: "The star player is out for the season due to an injury.",
      category: "Basketball",
      date: "October 9, 2023",
    },
    {
      image:
        "https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg",
      title: "Tennis: New Rising Star",
      excerpt: "A young talent emerges in the tennis world.",
      category: "Tennis",
      date: "October 8, 2023",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-20">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {/* Top Ad Banner */}
        <div className="w-full flex justify-center my-6">
          <img
            src="https://www.nepalpress.com/wp-content/uploads/2025/02/final.png"
            alt="Ad 1"
            className="w-full h-32 md:h-40 object-cover rounded-lg"
          />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> */}
        {/* Featured Story */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2">
            <img
              src="https://sportshub.cbsistatic.com/i/r/2025/02/10/676910e0-dcf5-4813-b40a-135edffc645a/thumbnail/1200x675/2f7668cb653e84931220640d4985dd14/quinnewerstexas.jpg"
              alt="Featured Story"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="mt-4">
              <span className="bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                Breaking News
              </span>
              <h2 className="text-3xl font-bold text-black mt-2">
                Featured Story: Epic Match Ends in Tie
              </h2>
              <p className="text-gray-600 mt-2">
                पोखरा । नेपाल पुलिस क्लब पोखरामा जारी २४औं आहा रारा पोखरा
                गोल्डकप फुटबलको फाइनलमा प्रवेश गरेको छ ।पुलिसको जितमा सञ्जिव
                लामाले गोल गरे । खेलको ५८औं मिनेटमा चर्च ब्वाइजका गोलरक्षक
                टिकेन्द्र सिंह थापा झुक्किदा सञ्जिवले हानेको बल गोलमा परिणत भएको
                थियो । त्यसपछि पाएका अवसरमा गोल गर्न नसक्दा चर्च ब्वाइज
                सेमिफाइनलबाट घर फर्किनुपर्‍यो । उक्त खेलमा आहा रारा पोखरा
                <div className="w-full flex justify-center my-6">
                  <img
                    src="https://www.nepalpress.com/wp-content/uploads/2025/02/final.png"
                    alt="Ad 1"
                    className="w-full h-32 md:h-40 object-cover rounded-lg"
                  />
                </div>
                गोल्डकपको २ सय ५० औँ खेल थियो । आहा रारामा पुलिसको ५०औं खेल हो ।
                पुलिसले अब उपाधिका लागि दोस्रो सेमिफाइनलको विजेतासँग शनिबार
                खेल्नेछ । दोस्रो सेमिफाइनल खेल भोलि हुनेछ । उक्त खेलमा थ्रीस्टार
                क्लब र उज्वेकिस्तानको ब्ल्याक बुल्स एफसीले प्रतिष्पर्धा गर्नेछन्
                । सहारा क्लब पोखराको आयोजनामा भइराखेको प्रतियोगिताको विजेताले १२
                लाख १ हजार र उपविजेताले ६ लाख १ हजार रुपैयाँ प्राप्त गर्नेछ ।
              </p>
              <p className="text-gray-500 text-sm mt-2">October 10, 2023</p>
            </div>
          </div> */}

        {/* Sidebar with Trending News */}
        {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-4">Trending Now</h3>
            <ul className="space-y-4">
              {newsData.map((news, index) => (
                <li key={index} className="border-b pb-4">
                  <h4 className="text-lg font-semibold text-black">
                    {news.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{news.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <SportsNews newsData={newsData} />
        {/* Latest News Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-black mb-4">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="bg-blue-600 text-black text-sm px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mt-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{news.excerpt}</p>
                  <p className="text-gray-500 text-sm mt-2">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-Page Ad Banner */}
        <div className="w-full flex justify-center my-8">
          <img
            src="https://www.nepalpress.com/wp-content/uploads/2025/02/final.png"
            alt="Ad 2"
            className="w-full h-32 md:h-40 object-cover rounded-lg"
          />
        </div>

        {/* More Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Matches */}
          <UpcomingMatches />
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black mb-4">
              Upcoming Matches
            </h3>
            <ul className="space-y-4">
              <li className="border-b pb-4">
                <h4 className="text-lg font-semibold text-black">
                  Football: Team A vs Team B
                </h4>
                <p className="text-gray-500 text-sm">October 15, 2023</p>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-semibold text-black">
                  Basketball: Team X vs Team Y
                </h4>
                <p className="text-gray-500 text-sm">October 16, 2023</p>
              </li>
            </ul>
          </div> */}

          {/* Player Stats */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black mb-4">Top Players</h3>
            <ul className="space-y-4">
              <li className="border-b pb-4">
                <h4 className="text-lg font-semibold text-black">
                  John Doe (Football)
                </h4>
                <p className="text-gray-500 text-sm">Goals: 15 | Assists: 10</p>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-semibold text-black">
                  Jane Smith (Basketball)
                </h4>
                <p className="text-gray-500 text-sm">
                  Points: 120 | Rebounds: 50
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
