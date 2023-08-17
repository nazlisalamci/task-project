import { useState, useContext } from "react";
import TasksContext from "../context/task";

export const TaskCreate = ({ task, taskFormUpdate ,taskFromUpdateClose}) => {
  const { createTask, updateTask } = useContext(TasksContext);

  const [title, settitle] = useState(task ? task.title : "");
  const [taskDesc, settaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    settitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    settaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      updateTask(task.id, title, taskDesc);
      taskFromUpdateClose();
    } else {
      createTask(title, taskDesc);
    }
    settaskDesc("");
    settitle("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="formUpdateDiv">
          <h3>Lütfen Task Güncelleyiniz!</h3>
          <form className="taskForm">
            <label> Başlık </label>
            <input value={title} onChange={handleChange} />
            <label> Taskı Düzenleyiniz! </label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} />
            <button onClick={handleSubmit}>Güncelle</button>
          </form>
        </div>
      ) : (
        <div className="formDiv">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="taskForm">
            <label> Başlık </label>
            <input value={title} onChange={handleChange} />
            <label> Task Giriniz! </label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} />
            <button onClick={handleSubmit}>Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
};
