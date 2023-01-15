export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "08618b88d7msh4f9933d7bc93538p1c395cjsn9331ab3ba7d4", // ${process.env.REACT_APP_RAPID_API_KEY}
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const EXERCISE_DB_URL = "https://exercisedb.p.rapidapi.com/exercises";
export const BODY_PARTS_URL =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
