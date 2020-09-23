const usersReducer = (state = { user: "", loggedIn: false }, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                loggedIn: true,
                user: {...action.payload}
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        default:
            return state
    }
}
export default usersReducer