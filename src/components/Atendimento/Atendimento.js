import React from 'react';
import './Atendimento.css';

function Atendimento() {
  return (
    <div>
        <div class="pt-3">
        <div className="Atendimento">
          <div className="Atendimento-header">
              <div class='m-3'>
                <p>Locais de atendimento</p>
              </div>
          </div>
          <div class="container">
              <div class="m-3">
              <div className="Atendimento-clinica">
                <div class="row"><div className="Atendimento-h1"><i class="fa fa-map-marker" aria-hidden="true"></i> Cínica Estelística </div><i class="fa fa-angle-down" aria-hidden="true"></i></div>
                <div className="Atendimento-p"><p>Endereço: Rua Estelar, 20  |  Estelianópolis  |  ES</p></div>
              </div>
              </div>
              <div class="m-3">
              <div className="Atendimento-hora">
              <pre>
                <div className="Atendimento-h1">Horário de atendimento</div>
                <div class="container pt-2">
                  <div class="row">
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>Segunda-feira</p></div>
                    </div>
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>8:00-18:00</p></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>Terça-feira</p></div>
                    </div>
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>8:00-18:00</p></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>Quarta-feira</p></div>
                    </div>
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>8:00-18:00</p></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>Quinta-feira</p></div>
                    </div>
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>8:00-18:00</p></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>Sexta-feira</p></div>
                    </div>
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>8:00-18:00</p></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>Sábado</p></div>
                    </div>
                    <div class="col-md-6">
                      <div className="Atendimento-p"><p>8:00-18:00</p></div>
                    </div>
                  </div>
                </div>
              </pre>
              </div>
              </div>
              <div class="m-3">
              <div className="Atendimento-fotos">
                <div className="Atendimento-h1">Fotos</div>
              </div>
              </div>
              <div class="m-3">
              <div className="Atendimento-serv">
                <div className="Atendimento-h1">Serviços atendidos</div>
                <div className="Atendimento-p"><p>- Acupuntura, - Acupuntura Auricular,  - Diagnóstico Energético, - Autoconhecimento, - Avaliação Psicológica, - Depressão, - Transtorno de Ansiedade Generalizada, - Gestão de Estress;</p></div>
              </div>
              </div>
              <div class="m-3">
              <div className="Atendimento-pag">
                <div className="Atendimento-h1">Meios de pagamento</div>
                <div className="Atendimento-p"><p>Cartão de débito, cartão de crédito</p></div>
              </div>
              </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Atendimento;
