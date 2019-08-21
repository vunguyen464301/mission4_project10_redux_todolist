import {combineReducers} from 'redux';
//actions task
import tasks from './tasks';
import dialog from './dialog';
const AllReducers = combineReducers({
    tasks:tasks,
    dialog:dialog

});

export default AllReducers;