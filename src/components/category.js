"use-client";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const categories = ["मुख्य", "राजनीति", "अर्थ", "समाज", "खेलकुद", "मनोरञ्जन"];

const CategoryTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        width: "80%",
        overflowX: "auto",
        display: "flex", // Added flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        margin: "auto",
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
      >
        {categories.map((category, index) => (
          <Tab key={category} label={category} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTabs;
