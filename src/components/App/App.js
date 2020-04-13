import React from 'react';
import Perfil from '../Perfil/Perfil';
import Contatos from '../Contatos/Contatos';
import Conheca from '../Conheca/Conheca';
import Atendimento from '../Atendimento/Atendimento';
import './App.css';

function App() {
  return (
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-6">
                <Perfil />
            </div>
            <div class="col-md-6">
                <Contatos />
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <Conheca />
            </div>
            <div class="col-md-6">
                <Atendimento />
            </div>
        </div>
    </div>
  );
}

export default App;
