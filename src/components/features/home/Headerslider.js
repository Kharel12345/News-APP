import React from "react";

const HeaderSlider = () => {
  return (
    <>
      <div style={styles.container}>
        
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/600x300" 
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

export default HeaderSlider;
