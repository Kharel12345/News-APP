import React from "react";
import BreakingNewsCard from "../../breaking";
import MainNewsSection from "../../mainnews";
import { margin } from "@mui/system";

const LatestNewsSection = () => {
  const breakingNews = [
    {
      category: "अर्थ",
      title: "नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी ",
    },
    {
      category: "समाज",
      title: "काठमाडौंमा नयाँ यातायात व्यवस्था लागू",
    },
    {
      category: "खेलकुद",
      title: "नेपाली क्रिकेट टोली विश्वकप छनौटमा",
    },
    {
      category: "राजनीति",
      title: "मन्त्रिपरिषद् पुनर्गठन, नयाँ मन्त्रीहरू नियुक्त",
    },
    {
      category: "अर्थ",
      title: "विदेशी लगानी २०% ले बृद्धि",
    },
    {
      category: "समाज",
      title: "स्वास्थ्य सेवामा सुधार",
    },
  ];

  const mainNews = {
    अर्थ: [
      {
        title: "बैंकिङ क्षेत्रमा नयाँ नीति",
        excerpt: "वाणिज्य बैंकहरूको कार्यप्रणालीमा सुधार गर्ने उद्देश्य",
        image: "/api/placeholder/400/300",
      },
      {
        title: "पर्यटन क्षेत्रमा लगानी वृद्धि",
        excerpt: "नयाँ होटल तथा रिसोर्टहरूको निर्माण तीव्र",
        image: "/api/placeholder/400/300",
      },
    ],
    समाज: [
      {
        title: "शैक्षिक सुधार कार्यक्रम",
        excerpt: "सामुदायिक विद्यालयहरूमा नयाँ पाठ्यक्रम",
        image: "/api/placeholder/400/300",
      },
      {
        title: "स्वास्थ्य बीमा कार्यक्रम",
        excerpt: "सबै नागरिकलाई स्वास्थ्य सेवाको पहुँच",
        image: "/api/placeholder/400/300",
      },
    ],
    खेलकुद: [
      {
        title: "राष्ट्रिय खेलकुद प्रतियोगिता",
        excerpt: "विभिन्न खेलमा नयाँ कीर्तिमान",
        image: "/api/placeholder/400/300",
      },
    ],
  };
  return (
    <div style={styles.container}>
      <div style={styles.middleSection}>
      <h1
          style={{
            margin: "0 0 10px 0",
            color: "#2c3e50",
            fontSize: "28px",
            fontWeight: "800",
            fontFamily: '"Georgia", serif',
            lineHeight: "1.2",
          }}
        >
          विशेष समाचार
        </h1>
        <div style={styles.headercontainer}>
          <div style={styles.imageContainer}>
            <img
              src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P7M7UBFL43RMPIVJDF2BQ5I6JA_size-normalized.jpg&w=1440
"
              alt="AD section"
              style={styles.adimage}
            />
          </div>
        </div>


       

        <MainNewsSection mainNews={mainNews} />
      
      </div>
      <div style={styles.sideSection}>
        <BreakingNewsCard breakingNews={breakingNews} />
      </div>
    </div>
  );
};

const styles = {
  headercontainer: {
    width: "100%",
   margin:"20px",
    backgroundColor: "#ffcc00",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
    height: "100px",
    objectFit: "cover",
    display: "block",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px", 
    padding: "20px",
    backgroundColor: "#f5f5f5",
    margin: "20px auto",
    maxWidth: "90%",
  },
  sideSection: {
    flex: 1, 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "#e0e0e0",
    borderRadius: "8px",
    maxHeight: "150vh",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  middleSection: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#d0d0d0",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  item: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "black",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
  },
};

export default LatestNewsSection;
