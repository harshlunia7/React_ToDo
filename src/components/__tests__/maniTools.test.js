import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from '../tasks';
import ManiList from '../maniList';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as actionTypes from '../../actions';




describe('Test Suite for Manipulation Tools', () => {
    test('Add Task Button', () => {
        const add_func = (val) => {expect(val).toBe('HTML');};
        const {container, getByTestId, getByText} = render(<ManiList addTaskHandler={add_func} />);
        
        const input_bar = container.querySelector('.input__task');
        expect(input_bar).toBeInTheDocument();
        fireEvent.change(input_bar, {target : { value: 'HTML'}});
        expect(input_bar.value).toBe('HTML');
        
        const add_btn = container.querySelector('.task__btn--add');
        expect(add_btn).toBeInTheDocument();
        fireEvent.click(add_btn, {button: 0});
        
    });     

});