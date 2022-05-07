/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import SingleRocketData from "../../Componnent/SingleRocketData/SingleRocketData";
import { Container, Grid } from "@mui/material";
import { searchData } from "../../redux/Slices/specexDataSlice";
import { useDispatch } from "react-redux";

const SearchItem = () => {
  const { item } = useParams();
  const data = useSelector((state) => state.rocketDataSlice.rocketData);
  const getSearchData = useSelector(
    (state) => state.rocketDataSlice.searchData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const filterData = data.filter(
      (sD) =>
        sD.rocket.rocket_name.toLocaleLowerCase() === item.toLocaleLowerCase()
    );
    dispatch(searchData(filterData));
  }, [item]);

  return (
    <Container>
      <Grid container spacing={2} sx={{ marginBottom: 40, marginTop: 10 }}>
        {getSearchData.length > 0 ? (
          getSearchData.map((singleData, id) => (
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

export default SearchItem;
