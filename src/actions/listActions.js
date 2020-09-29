const axios = require("axios").default;

export const fetchLists = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_LISTS" });
    axios
      .get("http://localhost:3001/api/v1/lists", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
      .then((data) => {
        dispatch({ type: "ADD_LISTS", lists: data.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};