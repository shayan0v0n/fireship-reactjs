import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { coursesReducer, lessonsReducer,
licenseReducer, tagsReducer,
tweetsReducer, userReducer } from './reducers'

const initilalState = {}

const reducers = combineReducers({
    lessons: lessonsReducer,
    courses: coursesReducer,
    tweets: tweetsReducer,
    tags: tagsReducer,
    licenses: licenseReducer,
    user: userReducer
})

const middleWare = [thunk]

const store = createStore(reducers, initilalState, applyMiddleware(...middleWare))
export default store