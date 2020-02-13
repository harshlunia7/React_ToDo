import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from '../tasks';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test Suite for Task Addition',() => {
    
    test('Task Addition', () => {
        const {container, getByTestId, getByText} = render(<Tasks taskList={[{dat: 1581574264572, text: "HTML", striked: false}]} />);
        expect(container).toBeInTheDocument();
        const task_item = getByTestId('1581574264572');
        expect(container).toContainElement(task_item);
    });

    test('Task Deletion', () => {
        const del_func = (element) => {expect(1581574264572).toBe(parseInt(element.target.parentElement.dataset.testid));};
        const {container, getByTestId, getByText} = render(<Tasks delHandler={del_func} taskList={[{dat: 1581574264572, text: "HTML", striked: false}]} />);
        const dele_button = container.querySelector('.todo__delete');
        expect(dele_button).toBeInTheDocument();
        fireEvent.click(dele_button, {button: 0});
    });

    test('Task Completion', () => {
        const comp_func = (element) => {expect(1581574264572).toBe(parseInt(element.target.parentElement.dataset.testid));};
        const {container, getByTestId, getByText} = render(<Tasks compHandler={comp_func} taskList={[{dat: 1581574264572, text: "HTML", striked: false}]} />);
        const comp_button = container.querySelector('.todo__comp');
        expect(comp_button).toBeInTheDocument();
        fireEvent.click(comp_button, {button: 0});
    });

    

});