import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
  Box,
} from "@mui/material";
import { AccessTime as Clock } from "@mui/icons-material";
import { fetchNews } from "../lib/api";
import Link from 'next/link';

const MainNewsSection = ({ mainNews }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const articles = await fetchNews();
      setNews(articles);
    };
    getNews();
  }, []);

  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };
  return (
    <Grid spacing={2} sx={{ width: "100%", margin: 0 }}>
      <Grid xs={12} lg={9} sx={{ width: "100%", padding: 0 }}>
        {news.slice(0, visibleCount).map((item, index) => (
          
          <Link href={`/news/1`} key={item.id} passHref>
            <Grid
              item
              xs={12}
              key={index}
              sx={{ width: "100%", padding: "10px" }}
            >
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                {/* Image on the left */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "30%" },
                    minWidth: "200px",
                    height: { xs: "200px", sm: "auto" },
                    padding: "10px",
                  }}
                >
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Text content on the right */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "70%" },
                    padding: 2,
                  }}
                >
                  <CardHeader
                    title={
                      <Typography
                        variant="h6"
                        sx={{
                          "&:hover": { color: "primary.main" },
                          cursor: "pointer",
                        }}
                      >
                        {item.title}
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <Clock sx={{ fontSize: 16, mr: 1 }} />
                      <Typography variant="body2">
                        {" "}
                        {item.publishedAt}
                      </Typography>
                    </Box>
                    <Button variant="text" size="small">
                      थप पढ्नुहोस् →
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          </Link>
        ))}
        {/* {Object.entries(mainNews).map(([section, news]) => (
          <Box key={section} sx={{  width: '100%' }}>
            {/* Section Header */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {section}
              </Typography>
              <Divider sx={{ flexGrow: 1, mx: 4 }} />
              <Button variant="outlined" size="small">
                सबै हेर्नुहोस्
              </Button>
            </Box> */}

        {/* News Cards - single row with full width */}
        {news.length > visibleCount && (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button variant="contained" onClick={handleLoadMore}>
              Read More
            </Button>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default MainNewsSection;

{
  /* <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>  */
}
// {news.map((item, index) => (
//   // <Grid item xs={12} key={index} sx={{ width: '100%', padding: 0 }}>
//     <Card sx={{

//       width: '100%',
//       display: 'flex',
//       flexDirection: { xs: 'column', sm: 'row' } // Stack on small screens, row on larger screens
//     }}>
//       {/* Image on the left */}
//       <Box sx={{
//         width: { xs: '100%', sm: '30%' }, // Full width on small screens, 30% on larger screens
//         minWidth: '200px',
//         height: { xs: '200px', sm: 'auto' } // Fixed height on small screens
//       }}>
//         <img
//           src={item.image}
//           alt={item.title}
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//       </Box>

//       <Box sx={{
//         width: { xs: '100%', sm: '70%' }, // Full width on small screens, 70% on larger screens
//         padding: 2
//       }}>
//         <CardHeader
//           title={
//             <Typography variant="h6" sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
//               {item.title}
//             </Typography>
//           }
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {item.excerpt}
//           </Typography>
//         </CardContent>
//         <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
//             <Clock sx={{ fontSize: 16, mr: 1 }} />
//             <Typography variant="body2">१० मिनेट अघि</Typography>
//           </Box>
//           <Button variant="text" size="small">
//             थप पढ्नुहोस् →
//           </Button>
//         </CardActions>
//       </Box>
//     </Card>
//   </Grid>
// ))}
// </Grid>
// </Box>
// ))}
