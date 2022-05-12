import React from 'react';

class LastWorks extends React.Component {
  render() {
    const { curriculo, handleChange } = this.props;
    return (
      <>
        <h2>Útimo emprego</h2>
        <fieldset>
          <label htmlFor="curriculo">Currículo: </label>
          <textarea id="curriculo" name="curriculo" maxLength={1000} value={curriculo} onChange={handleChange}></textarea>
        </fieldset>
      </>
    );
  }
}

export default LastWorks;