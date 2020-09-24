import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas de hook', () => {

    test('Debe de retonar el estado incial ', async() => {


    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Harry Potter'));
    //const { data, loading } = useFetchGifs( 'Harry Potter');
    const { data, loading } = result.current;
    
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);

    })

    test('debe de retonar un arreglo de imagenes y el loading en false ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Harry Potter'));
        await waitForNextUpdate();

        const { data, loading } = result.current;
    

        expect(data.length).toBe(15);
        expect(loading).toBe(false);
        
    })
    
    

})