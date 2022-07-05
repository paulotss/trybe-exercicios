import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      conteudos.map((val) => {
        return (<ul>
          <li>O conteúdo é: {val.conteudo}</li>
          <li>Bloco: {val.bloco}</li>
          <li>Status: {val.status}</li>
        </ul>)
      })
    );
  }
}

export default Content;