import React,{useState} from 'react'
import plano from '../assets/img/plano.jpg';
import styled from 'styled-components'
import Modal from '../components/Modal'
import thesceam from  '../assets/img/HD-wallpaper-the-scream-art.jpg'

export default function MapaDisplay() {
  const[estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <div className='plano-container'>
        <h3>Mapa interactivo</h3>
        <img className='plano-img-cont' src={plano} alt="plano" />

        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Obra</Boton>

        <Modal 
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1} 
            titulo='El grito'
            mostrarOverlay={true}
            posicionModal={'center'}
        >
            <Contenido>
                <img src={thesceam} alt="the scream" />
                <h2>El grito</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, voluptates! Ducimus quos consequuntur aliquid facilis, placeat quod iusto dolores sit.</p>
            </Contenido>
        </Modal> 
    </div>
  )
}

const Boton = styled.button`
    display: block;
    padding: 10px 30px;
    border-radius: 180px;
    color: #fff;
    border: none;
    background: #1766DC ;
    cursor: pointer;
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    transition: .3s ease all;

    &:hover{
        background: #0066ff;
    }

`;

const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p{
        font-size: 18px;
        margin-bottom: 20px;
    }

    img{
        max-width: 200px;
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }
`;