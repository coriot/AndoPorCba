import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from './rootReducer'
import rootSaga from './sagas'

let sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer:rootReducer,
  middleware,
})



sagaMiddleware.run(rootSaga)

export default store;