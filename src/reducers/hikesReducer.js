const hikesReducer = (state = { hikes: [], loading: false }, action) => {
  switch (action.type) {
    case "ADD_HIKES":
      return {
        ...state,
        hikes: action.hikes,
        loading: false,
      };
    case "LOADING_HIKES":
      return {
        ...state,
        hikes: [...state.hikes],
        loading: true,
      };
    case "SEARCH_HIKES":
      return {
        ...state,
        searchHikes: action.hikes,
        loading: false,
      };
    default:
      return state;
  }
};
export default hikesReducer;
