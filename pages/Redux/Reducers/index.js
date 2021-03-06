import { combineReducers } from 'redux';
import { TodosReducer } from './TodosReducer'

export const rootReducer = combineReducers({
    todos: TodosReducer
})