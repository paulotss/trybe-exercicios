import React from "react";

class Idade extends React.Component {
  render() {
    const {value, handleChanged, handleError} = this.props;
    return (
      <>
      <fieldset>
        <label htmlFor='idade'>Idade</label>
        <input type='number' id='idade' name='idade' value={value} onChange={handleChanged} />
      </fieldset>
      </>
    );
  }
}

export default Idade;