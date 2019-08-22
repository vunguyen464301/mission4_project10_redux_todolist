import {ADD_TASK,REMOVE_TASK, EDIT_TASK} from '../actions/actionTypes';
const tasks = (state = {}, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
           ...state,
            [action.id]: (state,action)
        };
      case REMOVE_TASK:
            const rest = {...state} ;
            delete rest[action.id];
            return rest;
    case EDIT_TASK:
            return {
                ...state,
                [action.id]: (state,action)
             };
        default:
        return state;
    }
  };
export default tasks;
  