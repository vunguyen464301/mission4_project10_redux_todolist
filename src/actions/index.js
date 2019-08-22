import {v4 as generateId} from 'node-uuid';

import {ADD_TASK,REMOVE_TASK,EDIT_TASK, OPEN_MODAL, CLOSE_MODAL} from './actionTypes';

export const add_task=(name)=>{
    console.log(`You add ${name}`);
    return{
        type:ADD_TASK,
        id: generateId(),
        name
    }
    
}
export const remove_task=(id)=>{
    console.log(`You remove ${id}`);
    return{
        type:REMOVE_TASK,
        id
    }
}
export const edit_task=(id,name)=>{
    console.log(`You edit ${id}`);
    return{
        type:EDIT_TASK,
        id:id,
        name:name
    }
}
  export const openModal = (id,name) => {
      console.log(`You click ${OPEN_MODAL}`);
      return{
        type: OPEN_MODAL,
        id:id,
        name:name
      }
  };
  
  export const closeModal = (id,name) =>{
      console.log(`You click ${CLOSE_MODAL}`);
      return{
        type: CLOSE_MODAL,
        id:id,
        name:name
      }
  };
  