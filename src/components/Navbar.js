import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import {
  Bell,
  Menu,
  Search,
  TrendingUp,
  Clock,
  Sun,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import CategoryTabs from "./category"; // Assuming CategoryTabs is a component for the categories

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Logo Section */}
      {!isScrolled && (
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: !isScrolled ? "white" : "transparent",
            boxShadow: !isScrolled ? 1 : "none",
            top: 0,
            left: 0,
            right: 0,
            transition: "all 0.3s ease",
            zIndex: 10,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                justifyContent: "center",
                padding: "16px 0",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: !isScrolled ? "primary.main" : "white",
                  fontSize: !isScrolled ? "1.5rem" : "2rem",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="flex items-center justify-between h-20 border-b">
                  <div className="flex items-center space-x-8">
                    <Menu className="h-6 w-6 lg:hidden" />
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      नेपाल समाचार
                    </span>
                  </div>
                </div>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      )}

      {/* Navigation Bar Section */}
      <AppBar
        position="fixed"
        sx={{
          top: !isScrolled ? "80px" : "0px", // Adjust this to position below the logo (height of the logo bar)
          backgroundColor: "white",
          boxShadow: isScrolled ? 1 : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between", // Space between logo and menu
              padding: "8px 0",
            }}
          >
            {/* Company Logo */}
            {isScrolled ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="flex items-center justify-between h-20 border-b">
                    <div className="flex items-center space-x-8">
                      <Menu className="h-6 w-6 lg:hidden" />
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        नेपाल समाचार
                      </span>
                    </div>
                  </div>
                </Typography>
              </Box>
            ) : (
              <Box></Box>
            )}

            {/* Navigation Tabs (Category) */}
            <CategoryTabs />

            {/* Login Button */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button color={!isScrolled ? "primary" : "primary"}>Login</Button>
            </Box>
          </Toolbar>
        </Container>
        <div className="bg-gray-900 text-white py-2">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>आइतबार, चैत्र १५, २०८०</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>काठमाडौं</span>
        </div>
        <div className="flex items-center">
          <Sun className="h-4 w-4 mr-1" />
          <span>२३° से</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <Facebook className="h-4 w-4 hover:text-blue-400 cursor-pointer" />
          <Twitter className="h-4 w-4 hover:text-blue-400 cursor-pointer" />
          <Youtube className="h-4 w-4 hover:text-red-500 cursor-pointer" />
        </div>
        <div className="border-l border-gray-600 pl-4">
          <select className="bg-transparent text-sm outline-none cursor-pointer">
            <option value="ne">नेपाली</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
      </AppBar>

      {/* Bottom Info Bar */}
      {/* <div className="bg-gray-900 text-white py-2">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>आइतबार, चैत्र १५, २०८०</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>काठमाडौं</span>
        </div>
        <div className="flex items-center">
          <Sun className="h-4 w-4 mr-1" />
          <span>२३° से</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <Facebook className="h-4 w-4 hover:text-blue-400 cursor-pointer" />
          <Twitter className="h-4 w-4 hover:text-blue-400 cursor-pointer" />
          <Youtube className="h-4 w-4 hover:text-red-500 cursor-pointer" />
        </div>
        <div className="border-l border-gray-600 pl-4">
          <select className="bg-transparent text-sm outline-none cursor-pointer">
            <option value="ne">नेपाली</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div> */}

    </>
  );
};

export default Navbar;
