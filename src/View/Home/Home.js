import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../Componnent/HeroSection/HeroSection";
import Header from "../../Componnent/Shared/Header/Header";
import { storeAllData } from "../../redux/Slices/specexDataSlice";
import SingleRocketData from "./../../Componnent/SingleRocketData/SingleRocketData";

const Home = () => {
  const data = useSelector((state) => state.rocketDataSlice.rocketData);
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoad(true);
    try {
      fetch(`https://api.spacexdata.com/v3/launches`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setLoad(false);
          dispatch(storeAllData(data));
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Container>
        <h2>Details</h2>
        <Grid container spacing={2} sx={{ marginBottom: 40 }}>
          {data.map((singleData, id) => (
            <SingleRocketData
              key={id}
              singleData={singleData}
            ></SingleRocketData>
          ))}
          {load && <CircularProgress sx={{ m: "0 auto" }} color="success" />}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
