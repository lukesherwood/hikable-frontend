import {
    createStore, 
    applyMiddleware,
    // combineReducers,
    compose
  } from 'redux';
  import hikesReducer from './reducers/hikesReducer'
  import thunk from 'redux-thunk';  
  
  // const reducers = combineReducers({
  //   hikesReducer
  // });
  
  const middleware = [thunk];
  
  export default createStore(
    hikesReducer,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );