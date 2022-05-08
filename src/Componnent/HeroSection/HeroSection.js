import { Container, Grid, Box } from "@mui/material";
import React from "react";
import rocket from "../../asset/image/rocket.svg";

const HeroSection = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "#010b1f",
          color: "white",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Grid item xs={12} md={6}>
          <Container maxWidth={"sm"}>
            <Box sx={{ mt: { xs: 10 } }}>
              <h3
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 15 }}
              >
                Welcome To SpaceX Center
              </h3>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginTop: 0,
                  paddingTop: 0,
                  paddingBottom: 25,
                }}
              >
                In this website you can get all the data about SpaceX.
              </p>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 10, mb: 10 }}>
          <img src={rocket} height={350} width={"100%"} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
