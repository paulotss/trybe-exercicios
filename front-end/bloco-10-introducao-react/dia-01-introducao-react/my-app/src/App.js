import './App.css';

const tasks = ['acordar', 'jogar', 'café', 'almoçar', 'dormir'];

function App() {

  const task = (value) => {
    return (
    <li key={value}>{value}</li>
    )
  }

  return (
    <div className="App">
      <p>Hello World</p>
      <ul>
        {tasks.map((val) => task(val))}
      </ul>
    </div>
  );
}

export default App;
