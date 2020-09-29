const listsReducer = (state = { lists: [], loading: false }, action) => {
    switch(action.type) {
        case 'ADD_LISTS':
            return {
                ...state, 
                lists: action.lists, 
                loading: false
            }
        case 'LOADING_LISTS':
            return {
                ...state, 
                lists: [...state.lists],
                loading: true
            }
        default:
            return state
    }
}
export default listsReducer