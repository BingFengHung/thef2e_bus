import { createStore } from 'redux'
import { itemReducer } from './reducer'

const itemStore = createStore(itemReducer)

export { itemStore };
