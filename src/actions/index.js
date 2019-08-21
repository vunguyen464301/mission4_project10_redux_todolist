import {v4 as generateId} from 'node-uuid';

import {ADD_TASK,REMOVE_TASK,EDIT_TASK,OPEN_DIALOG,CLOSE_DIALOG} from './actionTypes';

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

export const openDialog = () => ({
    type: OPEN_DIALOG
  });
  
  export const closeDialog = () => ({
    type: CLOSE_DIALOG
  });
  
  