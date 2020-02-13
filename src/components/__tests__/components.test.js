//import react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import Header from '../header';
import ManiList from '../maniList';
import Tasks from '../tasks';
import {Provider} from 'react-redux';
import Reducer from '../../reducer';
import { createStore } from 'redux';
import { render, fireEvent } from '@testing-library/react';
//import components being tested 
const store = createStore(Reducer);
describe("Test suite for Component rendering", () => {
    test('App component rendering', () => {
        const {container} = render(<Provider store={store}><App /></Provider>);
        expect(container).toBeInTheDocument();
    });

    test('header component rendering', () => {
        const {container} = render(<Header />);
        expect(container).toBeInTheDocument();
    });

    test('maniList component rendering', () => {
        const {container} = render(<ManiList />);
        expect(container).toBeInTheDocument();
    });

    test('tasks component rendering', () => {
        const {container} = render(<Tasks taskList={[]}/>);
        expect(container).toBeInTheDocument();
    });
});




