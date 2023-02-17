const initialState = {
  city: "",
  country: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "SAVE_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
