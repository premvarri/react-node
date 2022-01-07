export const initialState = {
  sideCollapse: false,
  isLoggedin: false,
  token: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETTOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }

    case "SETCOLLAPSE": {
      return {
        ...state,
        sideCollapse: action.sideCollapse,
      };
    }
    case "SETLOGIN": {
      return {
        ...state,
        isLoggedin: action.isLoggedin,
      };
    }
    default:
      return state;
  }
};
export default reducer;
