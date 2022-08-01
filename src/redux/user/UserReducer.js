import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./UserTypes";

const initialUserState = {
  loading: false,
  error: "",
  data: [],
};
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    case FETCH_USER_SUCCESS:
      return { loading: false, error: "", data: action.payload };

    default:
      return state;
  }
};
