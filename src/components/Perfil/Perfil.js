import React from 'react';
import picture from './author-profile.jpg';
import './Perfil.css';

function Perfil() {
  return (
    <div className="Perfil">
      <div class="col-lg-12">
        <div class="container m-3">
          <div class="row">
            <div class="col-sm-4">
              <img src={picture} className="Foto-Profissional" alt="Foto Profissional" />
            </div>
            <div class="col-sm-8">
                  <div className="Perfil-name">
                    <p>
                      Dra. Estela Estelar
                    </p>
                  </div>
              <div class="row">
                <div class="col-sm-6">
                  <div className="Perfil-espec">
                    <p>
                      Psicóloga
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div className="Perfil-reg">
                    <p>
                      CRP 12345 RS
                    </p>
                  </div>
                </div>
              </div>
                  <div className="Perfil-local">
                    <p>
                      Porto Alegre - RS
                    </p>
                  </div>
                  <div className="Perfil-button">
                    <button type="button" class="btn btn-info">Compartilhar <i class="fa fa-share-alt" aria-hidden="true"></i></button> 
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Perfil;
