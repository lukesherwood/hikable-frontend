const hikesReducer = (state = { hikes: []}, action) => {
    switch(action.type) {
        case 'ADD_HIKES':
            return {
                ...state, 
                hikes: action.hikes
            }
        default:
            return state
    }
}
export default hikesReducer