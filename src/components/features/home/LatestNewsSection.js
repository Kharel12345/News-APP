import React from "react";
import  BreakingNewsCard  from "../../breaking";
import MainNewsSection from "../../mainnews";
const LatestNewsSection = () => {

  const breakingNews = [
    {
      category: "अर्थ",
      title: "नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी "
    },
    {
      category: "समाज",
      title: "काठमाडौंमा नयाँ यातायात व्यवस्था लागू"
    },
    {
      category: "खेलकुद",
      title: "नेपाली क्रिकेट टोली विश्वकप छनौटमा"
    },
    {
      category: "राजनीति",
      title: "मन्त्रिपरिषद् पुनर्गठन, नयाँ मन्त्रीहरू नियुक्त"
    },
    {
      category: "अर्थ",
      title: "विदेशी लगानी २०% ले बृद्धि"
    },
    {
      category: "समाज",
      title: "स्वास्थ्य सेवामा सुधार"
    }
  ];

  const mainNews = {
    अर्थ: [
      {
        title: "बैंकिङ क्षेत्रमा नयाँ नीति",
        excerpt: "वाणिज्य बैंकहरूको कार्यप्रणालीमा सुधार गर्ने उद्देश्य",
        image: "/api/placeholder/400/300"
      },
      {
        title: "पर्यटन क्षेत्रमा लगानी वृद्धि",
        excerpt: "नयाँ होटल तथा रिसोर्टहरूको निर्माण तीव्र",
        image: "/api/placeholder/400/300"
      }
    ],
    समाज: [
      {
        title: "शैक्षिक सुधार कार्यक्रम",
        excerpt: "सामुदायिक विद्यालयहरूमा नयाँ पाठ्यक्रम",
        image: "/api/placeholder/400/300"
      },
      {
        title: "स्वास्थ्य बीमा कार्यक्रम",
        excerpt: "सबै नागरिकलाई स्वास्थ्य सेवाको पहुँच",
        image: "/api/placeholder/400/300"
      }
    ],
    खेलकुद: [
      {
        title: "राष्ट्रिय खेलकुद प्रतियोगिता",
        excerpt: "विभिन्न खेलमा नयाँ कीर्तिमान",
        image: "/api/placeholder/400/300"
      }
    ]
  };
  return (
    <div style={styles.container}>
      <div style={styles.middleSection}>
        <div style={styles.headercontainer}>
          <div style={styles.imageContainer}>
            <img
              src="https://via.placeholder.com/600x300"
              alt="AD section"
              style={styles.adimage}
            />
          </div>
        </div>
        <div style={styles.item}>Genearl News in detail section </div>
        <MainNewsSection mainNews={mainNews} />
        {/* <div style={styles.item}>Middle Item 2</div>
        <div style={styles.item}>Middle Item 3</div>
        <div style={styles.item}>Middle Item 4</div> */}
      </div>
      <div style={styles.sideSection}>
        <BreakingNewsCard breakingNews={breakingNews} />
        {/* <div style={styles.item}>Latest News</div>
        <div style={styles.item}>Item B</div>
        <div style={styles.item}>Item C</div> */}
      </div>
    </div>
  );
};

const styles = {
  headercontainer: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#ffcc00",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: "10px",
    margin: "20px",
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
    height: "auto",
    objectFit: "cover",
    display: "block",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px", // Space between sections
    padding: "20px",
    backgroundColor: "#f5f5f5",
    margin: "20px auto",
    maxWidth: "90%",
  },
  sideSection: {
    flex: 1, // Equal space for side sections
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
