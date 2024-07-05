
import './App.css';
import AddTodo from './components/AddTodo';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import { FilterProvider } from './contexts/FilterContext';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <FilterProvider>
          <AddTodo />
          <TodoList />
          <TodoFilter />
        </FilterProvider>
      </Provider>
    </div>
  );
}

export default App;
