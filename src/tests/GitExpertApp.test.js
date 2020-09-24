import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GitExpertApp} from '../GitExpertApp';

describe('Prueba de <GitExpertApp />', () => {

    test('debe de mostrarse correctamente', () => {
        
       const  wrapper = shallow( <GitExpertApp /> );
       expect(wrapper).toMatchSnapshot();
    })

    test('debde de mostrar una lista de categorias', () => {
        const categories = ['Harry Potter', 'Sonic'];
        const  wrapper = shallow( <GitExpertApp defaultCategories={categories} /> );
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})