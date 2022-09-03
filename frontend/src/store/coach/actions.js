import * as types from "./types";
import axios from "../../utils/axios";
export const addCoach = (data) => async (dispatch) => {
  try {
    const response =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    const token = response.token;
    dispatch({ type: types.ADD_COACH_REQUEST });
    await axios.post("/coaches", data, {
      headers: {
        autorization: token,
      },
    });
    dispatch({ type: types.ADD_COACH_SUCCESS });
  } catch (e) {
    dispatch({ type: types.ADD_COACH_FAILURE, payload: e.message });
  }
};

export const fetchCoaches =
  (education = "") =>
  async (dispatch) => {
    try {
      const response =
        localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user"));
      const token = response.token;
      dispatch({ type: types.FETCH_COACHES_REQUEST });
      const coaches = await axios.get(`/coaches?education=${education || ""}`, {
        headers: {
          autorization: token,
        },
      });
      console.log(coaches.data);
      dispatch({ type: types.FETCH_COACHES_SUCCESS, payload: coaches.data });
    } catch (e) {
      dispatch({ type: types.FETCH_COACHES_FAILURE, payload: e.message });
    }
  };

export const fetchSingleCoach = (id) => async (dispatch) => {
  try {
    const response =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    const token = response.token;
    dispatch({ type: types.FETCH_SINGLE_COACH_REQUEST });
    const coach = await axios.get(`/coaches/${id}`, {
      headers: {
        autorization: token,
      },
    });
    console.log(coach);
    dispatch({ type: types.FETCH_SINGLE_COACH_SUCCESS, payload: coach.data });
  } catch (e) {
    dispatch({ type: types.FETCH_SINGLE_COACH_FAILURE, payload: e.message });
  }
};

export const resetAddCoach = () => ({
  type: types.ADD_COACH_RESET,
});

export const resetCoaches = () => ({
  type: types.FETCH_COACHES_RESET,
});

export const resetCoach = () => ({
  type: types.FETCH_SINGLE_COACH_RESET,
});
