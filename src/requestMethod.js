import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTZlNzk5NzcxODMyMTU2YjkzZDVjMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTg4MjY1MSwiZXhwIjoxNjUwMzE0NjUxfQ.WbE68ZL3tIDoFYMcFTDV6gx93pDOvvg-x84fPkRn2Ao";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
