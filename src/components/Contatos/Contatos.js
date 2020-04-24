import React from 'react';
import './Contatos.css';

function Contatos() {
  return (
    <div className="Contatos" id="Contatos">
    <div class="col-lg-12">
      <div class="container m-3">
        <div class="row">
          <div class="col-sm-6">
        <div className="Contatos-site">
            <p>
            <i class="fa fa-globe" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.estela.io">www.estela.io</a>
            </p>
        </div>
        <div className="Contatos-email">
            <p>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:atendimento@estela.io">atendimento@estela.io</a>
            </p>
        </div>
        <div className="Contatos-whats">
            <p>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="tel:(51) 9907-8826">(51) 9907-8826</a>
            </p>
        </div>
        <div className="Contatos-fone">
            <p>
            <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="tel:(51) 9907-8889">(51) 9907-8889</a>
            </p>
        </div>
        </div>
        <div class="col-sm-6">
        <div className="Contatos-insta">
            <p>
            <i class="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.instagram.com/estela.assistente">@estela.assistente</a>
            </p>
        </div>
        <div className="Contatos-face">
            <p>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.facebook.com/estela.assistente">/estela.assistente</a>
            </p>
        </div>
        <div className="Contatos-linkedin">
            <p>
            <i class="fa fa-linkedin" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.linkedin.com/company/estela-agendamentos/">/estela.agendamentos</a>
            </p>
        </div>
        <div className="Contatos-youtube">
            <p>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.youtube.com/channel/UCcSsdW-H_0hYK3hisWUuWmA">Estela Agendamento de Consultas</a>
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
