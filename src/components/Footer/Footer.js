import React from 'react';
import estela from './estela.png';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <span>Criado com ♥️ por</span><br />
        <img src={estela} alt="Estela Logo" height="55.6" width="111.4"/>
    </div>
  );
}

export default Footer;
