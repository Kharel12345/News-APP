import React from 'react';
import { Grid, Card, CardHeader, CardContent, CardActions, Typography, Button, Divider, Box } from '@mui/material';
import { AccessTime as Clock } from '@mui/icons-material';

const MainNewsSection = ({ mainNews }) => {
  return (
    <Grid  spacing={2} sx={{ width: '100%', margin: 0 }}> {/* Ensure no margin */}
      {/* Main News Content - 3/4 width */}
      <Grid  xs={12} lg={9} sx={{ width: '100%', padding: 0 }}> {/* Ensure no padding */}
        {Object.entries(mainNews).map(([section, news]) => (
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
            <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}> {/* Ensure no margin */}
              {news.map((item, index) => (
                <Grid item xs={12} key={index} sx={{ width: '100%', padding: 0 }}> {/* Ensure no padding */}
                  <Card sx={{ 
                    
                    width: '100%', 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' } // Stack on small screens, row on larger screens
                  }}>
                    {/* Image on the left */}
                    <Box sx={{ 
                      width: { xs: '100%', sm: '30%' }, // Full width on small screens, 30% on larger screens
                      minWidth: '200px', 
                      height: { xs: '200px', sm: 'auto' } // Fixed height on small screens
                    }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>

                    {/* Text content on the right */}
                    <Box sx={{ 
                      width: { xs: '100%', sm: '70%' }, // Full width on small screens, 70% on larger screens
                      padding: 2 
                    }}>
                      <CardHeader
                        title={
                          <Typography variant="h6" sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
                            {item.title}
                          </Typography>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {item.excerpt}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                          <Clock sx={{ fontSize: 16, mr: 1 }} />
                          <Typography variant="body2">१० मिनेट अघि</Typography>
                        </Box>
                        <Button variant="text" size="small">
                          थप पढ्नुहोस् →
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default MainNewsSection;