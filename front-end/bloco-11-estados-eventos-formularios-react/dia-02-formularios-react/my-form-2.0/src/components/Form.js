import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import LastWorks from './LastWork';
import PersonalData from './PersonalData';

class Form extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      curriculo: '',
    }
  }

  handleChange({ target }) {
    const {name, value} = target;
    this.setState({
      [name] : value,
    });
  }

  render() {
    return (
      <section>
        <form>
          <PersonalData 
            handleChange={this.handleChange}
            nome={this.state.nome}
            email={this.state.email}
            cpf={this.state.cpf}
            endereco={this.state.endereco}
            cidade={this.state.cidade}
            estado={this.state.estado}
          />
          <LastWorks
            handleChange={this.handleChange}
            curriculo={this.state.curriculo}
          />
        </form>
      </section>
    );
  }
}

export default Form;