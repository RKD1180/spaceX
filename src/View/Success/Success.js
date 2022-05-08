/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import SingleRocketData from "../../Componnent/SingleRocketData/SingleRocketData";
import { Container, Grid } from "@mui/material";
import { searchData } from "../../redux/Slices/specexDataSlice";
import { useDispatch } from "react-redux";
const Success = () => {
  const data = useSelector((state) => state.rocketDataSlice.rocketData);
  const getData = useSelector((state) => state.rocketDataSlice.searchData);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterData = data.filter((sD) => sD.launch_success !== false);
    dispatch(searchData(filterData));
  }, []);

  return (
    <Container>
      <Grid container spacing={2} sx={{ marginBottom: 40, marginTop: 10 }}>
        {getData.length > 0 ? (
          getData.map((singleData, id) => (
            <SingleRocketData
              key={id}
              singleData={singleData}
            ></SingleRocketData>
          ))
        ) : (
          <>
            <h2>No Data Found</h2>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Success;
