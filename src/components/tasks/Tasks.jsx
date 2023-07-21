import React from "react";
import styles from "../../components/tasks/tasks.module.css";
import Tasklist from "../task/Tasklist";

const Tasks = ({ tasks, onCompleted, onDelete }) => {
  const tasksQuantity = tasks.length;
  // console.log(tasksQuantity);
  const completedTask = tasks.filter((task) => task.isCompleted).length;
  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>
            {completedTask} of {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Tasklist
            key={task.id}
            task={task}
            onCompleted={onCompleted}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
