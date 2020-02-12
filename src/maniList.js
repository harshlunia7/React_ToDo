import React from 'react';
import './App.css';

const ManiList = (props) => {
    
    return (
        <ul className = "mani__list">
            <li className="mani__item">
              <label > New Task: </label>
              <input type="text" name="new_task" className = "input__task" />
            </li>

            <li className="mani__item">
              <button type="button" name="new_task" className="task__btn--add" onClick={() => {
                props.addTaskHandler(document.querySelector('.input__task').value);
                document.querySelector('.input__task').value = '';}}>ADD</button>
            </li>

            <li className="mani__item">
                <button type="button" name="clear_all_task" className="task__btn--clear" onClick={props.clearTaskHandler}>Clear All</button>
            </li>
          
            <li className="mani__item">
                <button type="button" name="sort_task_alpha" className="task__btn--alphSort" onClick={props.aSortHandler}>Sort Aplhbetically</button>
            </li>
            
            <li className="mani__item">
                <button type="button" name="sort_task_time" className="task__btn--timeSort" onClick={props.cSortHandler}>Chronological Sort</button>
            </li>
          </ul>
    );
}

export default ManiList;