import * as types from "./types";
export const addInstractorReducer = (
  state = {
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.ADD_INSTRACTOR_REQUEST:
      return { loading: true, success: false, error: null };
    case types.ADD_INSTRACTOR_SUCCESS:
      return { loading: false, success: true, error: null };
    case types.ADD_INSTRACTOR_FAILURE:
      return { loading: false, success: false, error: action.payload };
    case types.ADD_INSTRACTOR_RESET:
      return { loading: false, success: false, error: null };
  }
  return state;
};

export const fetchInstractorsReducer = (
  state = {
    loading: false,
    data: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.FETCH_INSTRACTORS_REQUEST:
      return { loading: true, data: [], error: null };
    case types.FETCH_INSTRACTORS_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case types.FETCH_INSTRACTORS_FAILURE:
      return { loading: false, data: [], error: action.payload };
    case types.FETCH_INSTRACTORS_RESET:
      return { loading: false, data: [], error: null };
  }
  return state;
};


export const fetchSingleInstractor = (
  state = {
    loading: false,
    data: null,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.FETCH_SINGLE_INSTRACTOR_REQUEST:
      return { loading: true, data: null,  error: null };
    case types.FETCH_SINGLE_INSTRACTOR_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case types.FETCH_SINGLE_INSTRACTOR_FAILURE:
      return { loading: false, data: null, error: action.payload };
    case types.FETCH_SINGLE_INSTRACTOR_RESET:
      return { loading: false, data: null, error: null };
  }
  return state;
};
