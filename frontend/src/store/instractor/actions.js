import * as types from "./types";
import axios from "../../utils/axios";
export const addInstractor = (data) => async (dispatch) => {
  try {
    const response =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    const token = response.token;
    dispatch({ type: types.ADD_INSTRACTOR_REQUEST });
    await axios.post("/instructors", data, {
      headers: {
        autorization: token,
      },
    });
    dispatch({ type: types.ADD_INSTRACTOR_SUCCESS });
  } catch (e) {
    dispatch({ type: types.ADD_INSTRACTOR_FAILURE, payload: e.message });
  }
};

export const fetchInstractors = (education) => async (dispatch) => {
  try {
    const response =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    const token = response.token;
    dispatch({ type: types.FETCH_INSTRACTORS_REQUEST });
    const instractors = await axios.get(`/instructors?education=${education || ""}`, {
      headers: {
        autorization: token,
      },
    });
    dispatch({ type: types.FETCH_INSTRACTORS_SUCCESS, payload: instractors.data });
  } catch (e) {
    dispatch({ type: types.FETCH_INSTRACTORS_FAILURE, payload: e.message });
  }
};

export const fetchSingleInstractor = (id) => async (dispatch) => {
  try {
    const response =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    const token = response.token;
    dispatch({ type: types.FETCH_SINGLE_INSTRACTOR_REQUEST });
    const instractor = await axios.get(`/instructors/${id}`, {
      headers: {
        autorization: token,
      },
    });
    dispatch({ type: types.FETCH_SINGLE_INSTRACTOR_SUCCESS, payload: instractor.data });
  } catch (e) {
    dispatch({ type: types.FETCH_SINGLE_INSTRACTOR_FAILURE, payload: e.message });
  }
};


export const resetInstractor = ()=>({
  type: types.FETCH_SINGLE_INSTRACTOR_RESET

})

export const resetInstractors = ()=>({
  type: types.FETCH_INSTRACTORS_RESET

})
export const resetAddInstractor = () => ({
  type: types.ADD_INSTRACTOR_RESET,
});
