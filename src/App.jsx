//importacion
import React, { useState } from 'react';
import words from 'lodash.words'
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
 
import './App.css'
//generacion de la funcion del componente
const App = () => {

    //Array Destructuring
    const [stack, setStack] = useState("")
    // lo que ejecuta la funcion
    
    const items = words(stack, /[^-^+^*^/]+/g)
    
    const value = items.length > 0 ? items[items.length-1] : "0";
    
    return (
    <div className='react-calculator' >
        <Result value= {value} /> 
        <Numbers 
            onClickNumber={(number) => {
                setStack(`${stack}${number}`)
            }}
        />
        <Functions 
            onContentClear={() =>{
                setStack("")
            }}
            onDelete={() =>{
                if(stack.length > 0){
                    const newStack = stack.substring(0,stack.length -1)
                    setStack(newStack)
            }
                
            }}
        />
        <MathOperations 
            onClickOperations={operations =>{ 
                setStack(`${stack}${operations}`)
            }}
            onClickEqual={equal =>{
                setStack(eval(stack).toString())
            }}
        />
        
    </div>

    )
}


export default App
//exportacion
//Linea 12 value todo lo que se encierra en las llaves deja entrar codigo JS
