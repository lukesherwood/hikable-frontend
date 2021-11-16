const hikesReducer = (
  state = { hikes: [], loading: false, page: "1", pages: "1" },
  action
) => {
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
        loading: true,
      };
    case "SEARCH_HIKES":
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
      };
    case "SET_QUERY":
      return {
        ...state,
        filterData: action.data.filterData,
      };
    case "ADD_HIKE":
      return {
        ...state,
        hikes: [...state.hikes, action.hike],
        loading: false,
      };
    case "SET_HIKE":
      return {
        ...state,
        hike: action.hike
      }
    case "ADD_REVIEW":
      const hikeIndex = state.hikes[0].findIndex(
        (hike) => hike.id === action.hike.id
      );
      const array = [...state.hikes];
      array[hikeIndex] = action.hike;
      return {
        ...state,
        loading: false,
        hikes: array,
      };
    default:
      return state;
  }
};
export default hikesReducer;
