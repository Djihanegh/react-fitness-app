import React, { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import {
  exerciseOptions,
  fetchData,
  EXERCISE_DB_URL,
} from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(EXERCISE_DB_URL, exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipement.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      console.log(exercisesData);
    }
  };
  return (
    <Stack alignItems={"center"} mt={"37px"} justifyContent="center" p="20px">
      <Typography
        fontWeight={"700"}
        sw={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>

      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },

            width: {
              lg: "800px",
              xs: "300px",
            },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type={"text"}
        ></TextField>

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "relative",

            right: 0,
            ml: 1,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
