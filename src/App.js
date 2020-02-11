import React, { useEffect } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import Logo from './todo_icon.png';
import * as actionTypes from './actions';
import Tasks from './tasks';



const App = (props) => {

  // Why is this required?
  window.addEventListener('unload', (e) => {
    if(props.tasks.length) localStorage.setItem("123", JSON.stringify(props));
    else if(localStorage.getItem("123"))	localStorage.removeItem("123");
  });
 
 useEffect(() => {
  if(localStorage.getItem("123"))
  {
    const values =  JSON.parse(localStorage.getItem("123")).tasks;
    console.log(values);
    props.onInit(values);
  }
 }, []);
  
// Should break it down further to smaller components, it's easier to manage that way.
  return (
    <div className="App">
      <div className = "header">
        <img src={Logo} alt = "logo" className = "header__logo"></img>
        <div className = "app__name">To-Do App</div>
      </div>
      <div className = "todo">
        <h1> To-Do List Items </h1>

        <Tasks taskList={props.tasks} compHandler={props.onTaskComp} delHandler={props.onTaskDel}/>
      </div>
      <div className = "mani">
    	  <h2> Manipulation Tools </h2>
    	
        <ul className = "mani__list">
            <li className="mani__item">
              <label > New Task: </label>
              <input type="text" name="new_task" className = "input__task" />
            </li>

            <li className="mani__item">
              <button type="button" name="new_task" className="task__btn--add" onClick={() => {
                props.onAddTask(document.querySelector('.input__task').value);
                document.querySelector('.input__task').value = '';}}>ADD</button>
            </li>

            <li className="mani__item">
                <button type="button" name="clear_all_task" className="task__btn--clear" onClick={props.onClearTask}>Clear All</button>
            </li>
          
            <li className="mani__item">
                <button type="button" name="sort_task_alpha" className="task__btn--alphSort" onClick={props.onAlphaSort}>Sort Aplhbetically</button>
            </li>
            
            <li className="mani__item">
                <button type="button" name="sort_task_time" className="task__btn--timeSort" onClick={props.onChronoSort}>Chronological Sort</button>
            </li>
          </ul>
       </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Check this new state:tasks');
  console.log(state.tasks);  
  return {
      tasks : state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddTask: (text) => dispatch({type: actionTypes.ADD_TASK, textVal: text}),
      onInit: (Arr) => dispatch({type: actionTypes.INIT, task_arr: Arr}),
      onTaskComp: (ele) => dispatch({type: actionTypes.TASK_COMP, element: ele}),
      onTaskDel: (ele) => dispatch({type: actionTypes.TASK_DEL, element: ele}),
      onClearTask: (ele) => dispatch({type: actionTypes.CLEAR_TASK}),
      onAlphaSort: () => dispatch({type: actionTypes.SORT_ALPHA}),
      onChronoSort: () => dispatch({type: actionTypes.SORT_CHRONO})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
