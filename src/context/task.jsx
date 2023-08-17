import React, { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const createTask = async (title, taskDesc) => {
    await axios
      .post("http://localhost:3000/tasks", {
        title,
        taskDesc,
      })
      .then((res) => {
        console.log(res);
        const createdTasks = [...tasks, res.data];
        setTasks(createdTasks);
      });
  };
  const updateTask = async (id, title, taskDesc) => {
    await axios
      .put(`http://localhost:3000/tasks/${id}`, {
        title,
        taskDesc,
      })
      .then((res) => {
        setTasks(
          tasks.map((task) => {
            if (task.id === id) {
              return { id, title: title, taskDesc: taskDesc };
            }
            return task;
          })
        );
      });
  };
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`).then((res) => {
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    });
  };

  const sharedMethondsAndValues = {
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    tasks,
  };

  return (
    <TasksContext.Provider value={sharedMethondsAndValues}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
