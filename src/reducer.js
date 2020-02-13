import * as actionTypes from './actions';

export const initialState = {
    tasks: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case actionTypes.ADD_TASK :
            let dup_check = false; // True: Duplicate addition ; False: Unique Addition;
            const length_check = action.textVal.split(' ').length;
            state.tasks.forEach((ele) => {
                if(ele.text === action.textVal) dup_check = true; 
            });

            if(length_check > 10){
                alert('To Long!\nShorten the Task.');
                return state;
            }

            if(dup_check) {
                alert('Duplicate Task added ! \nPlease Enter Unique Task.');    
                return state;
            }
            return {
                tasks: [...state.tasks, {
                                         dat: (new Date()).getTime(),
                                         text: action.textVal,
                                         striked: false
                                        }]
            };

        case actionTypes.INIT :
            const newArr = action.task_arr.map((ele) => {
                return {
                    ...ele,
                    dat: (new Date(ele.dat)).getTime()
                }
            });
            return {
                tasks: newArr
            };
        
        case actionTypes.TASK_DEL :
            const id_to_del = parseInt(action.element.target.parentElement.dataset.testid);
            return {
                tasks: state.tasks.filter((ele) => ele.dat !== id_to_del)
            }
    
        case actionTypes.TASK_COMP :
            const id_to_comp = parseInt(action.element.target.parentElement.dataset.testid);
            return {
                tasks: state.tasks.map((ele) => {
                    if(ele.dat === id_to_comp) ele.striked = (!ele.striked);
                    return ele;
                })
            };

        case actionTypes.CLEAR_TASK :
            return {
                tasks: []
            };
    
        case actionTypes.SORT_ALPHA :
            const newOrder_a = state.tasks.map(ele => ele.text).sort();
            const newTaskArr_a = [];
            state.tasks.forEach(ele => newTaskArr_a[newOrder_a.indexOf(ele.text)] = ele);
            return {
                tasks: newTaskArr_a
            }
    
        case actionTypes.SORT_CHRONO :
            const newOrder = state.tasks.map(ele => ele.dat).sort((a,b) => {return (a - b)});
            const newTaskArr = [];
            state.tasks.forEach((ele) => {
                newTaskArr[newOrder.indexOf(ele.dat)] = ele;
            });
            return {
                tasks: newTaskArr
            }
    
        default:
            return state;
    }
};

export default reducer;
