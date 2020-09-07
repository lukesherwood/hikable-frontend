export default function hikesReducer(state = {
    hikes: [], loading: false}
    , action) {
    switch(action.type) {
        case 'LOADING_HIKES':
            return {
                ...state, 
                hikes: [state.hikes], 
                loading: true
            }
        case 'ADD_HIKES':
            return {
                ...state, 
                hikes: action.hikes,
                loading: false
            }
        default:
            return state
    }
}
