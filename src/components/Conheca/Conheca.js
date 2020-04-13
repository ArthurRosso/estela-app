import React from 'react';
import './Conheca.css';

function Conheca() {
  return (
    <div>
        <div class="pt-3">
        <div className="Conheca">
          <div className="Conheca-header">
              <div class='m-3'>
                <p>Conheça</p>
              </div>
          </div>
          <div class="container">
              <div class="m-3">
              <div className="Conheca-sobre">
                <div className="Conheca-h1"><i class="fa fa-user" aria-hidden="true"></i> Sobre Dra. Estela</div>
                <div className="Conheca-p"><p>Comecei a me interessar por Psicologia buscando compreender meus próprios conflitos e os intensos chamados que a vida foi me apresentando. Em dezembro de 2011 concluí a graduação</p></div>
                <div><button type="button" class="btn btn-info">Ver mais</button></div>
              </div>
              </div>
              <div class="m-3">
              <div className="Conheca-espec">
                <div className="Conheca-h1">Especialidades</div>
                <div className="Conheca-p"><p>- Acupuntura, - Acupuntura Auricular,  - Diagnóstico Energético, - Autoconhecimento, - Avaliação Psicológica, - Depressão, - Transtorno de Ansiedade Generalizada, - Gestão de Estress;</p></div>
                <div><button type="button" class="btn btn-info">Ver mais</button></div>
              </div>
              </div>
              <div class="m-3">
              <div className="Conheca-exper">
                <div className="Conheca-h1">Experiência</div>
                <div className="Conheca-p"><p>Psicóloga / Psicopedagoga/ Neuropsicóloga, com 20 anos de experiência em processos de avaliação e atendimento psicoterapêutico a crianças, adolescentes, adultos, idosos, casais e famílias com queixas relacionadas a ansiedade, </p></div>
                <div><button type="button" class="btn btn-info">Ver mais</button></div>
              </div>
              </div>
              <div class="m-3">
              <div className="Conheca-forma">
                <div className="Conheca-h1">Formação</div>
                <div className="Conheca-p"><p>- Graduação em Psicologia
                        - Pós Graduação em Neuropsicologia
                        - Pós Graduação em Saúde da Família
                        - Pós Graduação em Psicopedagogia
                    </p></div>
                <div><button type="button" class="btn btn-info">Ver mais</button></div>
              </div>
              </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Conheca;
