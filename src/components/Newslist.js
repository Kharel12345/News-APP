import Link from "next/link";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const NewsList = ({ news }) => {
  return (
    <Grid container spacing={3}>
      {news.map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{article.title}</Typography>
              <Typography variant="body2">{article.description}</Typography>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;
