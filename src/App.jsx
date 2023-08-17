import { useEffect,useContext } from "react";
import "./App.css";
import { TaskCreate } from "./components/TaskCreate";
import { TaskList } from "./components/TaskList";
import TasksContext from "./context/task";

function App() {
  const context = useContext(TasksContext);
  useEffect(() => {
    context.fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevlar</h1>
      <TaskList />
    </div>
  );
}

export default App;
