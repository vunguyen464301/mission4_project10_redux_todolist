import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
const ListTask = ({ tasks }) => {
    var showData =(data)=> Object.keys(data).map((id, index) => {
        return <Task
        key={index}
        {...data[id]}/>
    });
    return (
      

        <ul className="list-group mt-5">
            <li
                onClick={() => { console.log(tasks) }}
                className="list-group-item danger bg-danger text-light" >
                <h5 style={{ textAlign: 'center' }}>
                    List Task
    </h5>
            </li>
            {showData(tasks)}
           
        </ul>
    )

}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps)(ListTask);;