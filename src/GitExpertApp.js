import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = ({defaultCategories= []}) => {

    
    //const [categories, setCategories] = useState( ['Harry Potter']);
    const [categories, setCategories] = useState( defaultCategories);
    
    //para añadir una nueva categoria
    /* const handledAdd = () => {
       setCategories([...categories, 'HunterXhunter']);

    }*/
    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
              {
                  categories.map( category => 
                   <GifGrid 
                   key={category}
                   category={category} 
                   />
                  )
              }
            </ol>
        </>
    )
}
