import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Show from './components/Visible';
import Timer from './components/Timer';
import MessagesList from './components/MessageList';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';
import CommentList from './components/CommentList';


function App() {
  return (
    <div className="App">
      <Timer />
      <CommentList />
      <MessagesList />
      <TextInput />
      <TodoList />
      <Counter />
      <Show data="текст 1" />
      <Show data="текст 2" />
      <Show data="текст 3" />
    </div>
  );
}

export default App;
