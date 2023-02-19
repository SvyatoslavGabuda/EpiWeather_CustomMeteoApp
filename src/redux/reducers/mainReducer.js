const initialState = {
  city: "",
  country: "",
  meteoOneDay: {},
  meteoFiveDays: [],
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
    case "SAVE_METEO_ONE":
      return {
        ...state,
        meteoOneDay: action.payload,
      };
    case "SAVE_METEO_FIVE":
      return {
        ...state,
        meteoFiveDays: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
