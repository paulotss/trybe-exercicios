import React from 'react';

class LastWorks extends React.Component {

  handleMouseEnterCargo() {
    alert('Preencha com cuidado esta informação');
  }

  render() {
    const { curriculo, cargo, dcargo, handleChange } = this.props;
    return (
      <>
        <h2>Útimo emprego</h2>
        <fieldset>
          <div>
            <label htmlFor="curriculo">Currículo: </label><br/>
            <textarea id="curriculo" name="curriculo" maxLength={1000} value={curriculo} onChange={handleChange} required ></textarea>
          </div>
          <div>
            <label htmlFor="cargo">Cargo: </label><br/>
            <input id="cargo" name="cargo" maxLength={40} value={cargo} onMouseEnter={this.handleMouseEnterCargo} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="dcargo">Descrição do cargo: </label><br />
            <textarea id="dcargo" name="dcargo" maxLength={500} value={dcargo} onChange={handleChange} required ></textarea>
          </div>
        </fieldset>
      </>
    );
  }
}

export default LastWorks;