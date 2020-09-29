const listsReducer = (state = { lists: [], loading: false, error: "" }, action) => {
    switch(action.type) {
        case 'ADD_LISTS':
            return {
                ...state, 
                lists: action.lists, 
                loading: false,
                error: ''
            }
        case 'LOADING_LISTS':
            return {
                ...state, 
                lists: [...state.lists],
                loading: true
            }
        case 'ERROR_LOADING':
            return {
                ...state, 
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
export default listsReducer