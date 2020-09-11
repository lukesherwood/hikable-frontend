export const fetchLists = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_LISTS'})
      fetch("http://localhost:3001/lists").then(response => {
        return response.json()
      }).then(data => {
        dispatch({ type: 'ADD_LISTS', lists: data })
      })
    }
  }