import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import './App.css';
import * as actionTypes from './actions';
import Tasks from './components/tasks';
import ManiList from './components/maniList';
import Header from './components/header';

const App = (props) => {

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
  

  return (
    <div className="App">
      
      <Header />
      
      <div className = "todo">
        <h1> To-Do List Items </h1>

        <Tasks taskList={props.tasks} compHandler={props.onTaskComp} delHandler={props.onTaskDel}/>
      </div>
      
      <div className = "mani">
    	  <h2> Manipulation Tools </h2>
    	
        <ManiList addTaskHandler={props.onAddTask} clearTaskHandler={props.onClearTask}
                  aSortHandler={props.onAlphaSort} cSortHandler={props.onChronoSort}/>
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
