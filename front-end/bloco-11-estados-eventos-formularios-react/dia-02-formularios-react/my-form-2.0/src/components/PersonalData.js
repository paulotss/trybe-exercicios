import React from 'react';

class PersonalData extends React.Component {

  constructor() {
    super();
    this.handleBlurCidade = this.handleBlurCidade.bind(this);
  }

  handleBlurCidade({ target }) {
    let { value } = target;
    target.value = Number(value.charAt(0)) ? '' : value;
  }

  render() {
    let { nome, email, cpf, endereco, cidade, estado, handleChange } = this.props;
    nome = nome.toUpperCase();

    //Verifica se o último carater é A-z
    endereco = endereco.charAt(endereco.length - 1).search(/[A-z]/) >= 0 ?
      endereco : endereco.slice(0,endereco.length - 1);
    
    return (
      <>
        <h2>Dados Pessoais</h2>
        <fieldset>
          <div>
            <label htmlFor="nome">Nome: </label><br />
            <input type="text" id="nome" name="nome" maxLength={40} value={nome} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email: </label><br />
            <input type="email" id="email" name="email" maxLength={50} value={email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="cpf">CPF: </label><br />
            <input type="text" id="cpf" name="cpf" maxLength={11} value={cpf} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="endereco">Endereço: </label><br />
            <input type="text" id="endereco" name="endereco" maxLength={200} value={endereco} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="cidade">Cidade: </label><br />
            <input type="text" id="cidade" name="cidade" maxLength={28} value={cidade} onChange={handleChange} onBlur={this.handleBlurCidade} required />
          </div>
          <div>
            <label htmlFor="estado">Estado: </label>
            <select id="estado" name="estado" value={estado} onChange={handleChange}>
              <option>Acre (AC)</option>
              <option>Alagoas (AL)</option>
              <option>Amapá (AP)</option>
              <option>Amazonas (AM)</option>
              <option>Bahia (BA)</option>
              <option>Ceará (CE)</option>
              <option>Distrito Federal (DF)</option>
              <option>Espírito Santo (ES)</option>
              <option>Goiás (GO)</option>
              <option>Maranhão (MA)</option>
              <option>Mato Grosso (MT)</option>
              <option>Mato Grosso do Sul (MS)</option>
              <option>Minas Gerais (MG)</option>
              <option>Pará (PA)</option>
              <option>Paraíba (PB)</option>
              <option>Paraná (PR)</option>
              <option>Pernambuco (PE)</option>
              <option>Piauí (PI)</option>
              <option>Rio de Janeiro (RJ)</option>
              <option>Rio Grande do Norte (RN)</option>
              <option>Rio Grande do Sul (RS)</option>
              <option>Rondônia (RO)</option>
              <option>Roraima (RR)</option>
              <option>Santa Catarina (SC)</option>
              <option>São Paulo (SP)</option>
              <option>Sergipe (SE)</option>
              <option>Tocantins (TO)</option>
            </select>
          </div>
        </fieldset>
      </>
    );
  }
}

export default PersonalData;