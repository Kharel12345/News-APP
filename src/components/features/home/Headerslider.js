import React from "react";

const HeaderSlider = () => {
  return (
    <>
      <div style={styles.container}>
        
        <div style={styles.imageContainer}>
          <img
            src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P7M7UBFL43RMPIVJDF2BQ5I6JA_size-normalized.jpg&w=1440" 
            alt="Slider"
            style={styles.adimage}
          />
        </div>
        
      </div>
      <div style={styles.container}>
        
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/600x300" 
            alt="Slider"
            style={styles.image}
          />
        </div>
        {/* <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="text-white bg-blue-600 px-2 py-1 rounded text-sm">{featuredNews.category}</span>
              <h1 className="text-3xl font-bold text-white mt-2">{featuredNews.title}</h1>
              <p className="text-gray-200 mt-2">{featuredNews.excerpt}</p>
            </div>
          </div>
        </Card> */}
        
      </div>
      {/* <div style={styles.container}>
        
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/600x300" 
            alt="Slider"
            style={styles.adimage}
          />
        </div>
        
      </div> */}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  
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
    height: "100px",
    objectFit: "cover",
    display: "block",
  },
};

export default HeaderSlider;
