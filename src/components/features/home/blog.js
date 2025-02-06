import React, { useState } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Link } from "lucide-react";

const NewsGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const newsItems = [
    {
      title: "गीतकार कालीप्रसाद बास्कोटालाई थाहा थियो",
      description:
        "'जालमा' दर्शकको मुखैमा झुन्डिएको गीत हो। 'पारि त्यो डाँडामा घाम लाग्यो घमाइलो...' भन्ने स्थायी त दर्शकका मनमस्तिष्कमा यसरी स्थायी बनेर बस्यो कि १ वर्षपछि पनि सबैलाई गीतका स्थायीदेखि अन्तरासम्म कन्ठ छ । यही पहिलो रेकर्डिङ (सोलो) ले नै कालीलाई साँगीतिक क्षेत्रमा स्थापित गरायो।",
      image:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P7M7UBFL43RMPIVJDF2BQ5I6JA_size-normalized.jpg&w=1440",
    },
    {
      title: "खुल्ने छन् लोकिक तथा यौनिक अल्पसंख्यक",
      description: "Second news description",
    },
    {
      title: "पलेटीमा नयाँ पुस्ताको प्रस्तुति",
      description: "Third news description",
    },
    {
      title: "खुल्ने छन् लोकिक तथा यौनिक अल्पसंख्यक",
      description:
        "नेपालमा लैङ्गिक तथा यौनिक अल्पसंख्यकहरूको अधिकार र पहिचानको विषयमा चर्चा",
    },
    {
      title: "पलेटीमा नयाँ पुस्ताको प्रस्तुति",
      description: "युवा कलाकारहरूको नयाँ प्रतिभा प्रदर्शन कार्यक्रम",
    },
    {
      title: "साहित्यिक समारोहमा नवीन प्रतिभाहरूको उदय",
      description: "नयाँ लेखक तथा कविहरूको रचना प्रस्तुति",
    },
    {
      title: "नेपाली चलचित्र क्षेत्रमा नयाँ प्रविधिको प्रयोग",
      description: "डिजिटल प्रविधिको माध्यमबाट नेपाली फिल्म उद्योगमा क्रान्ति",
    },
    {
      title: "संगीत क्षेत्रमा नयाँ प्रयोग",
      description: "परम्परागत र आधुनिक संगीतको फ्युजन",
    },
    {
      title: "कला प्रदर्शनीमा युवा कलाकारको सहभागिता",
      description: "समकालीन कला र परम्परागत शैलीको संगम",
    },
    {
      title: "नृत्य कला: परम्परा र आधुनिकताको मिश्रण",
      description: "नेपाली नृत्य कलामा नवीन प्रयोगहरू",
    },
    {
      title: "रंगमञ्च: नयाँ प्रयोग र प्रस्तुति",
      description: "आधुनिक नेपाली नाटकको विकास र प्रस्तुति",
    },
    {
      title: "सांस्कृतिक विरासतको संरक्षण",
      description: "नयाँ पुस्ताद्वारा परम्परागत कला र संस्कृतिको जगेर्ना",
    },
  ];

  // Show only the first 10 news items if showAll is false
  const displayedNews = showAll ? newsItems : newsItems.slice(0, 10);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <CardHeader
        sx={{
          borderBottom: 1,
          borderColor: "#E0E0E0",
          display: "flex",
          alignItems: "center",
          bgcolor: "#E0E0E0",
          minHeight: 50,
        }}
        avatar={<TrendingUp sx={{ color: "#F44336", fontSize: 26 }} />}
        title={
          <Typography
            variant="h6"
            sx={{ color: "#F44336", fontWeight: "bold", fontSize: 18 }}
          >
            writer समाचार
          </Typography>
        }
      />

      {displayedNews.map((item, index) =>
        index === 0 ? (
          // Featured layout for first item
          <div key={index} className="w-full overflow-hidden">
            <CardContent className="p-6 flex gap-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-1/3 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4 text-black">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </CardContent>
          </div>
        ) : (
          // Simple layout for other items
          <div key={index} className="w-full">
            <h2 className="text-lg font-semibold text-black">
              {item.title} <ArrowRight sx={{ color: "black", fontSize: 24 }} />
            </h2>
            <hr className="my-2 border-gray-400 border-1" />
          </div>
        )
      )}

      {/* Show "Read More" button if more than 10 news items */}
      {!showAll && newsItems.length > 10 && (
      <div className="flex justify-center">
      <a href="/news" className="text-black font-bold hover:underline">
        Read More
      </a>
    </div>
    
      )}
    </div>
  );
};

export default NewsGrid;
