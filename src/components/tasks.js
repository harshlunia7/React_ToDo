import React from 'react';
import '../App.css'
const Tasks = (props) => {
        
    return (
        <ul className = "todo__list">
             {props.taskList.map((ele) => {
                 let test = <strike>{ele.text}</strike>;
                 return (
                    <li className="todo__item" data-testid={ele.dat} key={ele.dat}>
                        <p className="todo__description">{ele.striked ? test : ele.text}</p>
                        <button type="button" className={ele.striked ? "todo__comp todo__comp--clicked":"todo__comp"} onClick={(ele) => props.compHandler(ele)}>{ele.striked ? 'Undo': 'Complete'}</button>
                        <button type="button" className="todo__delete btn-tiny" onClick={(ele) => props.delHandler(ele)}>
                        X
                        </button>
                    </li>
                  );
             })}
        </ul>
        );
};

export default Tasks;