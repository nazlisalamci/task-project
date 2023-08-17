import React from "react";
import { TaskCreate } from "./TaskCreate";
import { useState,useContext } from "react";
import TasksContext from "../context/task";



export const TaskItem = ({ task }) => {
  const [showEdit, setShowEdit] = useState(false);

  const {deleteTask} = useContext(TasksContext)


  const handleDelete = () => {
    deleteTask(task.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div className="task-item">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={showEdit}  taskFromUpdateClose={handleEdit} />
      ) : (
        <div>
          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="deleteButton" onClick={handleDelete}>
              Sil
            </button>
            <button className="updateButton" onClick={handleEdit}>
              Gücelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
