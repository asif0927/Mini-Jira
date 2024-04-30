import './App.css';
import TaskList from './components/TaskList';
import Taskcreate from './components/Taskcreate';
import { Provider } from "./context/Mycontext";

function App() {
  return (
    <>
    <Provider>
      <div className='app'>
        <Taskcreate />
        <TaskList />
      </div>
    </Provider>
    </>
  );
}

export default App;