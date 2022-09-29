import React from "react";
import styled from "styled-components";

const Modal = ({children,
                 estado,
                cambiarEstado,
                titulo= 'titulo',
                mostrarOverlay,
                posicionModal
}) => {
      return (

        <>
            {estado &&
                <Overlay 
                mostrarOverlay={mostrarOverlay}
                posicionModal={posicionModal}
                >
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>{titulo}</h3>
                        </EncabezadoModal>            
                        <BotonCerrar
                            onClick={() => cambiarEstado(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </BotonCerrar>
                        <Boton>Video</Boton>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }  
        </>
      )
    }

export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.mostrarOverlay ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)'};
    padding: 40px;
    display: flex;
    align-items: ${props => props.posicionModal ? props.posicionModal : 'center'};
    justify-content: center;

`;

const ContenedorModal = styled.div`
    width: 900px;
    min-height: 400px;
    background: #fff;
    color: #000;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursos: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #f2f2f2;
    }

    svg{
        width: 100%;
        height: 100%;
    }
`;

const Boton = styled.button`
    position: absolute;
    bottom: 15px;
    right: 50px;
    width: 50px;
    height: 30px;
    border: none;
    background: none;
    cursos: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #1766DC;
        &:hover{
            background: #0066ff;
        }
    
`;