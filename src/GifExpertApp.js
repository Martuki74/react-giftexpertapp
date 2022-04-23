import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch'])

    /*const handleAdd=() =>{
        //Dos formas
        //setCategories([...categories,'nuevoElemento']);
        llamada con un callback y cats es el estado anterior que es el de las categorias
        setCategories(cats=>[...cats,'nuevoElemento']);
    }*/




  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
       
        <ol>
            {
                categories.map((category,i)=>
                    <GifGrid category={category} key={category}/>
                )
            }
        </ol>
    </>
  )
}

