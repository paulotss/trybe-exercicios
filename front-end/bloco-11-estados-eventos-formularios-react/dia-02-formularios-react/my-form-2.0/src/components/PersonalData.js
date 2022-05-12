import React from 'react';

class PersonalData extends React.Component {
  render() {
    let { nome, email, handleChange } = this.props;
    nome = nome.toUpperCase();
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
        </fieldset>
      </>
    );
  }
}

export default PersonalData;