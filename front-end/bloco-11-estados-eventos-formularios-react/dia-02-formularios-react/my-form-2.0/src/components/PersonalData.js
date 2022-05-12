import React from 'react';

class PersonalData extends React.Component {
  render() {
    let { nome, handleChange } = this.props;
    nome = nome.toUpperCase();
    return (
      <fieldset>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" name="nome" maxLength={40} value={nome} onChange={handleChange} required />
      </fieldset>
    );
  }
}

export default PersonalData;