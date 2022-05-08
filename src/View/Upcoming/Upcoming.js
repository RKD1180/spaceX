/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import SingleRocketData from "../../Componnent/SingleRocketData/SingleRocketData";
import { Box, Container, Grid, Stack, Switch, Typography } from "@mui/material";
import { searchData } from "../../redux/Slices/specexDataSlice";
import { useDispatch } from "react-redux";

const Upcoming = () => {
  const data = useSelector((state) => state.rocketDataSlice.rocketData);
  const getData = useSelector((state) => state.rocketDataSlice.searchData);
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const filterData = data.filter((sD) => sD.upcoming === checked);
    dispatch(searchData(filterData));
  }, [checked]);
  return (
    <Container>
      <Box sx={{ marginTop: 10 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Not Upcoming</Typography>

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography>Upcoming</Typography>
        </Stack>
      </Box>
      <Grid container spacing={2} sx={{ marginBottom: 40, marginTop: 5 }}>
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

export default Upcoming;
