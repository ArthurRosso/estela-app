import React from 'react';
import './App.css';
import Perfil from '../Perfil/Perfil';
import Contatos from '../Contatos/Contatos';
import Conheca from '../Conheca/Conheca';
import Atendimento from '../Atendimento/Atendimento';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-6 mt-4">
                <Perfil />
            </div>

            <div class="col-md-6 mt-4">
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
        <div class="row">
            <Footer />
        </div>
    </div>
  );
}

export default App;
