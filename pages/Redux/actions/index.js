export const ADD_TO_DO = 'ADD_TO_DO'

export const addtodo = (msg) => {
    return {
        type: ADD_TO_DO,
        msg,
        id: Math.random()
    }
}
export const DELETE_TO_DO = 'DELETE_TO_DO'

export const deletetodo = (id) => {
    return {
        type: DELETE_TO_DO,
        id,
    }
}
export const DONE_TO_DO = 'DONE_TO_DO'

export const donetodo = (msg, id) => {

    return {
        type: DONE_TO_DO,
        msg,
        id,
    }
}

export const LEFT_TO_DO = 'LEFT_TO_DO'

export const lefttodo = (msg, id) => {

    return {
        type: LEFT_TO_DO,
        msg,
        id,
    }
}
export const EDIT_TO_DO = 'EDIT_TO_DO'

export const edittodo = (msg, id, index) => {

    return {
        type: EDIT_TO_DO,
        msg,
        id,
        index,
    }
}
export const TOGGLING = 'TOGGLING'

export const toggling = () => {

    return {
        type: TOGGLING,
        payload: false,
    }
}

export const UPDATE_TO_DO = 'UPDATE_TO_DO'

export const updatetodo = (msg, id, index) => {

    return {
        type: UPDATE_TO_DO,
        msg,
        id,
        index,
    }
}