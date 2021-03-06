import { ADD_TO_DO, DELETE_TO_DO, DONE_TO_DO, LEFT_TO_DO, EDIT_TO_DO, TOGGLING, UPDATE_TO_DO } from "../actions";

const initialState = {
    data: [],
    completeData: [],
    editToggle: false,
    text: ' ',
}

export const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        msg: action.msg,
                        id: action.id
                    }
                ],

            }
        case DELETE_TO_DO:
            const todos = state.data.filter((todo) => todo.id !== action.id)
            const doneTodosDelete = state.completeData.filter((todo) => todo.id !== action.id)

            return {
                ...state,
                data: todos,
                completeData: doneTodosDelete,

            }

        case DONE_TO_DO:
            // const doneArray = state.data.filter((todo) => todo.id == action.id)
            const doneTodos = state.data.filter((todo) => todo.id !== action.id)

            return {
                ...state,
                data: doneTodos,
                completeData: [
                    ...state.completeData, {
                        // doneArray,
                        msg: action.msg,
                        id: action.id
                    }
                ]
            }

        case LEFT_TO_DO:
            const leftArray = state.completeData.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                completeData: leftArray,
                data: [
                    ...state.data, {
                        // leftArray,
                        msg: action.msg,
                        id: action.id,

                    }
                ],
            }

        case TOGGLING:
            return {
                ...state,
                editToggle: action.payload,
            }

        case EDIT_TO_DO:
            const editArray = state.data.filter((todo) => todo.id == action.id)

            return {
                ...state,
                text1: action.msg,
                editToggle: true,

            }

        case UPDATE_TO_DO:

            return {
                ...state,
                // data :state.data.map((singledata) => {singledata.id == action.id ? action.msg : singledata} ),
                editToggle: false,

            }
        default: return state;
    }
}

















