import React from "react";

const LatestNewsSection = () => {
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
        <div style={styles.item}>Middle Item 2</div>
        <div style={styles.item}>Middle Item 3</div>
        <div style={styles.item}>Middle Item 4</div>
      </div>
      <div style={styles.sideSection}>
        <div style={styles.item}>Latest News</div>
        <div style={styles.item}>Item B</div>
        <div style={styles.item}>Item C</div>
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
    padding:"10px",
    margin:"20px",
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
    padding: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "8px",
    maxHeight:"150vh",
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
