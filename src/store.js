import {
    createStore, 
    applyMiddleware,
    combineReducers,
    compose
  } from 'redux';

  import thunk from 'redux-thunk';  

  import hikes from './reducers/hikesReducer'
  import lists from './reducers/listsReducer'
  
  const reducers = combineReducers({
    hikes,
    lists
  });
  
  const middleware = [thunk];
  
  export default createStore(
    reducers,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );