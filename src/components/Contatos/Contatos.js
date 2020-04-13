import React from 'react';
import './Contatos.css';

function Contatos() {
  return (
    <div className="Contatos">
    <div class="col-lg-12">
      <div class="container m-3">
        <div class="row">
          <div class="col-sm-6">
        <div className="Contatos-site">
            <p>
            <i class="fa fa-globe" aria-hidden="true"></i> www.estela.io
            </p>
        </div>
        <div className="Contatos-email">
            <p>
            <i class="fa fa-envelope-o" aria-hidden="true"></i> atendimento@estela.io
            </p>
        </div>
        <div className="Contatos-whats">
            <p>
            <i class="fa fa-whatsapp" aria-hidden="true"></i> (51) 9907-8826
            </p>
        </div>
        <div className="Contatos-fone">
            <p>
            <i class="fa fa-phone" aria-hidden="true"></i> (51) 9907-8889
            </p>
        </div>
        </div>
        <div class="col-sm-6">
        <div className="Contatos-insta">
            <p>
            <i class="fa fa-instagram" aria-hidden="true"></i> @estela.assistente
            </p>
        </div>
        <div className="Contatos-face">
            <p>
            <i class="fa fa-facebook-official" aria-hidden="true"></i> /estela.assistente
            </p>
        </div>
        <div className="Contatos-linkedin">
            <p>
            <i class="fa fa-linkedin" aria-hidden="true"></i> /estela.agendamentos
            </p>
        </div>
        <div className="Contatos-youtube">
            <p>
            <i class="fa fa-youtube-play" aria-hidden="true"></i> Estela Agendamento de Consultas
            </p>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Contatos;
