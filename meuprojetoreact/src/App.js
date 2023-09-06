import React, { useState } from 'react';
import './App.css';

const TelaLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const realizarLogin = () => {
    if (usuario === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
      alert('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="input-group">
        <label>Usuário__</label>
        <input type="text"     value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
      </div>
      <div className="input-group">
        <label>Senha___</label>
        <input type="password" value={senha}   onChange={(e) => setSenha(e.target.value)}/>
      </div>
      <button   onClick={realizarLogin}>Acessar</button>
      {mensagem && <p style={{ color: mensagem === 'Acessado com sucesso!' ? 'green' : 'red' }}>{mensagem}</p>}
    </div>
  );
};

export default TelaLogin;
