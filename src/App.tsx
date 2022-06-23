import './App.css';
import Container from './components/container/Container';
import Filter from './components/filter/Filter';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Form />
      <Filter />
      <Container />
    </div>
  );
}

export default App;
