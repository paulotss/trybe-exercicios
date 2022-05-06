import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="cards">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
