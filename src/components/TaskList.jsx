import {useContext} from "react";
import { TaskItem } from "./TaskItem";
import TasksContext from "../context/task";

export const TaskList = () => {
  const {tasks} = useContext(TasksContext)
  return (
    <div className="task-list">
      { 
      tasks.map((task) => {
        return <TaskItem  task={task} key={task.id} />;
      })}
    </div>
  );
};
