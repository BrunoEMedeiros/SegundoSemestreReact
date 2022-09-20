import React from "react";
import { useEffect } from "react";
import { useState } from "react"

/*
export class Contador extends React.Component {
    constructor(props){
        super(props);

        this.state = { contador: 0}
    }

    //ao carregar o componente
    componentDidMount(){
        console.log("Carregou!")
    }

    //ao atualizar o componente
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps);
        console.log(prevState);
    }

    //ao "destruir" o componente
    componentWillUnmount(){
        alert("Componente destruido")
    }

    render(){
        return(
            <div>
                <h1>Voce clicou { this.state.contador} vezes!</h1>
                <button onClick={()=>{
                    this.setState({contador: this.state.contador + 1 })
                }}>Cique em mim</button>
            </div>
        )
    }
}
*/

export function Contador(){
    const [contador, setContador] = useState(0);
    const [theme, setTheme] = useState("Ligth")

    useEffect(()=>{
        console.log("Carregou")
    },[contador])

    useEffect(() => {
      if( theme == "Ligth" ){
        return () => {
            document.getElementById("root").style.backgroundColor = 'white';
            document.getElementById("root").style.color = 'black';
        }
      }
      else{
      return () => {
            document.getElementById("root").style.backgroundColor = 'black';
            document.getElementById("root").style.color = 'white';
        }
    }
    }, [theme])
    
    function handleTheme(){
        if (theme == "Ligth")
            setTheme("Dark")
        else
            setTheme("Ligth")
    }

    return(
        <div>
            <h1>Voce clicou {contador} vezes!</h1>

            <button onClick={()=>{
                setContador(contador + 1)
            }}>Cique em mim</button>

            <button onClick={()=>{
                handleTheme()
            }}>{theme}</button>
        </div>
    )
}