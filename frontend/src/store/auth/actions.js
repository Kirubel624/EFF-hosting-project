import axios from "../../utils/axios";
import * as types from "./types";
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    const data = await axios.post("/login", { username, password });
    localStorage.setItem("user", JSON.stringify(data.data));
    dispatch({ type: types.LOGIN_SUCCESS, payload: data.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: types.LOGIN_FAILURE, payload: e.message });
  }
};

export const resetLogin = () => ({
  type: types.LOGIN_RESET,
});
