import { createStore } from 'redux'
import rootreducer from './src/reducers'


const store = createStore(rootreducer)

export default store;