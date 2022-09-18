import React from 'react'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg ">
        <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="agenda">Agenda</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="agregarEvento">Formulario evento "no va"</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="agregarObra"> formulario Obra "no va"</a> 
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
