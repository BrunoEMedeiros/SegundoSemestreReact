
import { Botao, CampoTexto, Header, Titulo, Divisinha } from "./Style.jsx"
import { IoAddCircleOutline } from 'react-icons/io5'
import { useEffect } from "react"
import { useState } from "react";

export function Crud({ titulo }){

    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        alert("Clicou no botao");
    }, [ativo])

    return (
        <Header>
            <Titulo>
                { titulo }
            </Titulo>
            <Divisinha>
                <CampoTexto placeholder="Digite o nome..." />
                <Botao onClick={() => setAtivo(true)}>
                    <IoAddCircleOutline size={45}/>
                </Botao>
            </Divisinha>
        </Header>
    )
}