export const fetchUsers = data => {
    console.log(data, "userdata")
    return (dispatch) => {
      return fetch("http://localhost:3001/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: data
        })
    }).then(response => {
        return response.json()
      }).then(data => {
        console.log(data, "data from server")
        return dispatch({ type: 'ADD_USER', user: data })
      })
    }
  }
