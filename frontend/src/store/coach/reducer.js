import * as types from "./types";
export const addCoachReducer = (
  state = {
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.ADD_COACH_REQUEST:
      return { loading: true, success: false, error: null };
    case types.ADD_COACH_SUCCESS:
      return { loading: false, success: true, error: null };
    case types.ADD_COACH_FAILURE:
      return { loading: false, success: false, error: action.payload };
    case types.ADD_COACH_RESET:
      return { loading: false, success: false, error: null };
  }
  return state;
};

export const fetchCoachesReducer = (
  state = {
    loading: false,
    data: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.FETCH_COACHES_REQUEST:
      return { loading: true, data: [], error: null };
    case types.FETCH_COACHES_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case types.ADD_COACH_FAILURE:
      return { loading: false, data: [], error: action.payload };
    case types.ADD_COACH_RESET:
      return { loading: false, data: [], error: null };
  }
  return state;
};

export const fetchSingleCoachReducer = (
  state = {
    loading: false,
    data: null,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.FETCH_SINGLE_COACH_REQUEST:
      return { loading: true, data: null, error: null };
    case types.FETCH_SINGLE_COACH_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case types.FETCH_SINGLE_COACH_FAILURE:
      return { loading: false, data: null, error: action.payload };
    case types.FETCH_SINGLE_COACH_RESET:
      return { loading: false, data: null, error: null };
  }
  return state;
};
