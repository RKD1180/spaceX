import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../Componnent/HeroSection/HeroSection";
import Header from "../../Componnent/Shared/Header/Header";
import { storeAllData } from "../../redux/Slices/specexDataSlice";
import SingleRocketData from "./../../Componnent/SingleRocketData/SingleRocketData";

const Home = () => {
  const data = useSelector((state) => state.rocketDataSlice.rocketData);
  // const [rocketData,setRocketData] = useState(data)

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      fetch(`https://api.spacexdata.com/v3/launches`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(storeAllData(data));
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);
  console.log(data.length);

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Container>
        <h2>Details</h2>
        <Grid container spacing={2}>
          {data.map((singleData, id) => (
            <SingleRocketData
              key={id}
              singleData={singleData}
            ></SingleRocketData>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
