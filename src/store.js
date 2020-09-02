import {
    createStore, 
    applyMiddleware,
    combineReducers,
    compose
  } from 'redux';
  import hikesReducer from './reducers/hikesReducer'
  import thunk from 'redux-thunk';
  
  // applyMiddleware allows us to make async calls to backend
  // redux thunk allows us to juggle async calls to backend - ex:
  // if we haven't received the api data yet, thunk will pause other 
  // async actions until it is loaded.
  
  
  const reducers = combineReducers({
    hikesReducer
  });
  
  const middleware = [thunk];
  
  export default createStore(
    reducers,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );