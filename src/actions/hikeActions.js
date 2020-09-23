const axios = require("axios").default;

export const fetchHikes = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_HIKES" });
    axios
      .get("http://localhost:3001/api/v1/hikes", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
      .then((data) => {
        dispatch({ type: "ADD_HIKES", hikes: data.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};
