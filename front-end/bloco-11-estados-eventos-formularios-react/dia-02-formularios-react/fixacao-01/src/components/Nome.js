import React from 'react';

class Nome extends React.Component {
  render() {
    const {value, handleChanged} = this.props;
    return (
      <>
        <fieldset>
          <label htmlFor='nome'>Nome: </label>
          <input type='text' id='nome' name='nome' value={value} onChange={handleChanged} />
        </fieldset>
        <div>{value.length > 45 ? 'No máximo 45 caracters' : ''}</div>
      </>
    );
  }
}

export default Nome;