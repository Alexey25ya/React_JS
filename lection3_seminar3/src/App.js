
import './App.css';
import Counter from './components.js/Counter';
import InputForm from './components.js/InputForm';
import ParentCounter from './components.js/Parent';
import TemperatureConverter from './components.js/TemperatureConverter';
import TodoList from './components.js/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TemperatureConverter />
      <ParentCounter />
      <InputForm />
      <Counter />
    </div>
  );
}

export default App;
