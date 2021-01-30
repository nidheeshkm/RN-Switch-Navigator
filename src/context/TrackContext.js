import createDataContext from "./createDataContext";
import axios from "../api/axios";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await axios.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};
const createTracks = (dispatch) => async (name, locations) => {
  await axios.post("/tracks", { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTracks },
  []
);
