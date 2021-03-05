export const ADD_TO_DO = 'ADD_TO_DO'

export const addtodo =(msg) =>{
    return {
        type: ADD_TO_DO,
        msg,
        id:Math.random()
    }
}
export const DELETE_TO_DO = 'DELETE_TO_DO'

export const deletetodo =(id) =>{
    return {
        type: DELETE_TO_DO,
        id,
    }
}
export const DONE_TO_DO = 'DONE_TO_DO'

export const donetodo =(msg,id) =>{
    
    return {
        type: DONE_TO_DO,
        msg,
        id,
    }
}