import React from 'react';
import Nome from './Nome';
import Idade from './Idade';

class Form extends React.Component {

  constructor() {
    super();

    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      estado: '',
      newsletter: false,
      nome: '',
      idade: 0,
      bio: '',
      error: false,
    }
    this.fileInput = React.createRef();
  }

  handleChanged({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState((_sta,_props) => ({
      [name]: value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.fileInput.current.files[0].name);
  }

  render() {
    return (
      <section id='form'>
        <h1>Meu formulário</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor='estado'>Estado</label>
            <select id='estado' name='estado' value={this.state.estado} onChange={this.handleChanged}>
              <option>DF</option>
              <option>AM</option>
              <option>SP</option>
              <option>RJ</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor='arquivo'>Arquivo:</label>
            <input id='arquivo' type='file' ref={this.fileInput} />
          </fieldset>
          <fieldset>
            <label>Newsletter</label>
            <input type='checkbox' name='newsletter' checked={this.state.newsletter} onChange={this.handleChanged} />
          </fieldset>
          <Nome value={this.state.nome} handleChanged={this.handleChanged} />
          <Idade value={this.state.idade} handleChanged={this.handleChanged} />
          <fieldset>
            <label htmlFor='bio'>Bio</label>
            <textarea id='bio' name='bio' value={this.state.bio} onChange={this.handleChanged}></textarea>
          </fieldset>
          <button type='submit'>Submit form</button>
        </form>
      </section>
    );
  }
}

export default Form;