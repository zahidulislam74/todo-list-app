import React, { useState } from "react";
import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Header = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="add a new task"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </div>
  );
};

export default Header;
