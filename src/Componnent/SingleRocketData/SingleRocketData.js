/* eslint-disable react/prop-types */
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Moment from "react-moment";
import YouTubeIcon from "@mui/icons-material/YouTube";

import LanguageIcon from "@mui/icons-material/Language";

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
          <p style={{ marginTop: 5, marginBottom: 0, padding: 0 }}>
            <span style={{ fontWeight: "bold" }}>Launch Date: </span>
            <Moment format="YYYY-MM-DD">{singleData.launch_date_utc}</Moment>
          </p>
          <p style={{ marginTop: 5, marginBottom: 0, padding: 0 }}>
            <span style={{ fontWeight: "bold" }}>Launch Success: </span>
            {singleData.launch_success ? (
              <span
                style={{
                  backgroundColor: "#088028",
                  color: "white",
                  padding: "2px 8px 5px 8px",
                  borderRadius: 10,
                }}
              >
                Yes
              </span>
            ) : (
              <span
                style={{
                  backgroundColor: "#ab091b",
                  color: "white",
                  padding: "2px 8px 5px 8px",
                  borderRadius: 10,
                }}
              >
                No
              </span>
            )}
          </p>
          {!singleData.launch_success && (
            <p style={{ marginTop: 5, marginBottom: 0, padding: 0 }}>
              <span style={{ fontWeight: "bold" }}>Reason: </span>
              {singleData.launch_failure_details?.reason?.slice(0, 30)} ...
            </p>
          )}
        </CardContent>
        <CardActions>
          <a
            href={singleData.links.video_link}
            rel="noreferrer"
            target="_blank"
            style={{ color: "#FF0000" }}
          >
            <YouTubeIcon color="#FF0000" style={{ fontSize: 40 }} />
          </a>
          <a
            href={singleData.links.wikipedia}
            rel="noreferrer"
            target="_blank"
            style={{ color: "black" }}
          >
            <LanguageIcon color="black" style={{ fontSize: 30 }} />
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleRocketData;
