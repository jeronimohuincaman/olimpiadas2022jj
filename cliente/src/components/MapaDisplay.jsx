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
                <p>Uno de los pioneros del expresionismo noruego, el enfoque estilístico de Edvard Munch para transmitir emociones, 
                   en particular sentimientos de angustia, es claro en su icónica obra maestra, El grito.
                   Esta pintura fue la inspiración de la famosa máscara del asesino en las películas de Scream. Acerca de la pintura,
                   el director dijo: “Es una referencia clásica al horror puro de algunas partes del siglo XX, o tal vez solo de la existencia humana”.</p>
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