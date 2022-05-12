import React from 'react';

class PersonalData extends React.Component {
  render() {
    let { nome, email, cpf, endereco, handleChange } = this.props;
    nome = nome.toUpperCase();

    //Verifica se o último carater é A-z
    endereco = endereco.charAt(endereco.length - 1).search(/[A-z]/) >= 0 ?
      endereco : endereco.slice(0,endereco.length - 1);
    
    return (
      <>
        <h2>Dados Pessoais</h2>
        <fieldset>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" name="nome" maxLength={40} value={nome} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" maxLength={50} value={email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="cpf">CPF: </label>
            <input type="text" id="cpf" name="cpf" maxLength={11} value={cpf} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="endereco">Endereço: </label>
            <input type="text" id="endereco" name="endereco" maxLength={200} value={endereco} onChange={handleChange} />
          </div>
        </fieldset>
      </>
    );
  }
}

export default PersonalData;