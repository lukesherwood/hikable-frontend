import {
    createStore, 
    applyMiddleware,
    combineReducers,
    compose
  } from 'redux';

  import thunk from 'redux-thunk';  

  import hikes from './reducers/hikesReducer'
  import lists from './reducers/listsReducer'
  import users from './reducers/usersReducer'
  
  const reducers = combineReducers({
    hikes,
    lists,
    users
  });
  
  let middleware = [thunk];
  let enhancers = [applyMiddleware(...middleware)];
  if (process.env.NODE_ENV === "development") {
    enhancers.push(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  
  export default createStore(reducers, compose(...enhancers));