const hikesReducer = (state = { hikes: [], loading: false, page: "1", pages: "1" }, action) => {
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
        hikes: [state.hikes],
        loading: true,
      };
    case "SEARCH_HIKES":
      return {
        ...state,
        searchHikes: action.hikes,
        loading: false,
      };
    case "FILTER_BY_DIFFICULTY":
      return {
        ...state,
        searchHikes: action.hikes,
        loading: false,
      };
    case "SET_PAGES":
      return {
        ...state,
        page: action.data.page,
        pages: action.data.pages,
        loading: false,
      };
    default:
      return state;
  }
};
export default hikesReducer;
