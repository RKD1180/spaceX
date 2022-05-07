/* eslint-disable react/prop-types */
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SingleRocketData = ({ singleData }) => {
  //   console.log(singleData);
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card sx={{ maxWidth: 345, mb: 5 }}>
        <CardMedia
          component="img"
          height="240"
          image={singleData.links?.mission_patch}
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {singleData.rocket?.rocket_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {singleData.details?.slice(0, 45)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleRocketData;
