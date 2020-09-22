const axios = require('axios').default;

export const fetchHikes = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_HIKES'})
      axios.get("http://localhost:3001/api/v1/hikes").then(data => {
        // handle success
        dispatch({ type: 'ADD_HIKES', hikes: data.data })
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  }
