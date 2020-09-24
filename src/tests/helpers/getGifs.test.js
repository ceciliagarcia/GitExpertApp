import {getGifs} from '../../helpers/getGifs';


describe('Pruebas con getGifs fetch', () => {

    test('debe de traer 10 elementos', async() => {
        
       const gifs = await getGifs('Harry Potter');
       expect(gifs.length).toBe(15);
    })

    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
     })
    

})