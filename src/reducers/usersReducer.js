const usersReducer = (state = { user: "", loading: false }, action) => {
    switch(action.type) {
        case 'CREATING_USER':
            return {
                ...state, 
                // lists: action.lists, 
                loading: true
            }
        case 'ADD_USER':
            return {
                ...state, 
                user: action.user,
                loading: false
            }
        default:
            return state
    }
}
export default usersReducer