import { ADD_TO_DO, DELETE_TO_DO, DONE_TO_DO } from "../actions";

const initialState = {
    data : [],
    completeData : []
}

export const TodosReducer = (state= initialState, action) =>{
    switch(action.type){
        case "ADD_TO_DO" : 
            return{
                ...state,
                data:[
                    ...state.data,
                    {
                        msg : action.msg,
                        id : action.id
                    }
                ],

            }
        case DELETE_TO_DO:
            const todos = state.data.filter((todo) => todo.id !==action.id)
            return{
                ...state,
                data: todos,

            }

        case DONE_TO_DO :
            const doneArray = state.data.filter((todo) => todo.id == action.id)
            return {
                ...state,
                completeData:[
                    ...state.completeData,{
                        doneArray,
                        msg: action.msg,
                        id:action.id
                    }
                    ]
            }

        default :return state;
    }
}