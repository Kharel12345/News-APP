"use-client";
import React from "react";
import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import ArrowRight from "@mui/icons-material/ArrowRight";

const BreakingNewsCard = ({ breakingNews }) => {
   
  return (
    <Card
      sx={{
        mb: 6,
        width:"100%",
      }}
    >
      {/* Card Header */}
      <CardHeader
        sx={{
          borderBottom: 1,
          backgroundColor: "#FFF5F5",
          display: "flex",
          alignItems: "center",
          paddingBottom: 2,
        }}
        avatar={<TrendingUp sx={{ color: "#F44336", fontSize: 24 }} />}
        title={
          <Typography variant="h6" sx={{ color: "#F44336" }}>
            ब्रेकिङ समाचार
          </Typography>
        }
      />

      {/* Card Content */}
      <CardContent sx={{ maxHeight: "calc(100vh)", overflowY: "auto" }}>
        <Box sx={{ py: 2 }}>
          {breakingNews.map((news, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#FFEBEE",
                "&:hover": {
                  backgroundColor: "#FFEBEE",
                  cursor: "pointer",
                },
                borderBottom:
                  index === breakingNews.length - 1
                    ? "none"
                    : "1px solid #FFCDD2",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "#F44336", mb: 1 }}
              >
                {news.category}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <ArrowRight
                  sx={{
                    color: "#F44336",
                    fontSize: 20,
                    mt: 0.5,
                    flexShrink: 0,
                  }}
                />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  {news.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BreakingNewsCard;
