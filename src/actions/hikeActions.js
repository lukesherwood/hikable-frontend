export const fetchHikes = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_HIKES'})
      fetch("http://localhost:3001/hikes").then(response => {
        return response.json()
      }).then(data => {
        dispatch({ type: 'ADD_HIKES', hikes: data })
      })
    }
  }