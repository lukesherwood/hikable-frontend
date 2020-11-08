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
        case 'ADD_LIST':
            return {
                ...state,
                loading: false,
                lists: [...state.lists, action.list]
            }
        case 'DELETE_LIST':
            console.log(action)
            return {
                ...state, 
                lists: state.lists.filter(l => l.id !== action.payload.id), 
                loading: false,
                error: ''
            }         
        case 'UPDATE_LIST':
            const index = state.lists.findIndex(list => list.id === action.list.id)
            const newArray = [...state.lists]
            newArray[index] = action.list   
        return {
            ...state,
            loading: false,
            lists: newArray
        }

        default:
            return state
    }
}
export default listsReducer